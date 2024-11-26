"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Charts } from "@/components/Charts";
import { RolesTable } from "@/components/RolesTable";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function UserDashboard() {
  return (
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
        </header>
        <AspectRatio ratio={16 / 9}>
        <RolesTable/>
          <Charts/>
        </AspectRatio>
      </SidebarInset>
    </SidebarProvider>
  );
}
