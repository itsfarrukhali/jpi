import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (process.env.NODE_ENV === "development") {
    try {
      // Log minimal session info for debugging redirects
      console.debug("admin:layout:session", {
        hasSession: !!session,
        user: session?.user
          ? { id: session.user.id, role: session.user.role }
          : null,
      });
    } catch {}
  }
  if (!session?.user) redirect("/login");

  return (
    <SidebarProvider
      className="admin-dashboard"
      style={{ "--header-height": "3.5rem" } as React.CSSProperties}
    >
      <AppSidebar user={session.user} />
      <SidebarInset>
        <SiteHeader />
        <main className="flex-1 bg-gray-50 p-4 md:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
