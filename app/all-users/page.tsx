import { AppSidebar } from "@/components/app-sidebar";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { User } from "@/components/UserDashboard";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface UserTableProps {
  users: User[];
  onUpdate: (user: User) => void;
  onDelete: (userId: string) => void;
}

const initialUsers: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", status: "active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", status: "active" },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "inactive",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    status: "active",
  },
  { id: "5", 
    name: "Tom Brown", 
    email: "tom@example.com", 
    status: "inactive" 
  },
  { id: "6", 
    name: "Mike Johnson", 
    email: "tom@example.com", 
    status: "inactive" 
  },
  { id: "7", 
    name: "Tom", 
    email: "tom@example.com", 
    status: "inactive" 
  },
  { id: "8", 
    name: "Brown", 
    email: "tom@example.com", 
    status: "inactive" 
  },
  { id: "9", 
    name: "Tanishk", 
    email: "tom@example.com", 
    status: "inactive" 
  },
  { id: "10", 
    name: "Arpit", 
    email: "tom@example.com", 
    status: "inactive" 
  },
];

const page = ({ users, onUpdate, onDelete }: UserTableProps) => {
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
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                User Management
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your system users
              </p>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-gray-500 dark:text-gray-400">
                      ID
                    </th>
                    <th className="px-6 py-4 text-gray-500 dark:text-gray-400">
                      Name
                    </th>
                    <th className="px-6 py-4 text-gray-500 dark:text-gray-400">
                      Email
                    </th>
                    <th className="px-6 py-4 text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    {/* <th className="px-6 py-4 text-gray-500 dark:text-gray-400">Actions</th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {initialUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-white dark:bg-[#0A0A0A] hover:bg-gray-50 dark:hover:bg-zinc-900"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-400">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">{user.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default page;
