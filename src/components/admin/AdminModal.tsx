"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, useWatch, type Resolver } from "react-hook-form";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { adminCreateSchema, adminUpdateSchema } from "@/lib/validations/admin";
import type {
  AdminDesignation,
  AdminPermission,
  AdminRecord,
  AdminRole,
  ManageContentType,
} from "./types";

type AdminFormValues = {
  username: string;
  name: string;
  email: string;
  password?: string;
  designation?: AdminDesignation;
  role?: AdminRole;
  permission?: AdminPermission;
  manageContent?: ManageContentType[];
};

interface AdminModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  admin?: AdminRecord | null; // if provided, edit mode
  onSuccess: () => void;
}

const contentOptions = [
  { value: "NEWS", label: "News & Events" },
  { value: "PROGRAMS", label: "Programs" },
  { value: "CAREERS", label: "Job Openings" },
  { value: "DEPARTMENTS", label: "Departments" },
  { value: "COURSES", label: "Courses" },
  { value: "WEBSITE_SETTINGS", label: "Website Settings" },
] as const;

export function AdminModal({
  open,
  onOpenChange,
  admin,
  onSuccess,
}: AdminModalProps) {
  const isEdit = !!admin;
  const [loading, setLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
    null,
  );
  const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const availabilityTimers = useRef<{ username?: number; email?: number }>({});

  const formSchema = isEdit ? adminUpdateSchema : adminCreateSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control,
  } = useForm<AdminFormValues>({
    resolver: zodResolver(formSchema) as Resolver<AdminFormValues>,
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      designation: "ADMINISTRATOR",
      role: "ADMIN",
      permission: "READ_ONLY",
      manageContent: [],
    },
  });

  useEffect(() => {
    if (admin) {
      reset({
        username: admin.username,
        name: admin.name,
        email: admin.email,
        password: "",
        designation: admin.designation ?? undefined,
        role: admin.role,
        permission: admin.permission,
        manageContent: admin.manageContent,
      });
    } else {
      reset({
        username: "",
        name: "",
        email: "",
        password: "",
        designation: "ADMINISTRATOR",
        role: "ADMIN",
        permission: "READ_ONLY",
        manageContent: [],
      });
    }
    const timerId = window.setTimeout(() => {
      setUsernameAvailable(null);
      setEmailAvailable(null);
    }, 0);

    return () => window.clearTimeout(timerId);
  }, [admin, open, reset]);

  const checkAvailability = async (
    field: "username" | "email",
    value: string,
  ) => {
    if (!value || value.length < 3) return;

    const timerId = availabilityTimers.current[field];
    if (timerId !== undefined) {
      window.clearTimeout(timerId);
    }

    availabilityTimers.current[field] = window.setTimeout(async () => {
      const params = new URLSearchParams();
      if (field === "username") params.set("username", value);
      if (field === "email") params.set("email", value);
      if (admin?.id) params.set("excludeId", admin.id);

      try {
        const res = await fetch(
          `/api/admin/admins/check-availability?${params}`,
        );
        const data = await res.json();
        if (field === "username") {
          setUsernameAvailable(data.available);
          setCheckingUsername(false);
        } else {
          setEmailAvailable(data.available);
          setCheckingEmail(false);
        }
      } catch {
        if (field === "username") {
          setCheckingUsername(false);
        } else {
          setCheckingEmail(false);
        }
      }
    }, 500);
  };

  const onSubmit = async (data: AdminFormValues) => {
    setLoading(true);
    try {
      const url = isEdit
        ? `/api/admin/admins/${admin.id}`
        : "/api/admin/admins";
      const method = isEdit ? "PUT" : "POST";

      // Remove password for edit if empty
      const payload = isEdit ? { ...data, password: undefined } : data;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        toast.error(text || "Something went wrong");
        return;
      }

      toast.success(
        isEdit ? "Admin updated successfully" : "Admin created successfully",
      );
      onSuccess();
      onOpenChange(false);
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  const role = useWatch({ control, name: "role" });
  const permission = useWatch({ control, name: "permission" });
  const designation = useWatch({ control, name: "designation" });
  const manageContent = useWatch({ control, name: "manageContent" }) ?? [];

  const usernameRegister = register("username");
  const emailRegister = register("email");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Admin" : "Add New Admin"}</DialogTitle>
          <DialogDescription>
            {isEdit ? "Update admin details" : "Create a new admin account"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" {...register("name")} placeholder="John Doe" />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="username">Username *</Label>
            <Input
              id="username"
              {...usernameRegister}
              placeholder="john_doe"
              onChange={(e) => {
                usernameRegister.onChange(e);
                setCheckingUsername(true);
                checkAvailability("username", e.target.value);
              }}
            />
            {checkingUsername && (
              <p className="text-xs text-gray-400 mt-1">Checking...</p>
            )}
            {usernameAvailable === false && (
              <p className="text-xs text-red-500 mt-1">
                Username already taken
              </p>
            )}
            {usernameAvailable === true && (
              <p className="text-xs text-green-600 mt-1">Username available</p>
            )}
            {errors.username && (
              <p className="text-xs text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...emailRegister}
              placeholder="admin@jpi.edu.pk"
              onChange={(e) => {
                emailRegister.onChange(e);
                setCheckingEmail(true);
                checkAvailability("email", e.target.value);
              }}
            />
            {checkingEmail && (
              <p className="text-xs text-gray-400 mt-1">Checking...</p>
            )}
            {emailAvailable === false && (
              <p className="text-xs text-red-500 mt-1">Email already taken</p>
            )}
            {emailAvailable === true && (
              <p className="text-xs text-green-600 mt-1">Email available</p>
            )}
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {!isEdit && (
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Role</Label>
              <Select
                value={role}
                onValueChange={(value) => setValue("role", value as AdminRole)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Permission</Label>
              <Select
                value={permission}
                onValueChange={(value) =>
                  setValue("permission", value as AdminPermission)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select permission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="READ_ONLY">Read Only</SelectItem>
                  <SelectItem value="READ_WRITE">Read & Write</SelectItem>
                  <SelectItem value="FULL_ACCESS">Full Access</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Designation</Label>
            <Select
              value={designation}
              onValueChange={(value) =>
                setValue("designation", value as AdminDesignation)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select designation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PRINCIPAL">Principal</SelectItem>
                <SelectItem value="VICE_PRINCIPAL">Vice Principal</SelectItem>
                <SelectItem value="HEAD_OF_DEPARTMENT">
                  Head of Department
                </SelectItem>
                <SelectItem value="ADMINISTRATOR">Administrator</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2 block">Manage Content</Label>
            <div className="grid grid-cols-2 gap-2">
              {contentOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 text-sm"
                >
                  <Checkbox
                    checked={manageContent.includes(opt.value)}
                    onCheckedChange={(checked) => {
                      const current = manageContent;
                      if (checked) {
                        setValue("manageContent", [...current, opt.value]);
                      } else {
                        setValue(
                          "manageContent",
                          current.filter((v) => v !== opt.value),
                        );
                      }
                    }}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gray-800 hover:bg-gray-700"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEdit ? "Update Admin" : "Create Admin"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
