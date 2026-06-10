import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {
  Briefcase,
  GraduationCap,
  Newspaper,
  Search,
  Users,
} from "lucide-react";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  const { q = "" } = await searchParams;
  const query = q.trim();
  const canAccess = (content: "NEWS" | "PROGRAMS" | "CAREERS") =>
    session.user.role === "SUPER_ADMIN" ||
    session.user.permission === "FULL_ACCESS" ||
    session.user.manageContent.includes(content);
  const canSeeAdmins =
    session.user.role === "SUPER_ADMIN" ||
    session.user.permission === "FULL_ACCESS";

  const [news, programs, careers, admins] =
    query.length >= 2
      ? await Promise.all([
          canAccess("NEWS")
            ? prisma.newsItem.findMany({
                where: {
                  OR: [
                    { title: { contains: query, mode: "insensitive" } },
                    { excerpt: { contains: query, mode: "insensitive" } },
                  ],
                },
                take: 10,
                orderBy: { createdAt: "desc" },
              })
            : [],
          canAccess("PROGRAMS")
            ? prisma.program.findMany({
                where: {
                  OR: [
                    { name: { contains: query, mode: "insensitive" } },
                    { shortName: { contains: query, mode: "insensitive" } },
                    { slug: { contains: query, mode: "insensitive" } },
                  ],
                },
                take: 10,
                orderBy: { createdAt: "desc" },
              })
            : [],
          canAccess("CAREERS")
            ? prisma.jobOpening.findMany({
                where: {
                  OR: [
                    { title: { contains: query, mode: "insensitive" } },
                    { department: { contains: query, mode: "insensitive" } },
                  ],
                },
                take: 10,
                orderBy: { createdAt: "desc" },
              })
            : [],
          canSeeAdmins
            ? prisma.admin.findMany({
                where: {
                  OR: [
                    { name: { contains: query, mode: "insensitive" } },
                    { username: { contains: query, mode: "insensitive" } },
                    { email: { contains: query, mode: "insensitive" } },
                  ],
                },
                take: 10,
                orderBy: { createdAt: "desc" },
              })
            : [],
        ])
      : [[], [], [], []];
  const total = news.length + programs.length + careers.length + admins.length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Search</h1>
        <p className="mt-1 text-sm text-gray-500">
          Find dashboard content you have permission to access.
        </p>
      </div>
      <form className="relative max-w-2xl">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
        <Input
          name="q"
          defaultValue={query}
          className="h-10 pl-9 pr-24"
          placeholder="Search news, programs, jobs, or admins"
          autoFocus
        />
        <button className="absolute right-1 top-1 h-8 rounded-md bg-primary px-4 text-xs font-medium text-white">
          Search
        </button>
      </form>

      {query.length < 2 ? (
        <p className="text-sm text-gray-500">
          Enter at least two characters to search.
        </p>
      ) : (
        <>
          <Badge variant="outline">
            {total} results for “{query}”
          </Badge>
          <div className="grid gap-4 lg:grid-cols-2">
            <Results
              title="News & Events"
              href="/admin/news-events"
              icon={Newspaper}
              items={news.map((item) => ({
                id: item.id,
                title: item.title,
                meta: item.category.replaceAll("_", " "),
              }))}
            />
            <Results
              title="Programs"
              href="/admin/programs"
              icon={GraduationCap}
              items={programs.map((item) => ({
                id: item.id,
                title: item.shortName,
                meta: item.listingPage.replaceAll("_", " "),
              }))}
            />
            <Results
              title="Job Openings"
              href="/admin/careers"
              icon={Briefcase}
              items={careers.map((item) => ({
                id: item.id,
                title: item.title,
                meta: item.department,
              }))}
            />
            <Results
              title="Admins"
              href="/admin/admins"
              icon={Users}
              items={admins.map((item) => ({
                id: item.id,
                title: item.name,
                meta: item.email,
              }))}
            />
          </div>
        </>
      )}
    </div>
  );
}

function Results({
  title,
  href,
  icon: Icon,
  items,
}: {
  title: string;
  href: string;
  icon: typeof Search;
  items: { id: string; title: string; meta: string }[];
}) {
  return (
    <Card>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-sm font-semibold">
            <Icon className="size-4 text-amber-600" />
            {title}
          </h2>
          <Badge variant="secondary">{items.length}</Badge>
        </div>
        {items.length === 0 ? (
          <p className="text-xs text-gray-500">No matches.</p>
        ) : (
          items.map((item) => (
            <Link
              key={item.id}
              href={href}
              className="block rounded-md border p-3 hover:bg-gray-50"
            >
              <p className="text-sm font-medium text-gray-800">{item.title}</p>
              <p className="mt-1 text-xs text-gray-500">{item.meta}</p>
            </Link>
          ))
        )}
      </CardContent>
    </Card>
  );
}
