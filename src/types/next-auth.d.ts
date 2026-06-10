import { Role, Permission, ContentType } from "@prisma/client";

declare module "next-auth" {
  interface User {
    id: string;
    username: string;
    role: Role;
    permission: Permission;
    manageContent: ContentType[];
    avatarURL?: string | null;
  }
  interface Session {
    user: {
      id: string;
      username: string;
      name: string;
      email: string;
      role: Role;
      permission: Permission;
      manageContent: ContentType[];
      avatarURL?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    role: Role;
    permission: Permission;
    manageContent: ContentType[];
    avatarURL?: string | null;
  }
}
