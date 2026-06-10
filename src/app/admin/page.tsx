import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatsCards } from "@/components/StatsCards";
import { RecentNewsTable } from "@/components/RecentNewsTable";
import { Newspaper, GraduationCap, Briefcase, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { canManageAdmins, canReadContent, getAuthAdmin } from "@/lib/auth/server";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const admin = await getAuthAdmin();
  if (!admin) redirect("/login");
  const canReadNews = canReadContent(admin, "NEWS");
  const canReadPrograms = canReadContent(admin, "PROGRAMS");
  const canReadCareers = canReadContent(admin, "CAREERS");
  const canReadAdmins = canManageAdmins(admin);

  const [newsCount, programsCount, jobsCount, adminsCount] = await Promise.all([
    canReadNews ? prisma.newsItem.count() : 0,
    canReadPrograms ? prisma.program.count() : 0,
    canReadCareers ? prisma.jobOpening.count() : 0,
    canReadAdmins ? prisma.admin.count() : 0,
  ]);

  const recentNews = canReadNews ? await prisma.newsItem.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    select: {
      id: true,
      title: true,
      category: true,
      date: true,
      published: true,
    },
  }) : [];

  const stats = [
    {
      title: "News & Events",
      value: newsCount,
      icon: Newspaper,
      href: "/admin/news-events",
    },
    {
      title: "Programs",
      value: programsCount,
      icon: GraduationCap,
      href: "/admin/programs",
    },
    {
      title: "Job Openings",
      value: jobsCount,
      icon: Briefcase,
      href: "/admin/careers",
    },
    { title: "Admins", value: adminsCount, icon: Users, href: "/admin/admins" },
  ].filter((item) => {
    if (item.href === "/admin/news-events") return canReadNews;
    if (item.href === "/admin/programs") return canReadPrograms;
    if (item.href === "/admin/careers") return canReadCareers;
    return canReadAdmins;
  });

  const quickActions = [
    { title: "Add News", href: "/admin/news-events", icon: Newspaper },
    { title: "Add Program", href: "/admin/programs", icon: GraduationCap },
    { title: "Add Job Opening", href: "/admin/careers", icon: Briefcase },
    { title: "Add Admin", href: "/admin/admins", icon: Users },
  ].filter((item) => {
    if (item.href === "/admin/news-events") return canReadNews;
    if (item.href === "/admin/programs") return canReadPrograms;
    if (item.href === "/admin/careers") return canReadCareers;
    return canReadAdmins;
  });

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Welcome back, {user?.name ?? user?.username}
          {user?.role && (
            <span className="ml-2 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full capitalize">
              {user.role.replace("_", " ").toLowerCase()}
            </span>
          )}
        </p>
      </div>

      <StatsCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">
              Quick Actions
            </CardTitle>
            <CardDescription>Create new content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {quickActions.map(({ title, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors"
              >
                <Icon className="h-4 w-4 text-amber-600" />
                {title}
              </Link>
            ))}
          </CardContent>
        </Card>

        {canReadNews && <div className="lg:col-span-2"><RecentNewsTable news={recentNews} /></div>}
      </div>
    </div>
  );
}
