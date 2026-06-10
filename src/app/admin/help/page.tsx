import Link from "next/link";
import { Briefcase, CircleHelp, GraduationCap, Newspaper, Search, Settings2, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  { title: "News & Events", description: "Create announcements, upload galleries and PDFs, and control publishing.", href: "/admin/news-events", icon: Newspaper },
  { title: "Programs", description: "Manage program details, DAE curriculum, careers, media, and visibility.", href: "/admin/programs", icon: GraduationCap },
  { title: "Job Openings", description: "Publish vacancies, responsibilities, and official notices.", href: "/admin/careers", icon: Briefcase },
  { title: "Admins", description: "Manage administrator accounts, roles, permissions, and passwords.", href: "/admin/admins", icon: Users },
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Get Help</h1>
        <p className="mt-1 text-sm text-gray-500">A quick guide to the JPI administration dashboard.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {areas.map(({ title, description, href, icon: Icon }) => (
          <Link href={href} key={title}>
            <Card className="h-full transition-colors hover:bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Icon className="size-4 text-amber-600" />{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CircleHelp className="size-4" />Common Guidance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-gray-600">
          <p><strong>Draft vs Published:</strong> Draft content remains hidden from public pages and APIs.</p>
          <p><strong>Media uploads:</strong> Upload images and PDFs from the relevant Add/Edit form. Always preview files before publishing.</p>
          <p><strong>DAE curriculum:</strong> Use Detailed DAE Curriculum. Published totals are intentionally editable because official totals may differ from row calculations.</p>
          <p><strong>Permissions:</strong> Contact a Super Admin if a section or action is unavailable.</p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Link href="/admin/search" className="inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50"><Search className="size-4" />Search Dashboard</Link>
        <Link href="/admin/settings" className="inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50"><Settings2 className="size-4" />Account Settings</Link>
      </div>
    </div>
  );
}
