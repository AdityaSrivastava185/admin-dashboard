"use client";

import { useTheme } from "next-themes";
import { AppSidebar } from "@/components/app-sidebar";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DataTableDemo } from "@/components/DataTable";
import { Charts } from "@/components/Charts";
import { NavigationMenuDemo } from "@/utilities/Navbar";

export default function Home() {
  const { setTheme } = useTheme();
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
            <ToggleThemeButton />
            <NavigationMenuDemo/>
          </header>
          <Charts/>
          <DataTableDemo />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
