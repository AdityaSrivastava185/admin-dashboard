import { AppSidebar } from "@/components/app-sidebar";
import { ManageUserTable } from "@/components/manage-users/ManageUser";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BarChartDemo } from "@/utilities/BarChart";
import React from "react";

const page = () => {
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
        <ManageUserTable/>
        <br/>
        <BarChartDemo/>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default page;
