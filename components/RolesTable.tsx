import React, { useState } from "react";
import { Edit, Trash2, Plus, Shield } from "lucide-react";
import RoleModal from "./RoleModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { Badge } from "./ui/badge";

interface Permission {
  id: string;
  name: string;
  description: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  users: number;
}

const initialRoles: Role[] = [
  {
    id: "1",
    name: "Admin",
    description: "Full system access",
    permissions: [
      { id: "1", name: "create", description: "Create resources" },
      { id: "2", name: "read", description: "Read resources" },
      { id: "3", name: "update", description: "Update resources" },
      { id: "4", name: "delete", description: "Delete resources" },
    ],
    users: 3,
  },
  {
    id: "2",
    name: "Manager",
    description: "Department management access",
    permissions: [
      { id: "1", name: "create", description: "Create resources" },
      { id: "2", name: "read", description: "Read resources" },
      { id: "3", name: "update", description: "Update resources" },
    ],
    users: 8,
  },
  {
    id: "3",
    name: "User",
    description: "Basic user access",
    permissions: [{ id: "2", name: "read", description: "Read resources" }],
    users: 24,
  },
];

export default function RolesTable() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleAddRole = (newRole: Partial<Role>) => {
    const role: Role = {
      id: Date.now().toString(),
      name: newRole.name!,
      description: newRole.description!,
      permissions: newRole.permissions!,
      users: 0,
    };
    setRoles([...roles, role]);
  };

  const handleEditRole = (updatedRole: Partial<Role>) => {
    setRoles(
      roles.map((role) =>
        role.id === selectedRole?.id ? { ...role, ...updatedRole } : role
      )
    );
  };

  const handleDeleteRole = () => {
    if (selectedRole) {
      setRoles(roles.filter((role) => role.id !== selectedRole.id));
      setSelectedRole(null);
    }
  };

  return (
    <div className="dark:bg-[#0A0A0A] shadow-md p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 text-center sm:text-left">
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-0">
          Roles & Permissions
        </h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-4 sm:px-5 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Role
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-800 dark:text-white">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white dark:bg-[#18181B] p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 dark:shadow-lg border-2 border-[#F5F5F5]"
          >
            <div className="flex flex-col items-center sm:items-start mb-3">
              <Shield className="w-6 h-6 text-indigo-600 mb-2" />
              <div className="text-lg font-semibold">{role.name}</div>
            </div>
            <div className="mb-4 text-sm text-gray-400 text-center sm:text-left">
              {role.description}
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
              {role.permissions.map((permission) => (
                <Badge
                  key={permission.id}
                  className="px-3 py-1 text-sm"
                >
                  {permission.name}
                </Badge>
              ))}
            </div>
            <div className="text-sm mb-4 text-center sm:text-left">
              {role.users} users
            </div>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <button
                onClick={() => {
                  setSelectedRole(role);
                  setIsEditModalOpen(true);
                }}
                className="text-indigo-600 hover:text-indigo-900"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setSelectedRole(role);
                  setIsDeleteModalOpen(true);
                }}
                className="text-red-600 hover:text-red-900"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <RoleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddRole}
        title="Add New Role"
      />

      {selectedRole && (
        <RoleModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedRole(null);
          }}
          onSubmit={handleEditRole}
          role={selectedRole}
          title="Edit Role"
        />
      )}

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedRole(null);
        }}
        onConfirm={handleDeleteRole}
        itemName="Role"
      />
    </div> 
  );
}
