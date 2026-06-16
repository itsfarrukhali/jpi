"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { ProgramModal } from "./ProgramModal";
import { DeleteProgramDialog } from "./DeleteProgramDialog";
import type { ProgramRecord } from "@/types/programs";

const listingLabels: Record<string, string> = {
  DAE: "DAE",
  CERTIFICATIONS: "Certifications",
  DIPLOMA_CERTIFICATIONS: "Diploma Certifications",
  SHORT_COURSES: "JCE Short Courses",
  JEC: "JCE AutoCAD",
};

export function ProgramsTable({ programs }: { programs: ProgramRecord[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [listing, setListing] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [createOpen, setCreateOpen] = useState(false);
  const [edit, setEdit] = useState<ProgramRecord | null>(null);
  const [remove, setRemove] = useState<ProgramRecord | null>(null);

  const visible = useMemo(() => {
    const value = query.trim().toLowerCase();
    return programs.filter((program) => {
      const matchesQuery = !value || [program.name, program.shortName, program.slug, program.department ?? ""]
        .some((field) => field.toLowerCase().includes(value));
      const matchesListing = listing === "ALL" || program.listingPage === listing;
      const matchesStatus = status === "ALL" || (status === "PUBLISHED") === program.published;
      return matchesQuery && matchesListing && matchesStatus;
    });
  }, [listing, programs, query, status]);

  const success = () => {
    setCreateOpen(false);
    setEdit(null);
    setRemove(null);
    router.refresh();
  };

  return (
    <>
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-8" placeholder="Search programs" />
          </div>
          <select className="h-9 rounded-md border bg-white px-3 text-sm" value={listing} onChange={(event) => setListing(event.target.value)}>
            <option value="ALL">All listing pages</option>
            <option value="DAE">DAE</option>
            <option value="CERTIFICATIONS">Certifications</option>
            <option value="DIPLOMA_CERTIFICATIONS">Diploma Certifications</option>
            <option value="SHORT_COURSES">JCE Short Courses</option>
            <option value="JEC">JCE AutoCAD</option>
          </select>
          <select className="h-9 rounded-md border bg-white px-3 text-sm" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="ALL">All statuses</option>
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{programs.length} total programs</Badge>
          <Button onClick={() => setCreateOpen(true)}><Plus /> Add Program</Button>
        </div>
      </div>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader><TableRow>
            <TableHead>Program</TableHead><TableHead>Listing</TableHead><TableHead>Duration</TableHead>
            <TableHead>Seats</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {visible.map((program) => (
              <TableRow key={program.id}>
                <TableCell><div className="font-medium">{program.shortName}</div><div className="text-xs text-gray-500">{program.slug}</div></TableCell>
                <TableCell>{listingLabels[program.listingPage] ?? program.listingPage.replaceAll("_", " ")}</TableCell>
                <TableCell>{program.duration}</TableCell>
                <TableCell>{program.seats}</TableCell>
                <TableCell>{program.published ? "Published" : "Draft"}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Edit ${program.shortName}`}
                    onClick={() => setEdit(program)}
                  >
                    <Pencil />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Delete ${program.shortName}`}
                    onClick={() => setRemove(program)}
                  >
                    <Trash2 className="text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {visible.length === 0 && <TableRow><TableCell colSpan={6} className="py-8 text-center text-gray-500">No programs found.</TableCell></TableRow>}
          </TableBody>
        </Table>
      </div>
      <ProgramModal open={createOpen} onOpenChange={setCreateOpen} onSuccess={success} />
      {edit && <ProgramModal open program={edit} onOpenChange={() => setEdit(null)} onSuccess={success} />}
      {remove && <DeleteProgramDialog open program={remove} onOpenChange={() => setRemove(null)} onSuccess={success} />}
    </>
  );
}
