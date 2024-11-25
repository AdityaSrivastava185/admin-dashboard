"use client"

import { useTheme } from "next-themes"
import UserDashboard from "@/components/UserDashboard";
import { AppSidebar } from "@/components/app-sidebar";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  const { setTheme } = useTheme()
  return (
   <>
   <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ToggleThemeButton/>
        </header>
        <UserDashboard/>
      </SidebarInset>
    </SidebarProvider>
   </>
  );
}
