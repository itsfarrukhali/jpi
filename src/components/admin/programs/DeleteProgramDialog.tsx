"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import type { ProgramRecord } from "@/types/programs";

export function DeleteProgramDialog({ program, open, onOpenChange, onSuccess }: {
  program: ProgramRecord; open: boolean; onOpenChange: (open: boolean) => void; onSuccess: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const remove = async () => {
    setLoading(true);
    const response = await fetch(`/api/admin/programs/${program.id}`, { method: "DELETE" });
    setLoading(false);
    if (!response.ok) return toast.error("Unable to delete program");
    toast.success("Program deleted");
    onSuccess();
  };
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent>
    <DialogHeader><DialogTitle>Delete Program</DialogTitle><DialogDescription>
      Delete <strong>{program.name}</strong>? This cannot be undone.
    </DialogDescription></DialogHeader>
    <DialogFooter><Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
      <Button variant="destructive" disabled={loading} onClick={remove}>{loading && <Loader2 className="animate-spin" />} Delete</Button>
    </DialogFooter>
  </DialogContent></Dialog>;
}
