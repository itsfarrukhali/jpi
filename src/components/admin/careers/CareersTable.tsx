"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, ImageIcon, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CareerModal } from "./CareerModal";
import { DeleteCareerDialog } from "./DeleteCareerDialog";
import type { JobOpeningRecord } from "@/types/careers";

export function CareersTable({ openings }: { openings: JobOpeningRecord[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [edit, setEdit] = useState<JobOpeningRecord | null>(null);
  const [remove, setRemove] = useState<JobOpeningRecord | null>(null);

  const visible = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return openings;
    return openings.filter((opening) =>
      [opening.title, opening.department, opening.type, opening.published ? "published" : "draft"]
        .some((field) => field.toLowerCase().includes(value)),
    );
  }, [openings, query]);

  const success = () => {
    setCreateOpen(false);
    setEdit(null);
    setRemove(null);
    router.refresh();
  };

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-8" placeholder="Search openings" />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{openings.length} total openings</Badge>
          <Button onClick={() => setCreateOpen(true)}><Plus /> Add Opening</Button>
        </div>
      </div>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Notice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map((opening) => (
              <TableRow key={opening.id}>
                <TableCell className="font-medium">{opening.title}</TableCell>
                <TableCell>{opening.department}</TableCell>
                <TableCell>{opening.type}</TableCell>
                <TableCell>
                  {opening.officialNoticeType === "IMAGE" && <ImageIcon />}
                  {opening.officialNoticeType === "PDF" && <FileText />}
                  {!opening.officialNoticeType && "None"}
                </TableCell>
                <TableCell>{opening.published ? "Published" : "Draft"}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon-sm" onClick={() => setEdit(opening)}><Pencil /></Button>
                  <Button variant="ghost" size="icon-sm" onClick={() => setRemove(opening)}><Trash2 className="text-red-500" /></Button>
                </TableCell>
              </TableRow>
            ))}
            {visible.length === 0 && (
              <TableRow><TableCell colSpan={6} className="py-8 text-center text-gray-500">No job openings found.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <CareerModal open={createOpen} onOpenChange={setCreateOpen} onSuccess={success} />
      {edit && <CareerModal open opening={edit} onOpenChange={() => setEdit(null)} onSuccess={success} />}
      {remove && <DeleteCareerDialog open opening={remove} onOpenChange={() => setRemove(null)} onSuccess={success} />}
    </>
  );
}
