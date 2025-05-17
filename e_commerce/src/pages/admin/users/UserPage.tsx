"use client";

import DataTable from "@/components/common/DataTable";
import { users } from "@/utils/constant";
import  { useState } from "react";
import { UserColumns } from "@/components/table/columnsDef/userColumns";
import UserDialog from "@/components/common/UserDialog";

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddUser = () => {
    setOpenDialog(true);
  };


  const handleUserSubmit = (userData: UserDto) => {
    console.log("User added:", userData);
    setOpenDialog(false);
  };

  return (
    <div className="w-ful pt-[40px]">
      <DataTable<UserDto>
        searchEnabled
        columns={UserColumns}
        data={users}
        isLoading={isLoading}
        addButtonIcon="solar:user-plus-bold"
        addButtonTitle="Add User"
        page={0}
        onAdd={handleAddUser}
        limit={9}
      />

      <UserDialog
        type="add"
        open={openDialog}
        onOpenChange={setOpenDialog}
        onConfirm={handleUserSubmit}
        isUser={true}
      />
    </div>
  );
};

export default UsersPage;
