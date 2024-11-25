"use client";

import { useState } from "react";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { User } from "./UserDashboard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "./ui/badge";
import EditUserDialog from "./EditUserDialog";

interface UserTableProps {
  users: User[];
  onUpdate: (user: User) => void;
  onDelete: (userId: string) => void;
}

export default function UserTable({ users, onUpdate, onDelete }: UserTableProps) {
  const [editingUser, setEditingUser] = useState<User | null>(null);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-gray-500 dark:text-gray-400">ID</th>
              <th className="px-6 py-4 text-gray-500 dark:text-gray-400">Name</th>
              <th className="px-6 py-4 text-gray-500 dark:text-gray-400">Email</th>
              <th className="px-6 py-4 text-gray-500 dark:text-gray-400">Status</th>
              <th className="px-6 py-4 text-gray-500 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white dark:bg-[#0A0A0A] hover:bg-gray-50 dark:hover:bg-zinc-900"
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {user.id}
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{user.name}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-400">
                  {user.email}
                </td>
                <td className="px-6 py-4">

                    {user.status}
                </td>
                <td className="px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setEditingUser(user)}>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600 dark:text-red-400"
                        onClick={() => onDelete(user.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditUserDialog
        user={editingUser}
        open={!!editingUser}
        onClose={() => setEditingUser(null)}
        onUpdate={onUpdate}
      />
    </>
  );
}