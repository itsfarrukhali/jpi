import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type RecentNewsItem = {
  id: string;
  title: string;
  category: string;
  date: Date;
  published: boolean;
};

export function RecentNewsTable({ news }: { news: RecentNewsItem[] }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Recent News</h3>
          <p className="text-sm text-gray-500">Latest 5 news items</p>
        </div>
        <Link
          href="/admin/news"
          className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
        >
          View All <ExternalLink className="h-3 w-3" />
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-75">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-gray-800 truncate max-w-75">
                {item.title}
              </TableCell>
              <TableCell className="text-xs capitalize text-gray-500">
                {item.category.toLowerCase()}
              </TableCell>
              <TableCell className="text-xs text-gray-500 whitespace-nowrap">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="text-right">
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
            </TableRow>
          ))}
          {news.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500 py-4">
                No news items yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
