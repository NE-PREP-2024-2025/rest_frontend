import CustomAddEditModal from "@/components/common/CustomAddEditModal";
import UserForm from "@/components/forms/users/userForm1";
import  { type FC } from "react";

type props = {
  user: IUser | undefined;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
};
const UserAddEditModal: FC<props> = ({ user, open, onOpenChange }) => {
  return (
    <CustomAddEditModal
      title={user ? "Edit User" : "Add User"}
      description={
        user ? "Edit user details below." : "Enter user details below."
      }
      open={open}
      onOpenChange={onOpenChange}
    >
      <UserForm onSubmit={(data) => console.log("User==>", data)} />
    </CustomAddEditModal>
  );
};

export default UserAddEditModal;
