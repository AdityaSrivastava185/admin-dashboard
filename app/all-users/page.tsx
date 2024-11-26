import { AppSidebar } from '@/components/app-sidebar'
import { DataTableDemo } from '@/components/DataTable'
import ToggleThemeButton from '@/components/ToggleThemeButton'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import React from 'react'

function page() {
  return (
    <div>
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
        <AspectRatio>
          <DataTableDemo/>
        </AspectRatio>
      </SidebarInset>
    </SidebarProvider>
   </>
    </div>
  )
}

export default page
