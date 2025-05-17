'use client';

import UserCard from '@/components/common/user-card';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import {type ColumnDef } from '@tanstack/react-table';
import UserDialog from '@/components/common/UserDialog';
import { useState } from 'react';

export const UserColumns: ColumnDef<UserDto>[] = [
  {
    header: () => (
      <div>
        <h2 className="text-start pl-2">Name</h2>
      </div>
    ),
    accessorKey: 'name',
    cell: ({ row }) => {
      return (
        <div className=" pl-5 flex items-center justify-between gap-1 w-[300px]">
          <UserCard
            size="small"
            isCollapsed={false}
            name={row.original.name}
            username={row.original.username}
          />
        </div>
      );
    },
  },
  {
    header: ({ column }) => (
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <h2 className="text-start">Phone Number</h2>
        <Icon
          icon={
            column.getIsSorted() === 'asc'
              ? 'tabler:arrow-up'
              : 'tabler:arrow-down'
          }
          width={16}
          height={16}
        />
      </div>
    ),
    accessorKey: 'phone',
    enableSorting: true,
    sortingFn: 'alphanumeric',
    cell: ({ row }) => {
      return (
        <div className="py-2 pl-5 flex items-center justify-between gap-1">
          <h2 className="text-secondary-gray font-medium">
            {row.original.phone}
          </h2>
        </div>
      );
    },
  },
  {
    header: () => (
      <div>
        <h2>Email Address</h2>
      </div>
    ),
    accessorKey: 'email',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1 py-2 px-6">
          <h2 className="text-secondary-gray font-medium">
            {row.original.email}
          </h2>
        </div>
      );
    },
  },



  {
    header: '',
    accessorKey: 'username',
    cell: ({ row }) => {
      const user = row.original;
      const [editOpen, setEditOpen] = useState(false);
      const [deleteOpen, setDeleteOpen] = useState(false);
      const [activateOpen, setActivateOpen] = useState(false);
      const [deactivateOpen, setDeactivateOpen] = useState(false);

      const handleDelete = (user: UserDto) => {
        console.log('delete', user.username);
        setDeleteOpen(false);
      };

      const handleEdit = (user: UserDto) => {
        console.log('edit', user.username);
        setEditOpen(false);
      };

      const handleActivate = (user: UserDto) => {
        console.log('activate', user.username);
        setActivateOpen(false);
      };

      const handleDeactivate = (user: UserDto) => {
        console.log('deactivate', user.username);
        setDeactivateOpen(false);
      };

      return (
        <div className="py-2 flex items-center gap-1">
          <UserDialog
            type="delete"
            user={user}
            onConfirm={handleDelete}
            open={deleteOpen}
            onOpenChange={setDeleteOpen}
          />
          <UserDialog
            type="edit"
            user={user}
            onConfirm={handleEdit}
            open={editOpen}
            onOpenChange={setEditOpen}
          />
          {user.status === 'inactive' ? (
            <UserDialog
              type="activate"
              user={user}
              onConfirm={handleActivate}
              open={activateOpen}
              onOpenChange={setActivateOpen}
            />
          ) : (
            <UserDialog
              type="deactivate"
              user={user}
              onConfirm={handleDeactivate}
              open={deactivateOpen}
              onOpenChange={setDeactivateOpen}
            />
          )}

          {/* Icons for actions */}
          <div className="flex gap-3">
            <Icon
              icon="prime:pencil"
              onClick={() => setEditOpen(true)}
              className="cursor-pointer"
              width={20}
              height={20}
            />
            <Icon
              icon="mynaui:trash"
              onClick={() => setDeleteOpen(true)}
              className="cursor-pointer"
              width={20}
              height={20}
            />
           
          </div>
        </div>
      );
    },
  },
];
