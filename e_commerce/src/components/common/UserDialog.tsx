import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import minimizeSvg from '/svgs/minimize.svg';
import checkSvg from '/svgs/check.svg';
import trashIcon from '/images/modals/trash.png';
import UserForm from '../forms/users/UserForm';

const dialogConfigMap = {
  delete: {
    title: 'Delete User',
    description: (name: string) => `Are you sure you want to delete ${name}?`,
    svg: trashIcon,
    primaryColor: '#BA0101',
    gradient: ['#FFF2F2', '#FFFFFF', '#FFFFFF'],
    buttonText: 'Delete',
    variant: 'destructive',
  },
  edit: {
    title: 'Edit User',
    description: (name: string) => `You can edit details for ${name} here.`,
    svg: checkSvg,
    primaryColor: '#1958F7',
    gradient: ['#EEF3FF', '#FFFFFF', '#FFFFFF'],
    buttonText: 'Save',
    variant: 'default',
  },
  add: {
    title: 'Add User',
    description: () => `Enter user details below.`,
    svg: checkSvg,
    primaryColor: '#1958F7',
    gradient: ['#EEF3FF', '#FFFFFF', '#FFFFFF'],
    buttonText: 'Save',
    variant: 'default',
  },
  activate: {
    title: 'Activate User',
    description: (name: string) => `Are you sure you want to activate ${name}?`,
    svg: checkSvg,
    primaryColor: '#13B04C',
    gradient: ['#FDF7F2', '#FFFFFF', '#FFFFFF'],
    buttonText: 'Activate',
    variant: 'default',
  },
  deactivate: {
    title: 'Deactivate User',
    description: (name: string) =>
      `Are you sure you want to deactivate ${name}?`,
    svg: minimizeSvg,
    primaryColor: '#F9C015',
    gradient: ['#FDF7F2', '#FFFFFF', '#FFFFFF'],
    buttonText: 'Deactivate',
    variant: 'destructive',
  },
} as const;

interface Props {
  type: 'edit' | 'delete' | 'activate' | 'deactivate' | 'add';
  user?: UserDto | OperatorDto;
  onConfirm: (userData: UserDto) => void;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  isOperator?: boolean;
  isUser?: boolean;
}

export default function UserDialog({
  type,
  user,
  onConfirm,
  open,
  onOpenChange,
  isOperator,
  isUser,
}: Props) {
  const config = dialogConfigMap[type];

  const handleFormSubmit = (formData: UserDto) => {
    onConfirm(formData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-[30px] transition-all duration-300 shadow-xl">
        <div
          className="absolute inset-0 m-3 rounded-[30px] -z-50"
         
         
        ></div>

        <div className="px-1 py-2 w-full relative z-10">
          <DialogHeader className="flex flex-col">
            <DialogTitle className="text-[32px] font-semibold">
              {config.title}
            </DialogTitle>
            <DialogDescription className="text-secondary-gray text-[16px]">
              {typeof config.description === 'function'
                ? config.description(user?.name || '')
                : config.description}
            </DialogDescription>

            {type !== 'edit' && type !== 'add' && (
              <img
                src={config.svg}
                alt={`${type}-svg`}
                className="w-[240px] h-[240px] self-center mt-5"
              />
            )}
          </DialogHeader>

          {(type === 'edit' || type === 'add') && (
            <div className="mt-6 w-full">
              <UserForm
                type={type}
                user={user}
                onSubmit={handleFormSubmit}
                onCancel={() => onOpenChange(false)}
                isOperator={isOperator}
                isUser={isUser}
              />
            </div>
          )}

          {type !== 'edit' && type !== 'add' && (
            <div className="mt-6 flex w-full justify-end gap-4">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                variant={config.variant}
                style={{ backgroundColor: config.primaryColor, color: 'white' }}
                // onClick={() => {
                //   if (user) onConfirm(user);
                // }}
                className="rounded-full"
              >
                {config.buttonText}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
