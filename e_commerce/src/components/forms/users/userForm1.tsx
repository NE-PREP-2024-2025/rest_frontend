"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useEffect } from "react";
import Input from "@/components/auth/Input";
import FormSelect from "@/components/common/FormSelect";

// Define the form schema
const userSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  role: z.enum(["VISITOR", "EMPLOYEE"]),
  institution: z.string().optional(),
  department: z.string().optional(),
  status: z.enum(["Active", "Inactive"]),
});

type UserFormValues = z.infer<typeof userSchema>;

interface UserFormProps {
  initialData?: UserFormValues | null;
  onSubmit: (data: UserFormValues) => void;
  isSubmitting?: boolean;
}

// Mock data for institutions and departments
const mockInstitutions = [
  { id: "1", name: "University of Example" },
  { id: "2", name: "Tech Institute" },
  { id: "3", name: "Business College" },
];

const mockDepartments = {
  "1": [
    { id: "101", name: "Computer Science" },
    { id: "102", name: "Mathematics" },
    { id: "103", name: "Physics" },
  ],
  "2": [
    { id: "201", name: "Engineering" },
    { id: "202", name: "Design" },
  ],
  "3": [
    { id: "301", name: "Business Administration" },
    { id: "302", name: "Economics" },
  ],
};

const UserForm: React.FC<UserFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting,
}) => {
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [departments, setDepartments] = useState<
    { id: string; name: string }[]
  >([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: initialData || {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      role: "VISITOR",
      status: "Active",
    },
  });

  const role = watch("role");

  useEffect(() => {
    if (initialData) {
      reset(initialData);
      if (initialData.institution) {
        setSelectedInstitution(initialData.institution);
        // Load departments for the initial institution if it exists
        const depts =
          mockDepartments[
            initialData.institution as keyof typeof mockDepartments
          ] || [];
        setDepartments(depts);
      }
    }
  }, [initialData, reset]);

  useEffect(() => {
    if (selectedInstitution) {
      // Simulate fetching departments based on selected institution
      const depts =
        mockDepartments[selectedInstitution as keyof typeof mockDepartments] ||
        [];
      setDepartments(depts);
      setValue("department", ""); // Reset department when institution changes
    } else {
      setDepartments([]);
    }
  }, [selectedInstitution, setValue]);

  const handleInstitutionChange = (value: string) => {
    setSelectedInstitution(value);
    setValue("institution", value);
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* First Column */}
        <div className="space-y-4">
          <Input
            name="firstname"
            label="First name"
            register={register}
            placeholder="Enter first name"
            error={errors.firstname?.message}
          />

          <Input
            name="email"
            label="Email"
            register={register}
            placeholder="Enter email"
            type="email"
            error={errors.email?.message}
          />

          <FormSelect
            label="Role"
            options={[
              { label: "Visitor", value: "VISITOR" },
              { label: "Employee", value: "EMPLOYEE" },
            ]}
            onChange={(value)=>setValue("role",value as any)}
            value={watch("role")}
            error={errors.role?.message}
          />

          {role === "EMPLOYEE" && (
            <FormSelect
              label="Institution"
              options={mockInstitutions.map((inst) => ({
                label: inst.name,
                value: inst.id,
              }))}
              onChange={handleInstitutionChange}
              value={selectedInstitution}
              error={errors.institution?.message}
            />
          )}
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <Input
            name="lastname"
            label="Last name"
            register={register}
            placeholder="Enter last name"
            error={errors.lastname?.message}
          />

          <Input
            name="phone"
            label="Phone"
            register={register}
            placeholder="Enter phone number"
            error={errors.phone?.message}
          />

          <FormSelect
            label="Status"
            options={[
              { label: "Active", value: "Active" },
              { label: "Inactive", value: "Inactive" },
            ]}
            onChange={(value)=>setValue("status",value as any)}
            value={watch("status")}
            error={errors.status?.message}
          />

          {role === "EMPLOYEE" && selectedInstitution && (
            <FormSelect
              label="Department"
              options={departments.map((dept) => ({
                label: dept.name,
                value: dept.id,
              }))}
              onChange={(value)=>setValue("department",value)}
              value={watch("department")}
              error={errors.department?.message}
            />
          )}
        </div>

        {/* Full width buttons */}
        <div className="md:col-span-2 flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" className="px-6">
            Cancel
          </Button>
          <Button type="submit" className="px-6" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
