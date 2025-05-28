import type { Control, FieldPath, FieldValues } from "react-hook-form";

import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/ui/components/ui";

interface FormInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  label?: string;
  control: Control<T>;
  type?: string;
}

export function FormInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  type = "text",
}: FormInputProps<T>) {
  // const [showPassword, setShowPassword] = React.useState(false);

  // const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className="formIpt"
              />
              {/* {type === "password"
                ? (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword
                        ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          )
                        : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                    </button>
                  )
                : (
                    !!Icon && (
                      <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    )
                  )} */}
            </div>
          </FormControl>
          <FormMessage className="formIpt__errorMsg" />
        </FormItem>
      )}
    />
  );
}
