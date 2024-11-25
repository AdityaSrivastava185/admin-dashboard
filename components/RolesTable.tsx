import React, { useState } from 'react';
import { Edit, Trash2, Plus, Shield } from 'lucide-react';
import RoleModal from './RoleModal';
import DeleteConfirmModal from './DeleteConfirmModal';

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
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: [
      { id: '1', name: 'create', description: 'Create resources' },
      { id: '2', name: 'read', description: 'Read resources' },
      { id: '3', name: 'update', description: 'Update resources' },
      { id: '4', name: 'delete', description: 'Delete resources' },
    ],
    users: 3,
  },
  {
    id: '2',
    name: 'Manager',
    description: 'Department management access',
    permissions: [
      { id: '1', name: 'create', description: 'Create resources' },
      { id: '2', name: 'read', description: 'Read resources' },
      { id: '3', name: 'update', description: 'Update resources' },
    ],
    users: 8,
  },
  {
    id: '3',
    name: 'User',
    description: 'Basic user access',
    permissions: [
      { id: '2', name: 'read', description: 'Read resources' },
    ],
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
    setRoles(roles.map(role => 
      role.id === selectedRole?.id
        ? { ...role, ...updatedRole }
        : role
    ));
  };

  const handleDeleteRole = () => {
    if (selectedRole) {
      setRoles(roles.filter(role => role.id !== selectedRole.id));
      setSelectedRole(null);
    }
  };

  return (
    <div className="dark:bg-[#0A0A0A] shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Roles & Permissions</h2>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Role
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-50 dark:bg-[#0A0A0A] dark:text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Permissions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Users</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-[#0A0A0A] dark:text-white divide-y divide-gray-800">
            {roles.map((role) => (
              <tr key={role.id} className=" dark:hover:bg-zinc-800 dark:hover:text-white">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-indigo-600 mr-2" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{role.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500 dark:text-white">{role.description}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {role.permissions.map((permission) => (
                      <span
                        key={permission.id}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800"
                      >
                        {permission.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">{role.users} users</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => {
                        setSelectedRole(role);
                        setIsEditModalOpen(true);
                      }}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Edit className="w-4 h-4  dark:text-white" />
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedRole(role);
                        setIsDeleteModalOpen(true);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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