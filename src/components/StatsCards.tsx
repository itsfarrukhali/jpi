import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type Stat = {
  title: string;
  value: number;
  icon: LucideIcon;
  href: string;
};

export function StatsCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ title, value, icon: Icon, href }) => (
        <Link key={title} href={href}>
          <Card className="hover:shadow-md transition-all border border-gray-200 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-500">
                {title}
              </CardTitle>
              <Icon className="h-5 w-5 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">{value}</div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
