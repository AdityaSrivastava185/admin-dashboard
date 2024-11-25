"use client";

import { useState } from "react";
import { PlusCircle, Search } from "lucide-react";
import UserTable from "./UserTable";
import AddUserDialog from "./AddUserDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";

export type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
};

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
  { id: "5", name: "Tom Brown", email: "tom@example.com", status: "inactive" },
];

export default function UserDashboard() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addUser = (user: Omit<User, "id">) => {
    const newUser = {
      ...user,
      id: (users.length + 1).toString(),
    };
    setUsers([...users, newUser]);
    setIsAddUserOpen(false);
  };

  const updateUser = (updatedUser: User) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          User Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your system users
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          onClick={() => setIsAddUserOpen(true)}
          className="w-full sm:w-auto"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="bg-white dark:bg-[#0A0A0A] rounded-lg shadow">
        <UserTable
          users={filteredUsers}
          onUpdate={updateUser}
          onDelete={deleteUser}
        />
      </div>

      <AddUserDialog
        open={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        onAdd={addUser}
      />
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
  );
}
