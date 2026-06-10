"use client";

import { useState } from "react";
import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChangePasswordModal } from "@/components/admin/ChangePasswordModal";
import type { AdminRecord } from "@/components/admin/types";

export function SecuritySettings({ admin }: { admin: AdminRecord }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <KeyRound /> Change Password
      </Button>
      <ChangePasswordModal
        open={open}
        onOpenChange={setOpen}
        admin={admin}
        onSuccess={() => setOpen(false)}
      />
    </>
  );
}
