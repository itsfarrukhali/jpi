"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  changePasswordSchema,
  resetPasswordSchema,
} from "@/lib/validations/admin";
import { useSession } from "next-auth/react";
import type { AdminRecord } from "@/components/admin/types";

type PasswordFormValues = {
  currentPassword?: string;
  newPassword: string;
};

interface ChangePasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  admin: AdminRecord;
  onSuccess: () => void;
}

export function ChangePasswordModal({
  open,
  onOpenChange,
  admin,
  onSuccess,
}: ChangePasswordModalProps) {
  const { data: session } = useSession();
  const isOwnProfile = session?.user?.id === admin.id;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(
      isOwnProfile ? changePasswordSchema : resetPasswordSchema,
    ),
  });

  const onSubmit = async (data: PasswordFormValues) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/admins/${admin.id}/password`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        toast.error(text || "Failed to change password");
        return;
      }

      toast.success("Password changed successfully");
      reset();
      onSuccess();
      onOpenChange(false);
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-100">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            {isOwnProfile
              ? "Enter your current password and a new password"
              : `Reset password for ${admin.name}`}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isOwnProfile && (
            <div>
              <Label htmlFor="currentPassword">Current Password *</Label>
              <Input
                id="currentPassword"
                type="password"
                {...register("currentPassword")}
                placeholder="••••••••"
              />
              {errors.currentPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>
          )}
          <div>
            <Label htmlFor="newPassword">New Password *</Label>
            <Input
              id="newPassword"
              type="password"
              {...register("newPassword")}
              placeholder="••••••••"
            />
            {errors.newPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gray-800 hover:bg-gray-700"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isOwnProfile ? "Change Password" : "Reset Password"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
