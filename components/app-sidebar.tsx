import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      items: [
        {
          title: "All Users",
          url: "/all-users",
          isActive: false,
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      items: [
        {
          title: "Manage Users",
          url: "/manage-users",
          isActive: false,
        },
        {
          title: "User Roles",
          url: "/user-roles",
          isActive: false,
        },
        {
          title: "User Status",
          url: "/user-status",
          isActive: false,
        },
      ],
    },
    {
      title: "Roles & Permissions",
      url: "/",
      items: [
        {
          title: "Permissions",
          url: "/roles-permissions",
          isActive: false,
        },
        {
          title: "Roles",
          url: "/roles-list",
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">]Company Dashboard</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
            <Avatar>
                  <AvatarImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" className="rounded-full h-11 w-11" />
                  <AvatarFallback>VRV</AvatarFallback>
                </Avatar>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">My Account</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-2 rounded-lg shadow-lg bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700">
          <DropdownMenuLabel className="text-gray-600 dark:text-gray-300 font-semibold">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1 border-gray-200 dark:border-gray-700" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              Billing
              <DropdownMenuShortcut className="ml-auto text-gray-400 dark:text-gray-500">
                ⌘B
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              Settings
              <DropdownMenuShortcut className="ml-auto text-gray-400 dark:text-gray-500">
                ⌘S
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              Keyboard shortcuts
              <DropdownMenuShortcut className="ml-auto text-gray-400 dark:text-gray-500">
                ⌘K
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-1 border-gray-200 dark:border-gray-700" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              Team
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                Invite users
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="w-48 p-2 rounded-lg shadow-lg bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700">
                  <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    Message
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-1 border-gray-200 dark:border-gray-700" />
                  <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    More...
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
              New Team
              <DropdownMenuShortcut className="ml-auto text-gray-400 dark:text-gray-500">
                ⌘+T
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-1 border-gray-200 dark:border-gray-700" />
          <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            GitHub
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            Support
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled
            className="flex items-center justify-between px-3 py-2 text-gray-300 dark:text-gray-500 rounded-md"
          >
            API
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 border-gray-200 dark:border-gray-700" />
          <DropdownMenuItem className="flex items-center justify-between px-3 py-2 hover:bg-red-100 dark:hover:bg-red-600 rounded-md text-red-600 dark:text-red-400">
            Log out
            <DropdownMenuShortcut className="ml-auto text-gray-400 dark:text-gray-500">
              ⇧⌘Q
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Sidebar>
  );
}
