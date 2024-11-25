import { AppSidebar } from '@/components/app-sidebar'
import PermissionsTable from '@/components/PermissionsTable'
import ToggleThemeButton from '@/components/ToggleThemeButton'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const page = () => {
  return (
    <div>
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
          <PermissionsTable/>
        </SidebarInset>
      </SidebarProvider> 
    </div>
  )
}

export default page
