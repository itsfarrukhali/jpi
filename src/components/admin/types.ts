export type AdminRole = "ADMIN" | "SUPER_ADMIN";
export type AdminPermission = "READ_ONLY" | "READ_WRITE" | "FULL_ACCESS";
export type AdminDesignation =
  | "PRINCIPAL"
  | "VICE_PRINCIPAL"
  | "HEAD_OF_DEPARTMENT"
  | "ADMINISTRATOR";
export type ManageContentType =
  | "NEWS"
  | "PROGRAMS"
  | "CAREERS"
  | "DEPARTMENTS"
  | "COURSES"
  | "WEBSITE_SETTINGS";

export type AdminRecord = {
  id: string;
  username: string;
  name: string;
  email: string;
  designation: AdminDesignation | null;
  role: AdminRole;
  permission: AdminPermission;
  manageContent: ManageContentType[];
  createdAt?: Date;
};
