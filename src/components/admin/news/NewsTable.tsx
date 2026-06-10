"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { NewsModal } from "./NewsModal";
import { DeleteNewsDialog } from "./DeleteNewsDialog";
import type { NewsItemRecord } from "@/types/news";

interface NewsTableProps {
  news: NewsItemRecord[];
}

type SortKey = "title" | "category" | "date" | "published";
type SortDirection = "asc" | "desc";
const PAGE_SIZE = 10;

const categoryBadge = (category: string) => {
  const map: Record<string, string> = {
    NEWS: "bg-blue-100 text-blue-700",
    ANNOUNCEMENTS: "bg-amber-100 text-amber-700",
    EVENTS: "bg-purple-100 text-purple-700",
    SEMINARS: "bg-teal-100 text-teal-700",
  };
  return map[category] || "bg-gray-100 text-gray-700";
};

export function NewsTable({ news }: NewsTableProps) {
  const router = useRouter();
  const [editItem, setEditItem] = useState<NewsItemRecord | null>(null);
  const [deleteItem, setDeleteItem] = useState<NewsItemRecord | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [page, setPage] = useState(1);

  const visibleNews = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filteredNews = query
      ? news.filter((item) => {
          const searchableValues = [
            item.title,
            item.category.replaceAll("_", " "),
            item.published ? "published" : "draft",
            new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          ];

          return searchableValues.some((value) =>
            value.toLowerCase().includes(query),
          );
        })
      : news;

    return [...filteredNews].sort((left, right) => {
      let comparison = 0;

      if (sortKey === "date") {
        comparison = new Date(left.date).getTime() - new Date(right.date).getTime();
      } else if (sortKey === "published") {
        comparison = Number(left.published) - Number(right.published);
      } else {
        comparison = left[sortKey].localeCompare(right[sortKey]);
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [news, searchQuery, sortDirection, sortKey]);
  const totalPages = Math.max(1, Math.ceil(visibleNews.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedNews = visibleNews.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleSuccess = () => {
    setEditItem(null);
    setDeleteItem(null);
    setCreateOpen(false);
    router.refresh();
  };

  const handleSort = (key: SortKey) => {
    setPage(1);
    if (sortKey === key) {
      setSortDirection((direction) => (direction === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection(key === "date" ? "desc" : "asc");
  };

  const sortIcon = (key: SortKey) => {
    if (sortKey !== key) return <ArrowUpDown className="size-3.5" />;
    return sortDirection === "asc" ? (
      <ArrowUp className="size-3.5" />
    ) : (
      <ArrowDown className="size-3.5" />
    );
  };

  const sortableHeader = (label: string, key: SortKey) => (
    <Button
      type="button"
      variant="ghost"
      className="-ml-2 h-7"
      onClick={() => handleSort(key)}
    >
      {label}
      {sortIcon(key)}
    </Button>
  );

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search title, category, date, or status"
            className="pl-7"
          />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{news.length} total news items</Badge>
          <Button
            onClick={() => setCreateOpen(true)}
            className="bg-gray-800 hover:bg-gray-700"
          >
            <Plus className="mr-2 h-4 w-4" /> Add News
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-gray-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{sortableHeader("Title", "title")}</TableHead>
              <TableHead>{sortableHeader("Category", "category")}</TableHead>
              <TableHead>{sortableHeader("Date", "date")}</TableHead>
              <TableHead>{sortableHeader("Status", "published")}</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedNews.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-gray-800 max-w-75 truncate">
                  {item.title}
                </TableCell>
                <TableCell>
                  <Badge className={categoryBadge(item.category)}>
                    {item.category.replace("_", " ").toLowerCase()}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      item.published
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.published ? "Published" : "Draft"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setEditItem(item)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDeleteItem(item)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {visibleNews.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-gray-500 py-4"
                >
                  {searchQuery ? "No news items match your search." : "No news items yet."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing {visibleNews.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}
          {"-"}
          {Math.min(currentPage * PAGE_SIZE, visibleNews.length)} of{" "}
          {visibleNews.length} news items
          {searchQuery && ` (${news.length} total)`}
        </p>
        <div className="flex items-center gap-2">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            disabled={currentPage === 1}
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            disabled={currentPage === totalPages}
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            aria-label="Next page"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <NewsModal
        open={createOpen}
        onOpenChange={setCreateOpen}
        onSuccess={handleSuccess}
      />

      {editItem && (
        <NewsModal
          open={!!editItem}
          onOpenChange={() => setEditItem(null)}
          newsItem={editItem}
          onSuccess={handleSuccess}
        />
      )}

      {deleteItem && (
        <DeleteNewsDialog
          open={!!deleteItem}
          onOpenChange={() => setDeleteItem(null)}
          newsItem={deleteItem}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
}
