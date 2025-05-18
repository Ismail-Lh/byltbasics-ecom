"use client";

import { Button, FormInput } from "@/components/global";
import { Form } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import classes from "./register-form.module.scss";

const registerSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  password_confirm: z.string().min(6, { message: "Password confirmation is required" }),
}).refine(data => data.password === data.password_confirm, {
  message: "Passwords don't match",
  path: ["password_confirm"],
});

export type IRegisterDto = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const form = useForm<IRegisterDto>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password_confirm: "",
    },
  });

  const handleRegister = (formData: IRegisterDto) => console.log(formData);

  return (
    <Form {...form}>
      <form className={classes.register__form} onSubmit={form.handleSubmit(handleRegister)}>
        <FormInput
          name="username"
          placeholder="Enter Your Username"
          label="Username"
          control={form.control}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Enter Your Email"
          label="Email"
          control={form.control}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Enter Your Password"
          label="Password"
          control={form.control}
        />
        <FormInput
          type="password"
          name="password_confirm"
          placeholder="Confirm Your Password"
          label="Confirm Password"
          control={form.control}
        />

        <Button disabled={false} color="black" type="submit">
          Create Account
        </Button>
      </form>
    </Form>
  );
}
