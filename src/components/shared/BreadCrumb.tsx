import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

interface BreadCrumbProps {
  crumbs: Crumb[];
  light?: boolean;
}

export default function BreadCrumb({ crumbs, light }: BreadCrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 flex-wrap">
      <Link
        href="/"
        className={cn(
          "flex items-center gap-0.5 text-xs font-medium hover:underline transition-colors",
          light
            ? "text-white/60 hover:text-white"
            : "text-(--color-text-muted) hover:text-(--color-primary)",
        )}
      >
        <Home size={11} />
        <span>Home</span>
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight
            size={12}
            className={light ? "text-white/40" : "text-gray-300"}
          />
          {crumb.href && i < crumbs.length - 1 ? (
            <Link
              href={crumb.href}
              className={cn(
                "text-xs font-medium hover:underline",
                light
                  ? "text-white/60 hover:text-white"
                  : "text-(--color-text-muted)  hover:text-(--color-primary)",
              )}
            >
              {crumb.label}
            </Link>
          ) : (
            <span
              className={cn(
                "text-xs font-medium",
                light ? "text-white" : "text-(--color-primary)",
              )}
            >
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
