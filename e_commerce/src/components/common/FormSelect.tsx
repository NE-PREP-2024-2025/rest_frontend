"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectProps {
  label?: string;
  error?: string;
  value?:string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const FormSelect = ({ label, error, options, onChange,value }: SelectProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="block font-medium text-sm">{label}</label>}
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="border p-4 h-[50px] w-full rounded-md focus-visible:ring-1 ring-active">
          <SelectValue placeholder="Select an option" className="placeholder:text-gray-200" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormSelect;
