"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Newspaper,
  GraduationCap,
  Briefcase,
  Users,
  LayoutDashboardIcon,
  Settings2Icon,
  CircleHelpIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type AppSidebarUser = {
  name?: string | null;
  email?: string | null;
  username?: string | null;
  avatarURL?: string | null;
  role?: "SUPER_ADMIN" | "ADMIN";
  permission?: "READ_ONLY" | "READ_WRITE" | "FULL_ACCESS";
  manageContent?: string[];
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user?: AppSidebarUser;
};

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "News & Events",
      url: "/admin/news-events",
      icon: <Newspaper />,
    },
    {
      title: "Programs",
      url: "/admin/programs",
      icon: <GraduationCap />,
    },
    {
      title: "Job Openings",
      url: "/admin/careers",
      icon: <Briefcase />,
    },
    {
      title: "Admins",
      url: "/admin/admins",
      icon: <Users />,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/admin/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Get Help",
      url: "/admin/help",
      icon: <CircleHelpIcon />,
    },
    {
      title: "Search",
      url: "/admin/search",
      icon: <SearchIcon />,
    },
  ],
};

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const safeUser: AppSidebarUser = user ?? {};

  const navUser = {
    name: safeUser.name ?? safeUser.username ?? "Admin",
    email: safeUser.email ?? "admin@jpi.edu.pk",
    avatar: safeUser.avatarURL ?? "",
  };
  const canRead = (content: string) =>
    safeUser.role === "SUPER_ADMIN" ||
    safeUser.permission === "FULL_ACCESS" ||
    safeUser.manageContent?.includes(content);
  const visibleMain = data.navMain.filter((item) => {
    if (item.url === "/admin/admins") {
      return safeUser.role === "SUPER_ADMIN" || safeUser.permission === "FULL_ACCESS";
    }
    if (item.url === "/admin/news-events") return canRead("NEWS");
    if (item.url === "/admin/programs") return canRead("PROGRAMS");
    if (item.url === "/admin/careers") return canRead("CAREERS");
    return true;
  });

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-4 py-5 border-b border-white/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-transparent p-1 h-auto">
              <Link href="/admin">
                <Image
                  src="/brand/jpi-logo-tp.png"
                  alt="Jinnah Polytechnic Institute"
                  width={350}
                  height={100}
                  className="h-full w-auto shrink-0"
                  priority
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider px-4 pb-2">
            Main Menu
          </SidebarGroupLabel>
          <NavMain items={visibleMain} />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
