"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// AddUserDemo accepts an onAddUser prop from the parent component
export function AddUserDemo({ onAddUser }: { onAddUser: (newUser: any) => void }) {
  const [userId, setUserId] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("active");

  const handleSubmit = () => {
    const newUser = {
      id: `${Date.now()}`, // Generate a unique ID based on timestamp
      name,
      email,
      status,
    };

    // Call the onAddUser function passed from the parent to add the user
    onAddUser(newUser);

    // Reset the form
    setUserId("");
    setName("");
    setEmail("");
    setStatus("active");
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Add User</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add User</DrawerTitle>
            <DrawerDescription>
              Add user and status of the user
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="id" className="text-left">
                    User Id
                  </Label>
                  <Input
                    type="text"
                    id="id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Admin 01"
                    required
                  />
                </div>
                <br />
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name" className="text-left">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Admin 01"
                    required
                  />
                </div>
                <br />
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email" className="text-left">
                    Email
                  </Label>
                  <Input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin01@gmail.com"
                    required
                  />
                </div>
                <br />
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="User Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="outline" size="sm" onClick={() => handleSubmit()}>
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
