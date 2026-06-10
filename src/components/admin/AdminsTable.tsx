"use client";

import { useState } from "react";
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
import { Pencil, Trash2, KeyRound, Plus } from "lucide-react";
import { AdminModal } from "./AdminModal";
import { DeleteAdminDialog } from "./DeleteAdminDialog";
import { ChangePasswordModal } from "./ChangePasswordModal";
import type { AdminRecord } from "./types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AdminsTableProps {
  admins: AdminRecord[];
}

export function AdminsTable({ admins }: AdminsTableProps) {
  const router = useRouter();
  const [editAdmin, setEditAdmin] = useState<AdminRecord | null>(null);
  const [deleteAdmin, setDeleteAdmin] = useState<AdminRecord | null>(null);
  const [passwordAdmin, setPasswordAdmin] = useState<AdminRecord | null>(null);
  const [createOpen, setCreateOpen] = useState(false);

  const handleSuccess = () => {
    setEditAdmin(null);
    setDeleteAdmin(null);
    setPasswordAdmin(null);
    setCreateOpen(false);
    router.refresh();
  };

  const roleBadge = (role: string) => {
    if (role === "SUPER_ADMIN")
      return (
        <Badge className="bg-amber-100 text-amber-700 border-amber-200">
          Super Admin
        </Badge>
      );
    return (
      <Badge className="bg-gray-100 text-gray-700 border-gray-200">Admin</Badge>
    );
  };

  const permissionBadge = (permission: string) => {
    const map: Record<string, { label: string; className: string }> = {
      READ_ONLY: { label: "Read Only", className: "bg-blue-100 text-blue-700" },
      READ_WRITE: {
        label: "Read & Write",
        className: "bg-purple-100 text-purple-700",
      },
      FULL_ACCESS: {
        label: "Full Access",
        className: "bg-green-100 text-green-700",
      },
    };
    const { label, className } = map[permission] || {
      label: permission,
      className: "bg-gray-100 text-gray-700",
    };
    return <Badge className={className}>{label}</Badge>;
  };

  return (
    <>
      <TooltipProvider>
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setCreateOpen(true)}
            className="bg-gray-800 hover:bg-gray-700 cursor-pointer"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Admin
          </Button>
        </div>

        <div className="rounded-md border border-gray-200 bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Permission</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admins.map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell className="font-medium text-gray-800">
                    {admin.name}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {admin.username}
                  </TableCell>
                  <TableCell className="text-gray-600">{admin.email}</TableCell>
                  <TableCell>{roleBadge(admin.role)}</TableCell>
                  <TableCell>{permissionBadge(admin.permission)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setEditAdmin(admin)}
                              className="cursor-pointer"
                            />
                          }
                        >
                          <Pencil className="h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit Admin</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setPasswordAdmin(admin)}
                              className="cursor-pointer"
                            />
                          }
                        >
                          <KeyRound className="h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Change Password</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDeleteAdmin(admin)}
                              className="cursor-pointer"
                            />
                          }
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete Admin</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {admins.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-gray-500 py-4"
                  >
                    No admins found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Create Modal */}
        <AdminModal
          open={createOpen}
          onOpenChange={setCreateOpen}
          onSuccess={handleSuccess}
        />

        {/* Edit Modal */}
        {editAdmin && (
          <AdminModal
            open={!!editAdmin}
            onOpenChange={() => setEditAdmin(null)}
            admin={editAdmin}
            onSuccess={handleSuccess}
          />
        )}

        {/* Delete Dialog */}
        {deleteAdmin && (
          <DeleteAdminDialog
            open={!!deleteAdmin}
            onOpenChange={() => setDeleteAdmin(null)}
            admin={deleteAdmin}
            onSuccess={handleSuccess}
          />
        )}

        {/* Change Password Modal */}
        {passwordAdmin && (
          <ChangePasswordModal
            open={!!passwordAdmin}
            onOpenChange={() => setPasswordAdmin(null)}
            admin={passwordAdmin}
            onSuccess={handleSuccess}
          />
        )}
      </TooltipProvider>
    </>
  );
}
