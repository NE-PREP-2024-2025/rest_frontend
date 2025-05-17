import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Input from '@/components/auth/Input';

interface UserFormProps {
  user?: UserDto;
  onSubmit: (userData: UserDto) => void;
  onCancel: () => void;
  type: 'add' | 'edit';
  isUser?: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
  user,
  type,
  onSubmit,
  onCancel,
  
  isUser,
}) => {
  const [formData, setFormData] = useState<UserDto>({
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    institution: '',
    role: '',
    status: 'active',
  });

  useEffect(() => {
    if (type === 'edit' && user) {
      setFormData(user);
    }
  }, [type, user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full items-center grid grid-cols-2 gap-4">
      <div className="pt-3">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        label="Firstname"
      />
     </div>
      <div className="">
      <Input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Last Name"
        label="Last Name"
      />
     </div>
      {isUser && (
        <Input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="*******"
          type="password"
          label="Password"
        />
      )}
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        label="Email"
      />
      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        label="Phone"
      />

   

     

      <div className="flex col-span-2 justify-end w-full gap-3 mt-auto mb-auto">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="py-6 rounded-full border text-primary px-4"
        >
          Cancel
        </Button>
        <Button
          className="rounded-full p-6 bg-gradient-to-r bg-blue hover:bg-blue/80 text-white"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
