"use client";

import type { z } from "zod";

import { useRegister } from "@/features/auth/hooks";
import { registerSchema } from "@/features/auth/schemas";
import { Button, FormInput } from "@/ui/components/global";
import { Form } from "@/ui/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import classes from "./register-form.module.scss";

export type IRegisterDto = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const form = useForm<IRegisterDto>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    },
  });

  const { mutate: register, isPending } = useRegister();

  const handleRegister = (formData: IRegisterDto) => register(formData);

  return (
    <Form {...form}>
      <form className={classes.register__form} onSubmit={form.handleSubmit(handleRegister)}>
        <FormInput
          name="name"
          placeholder="Enter Your Name"
          label="Name"
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

        <Button disabled={isPending} color="black" type="submit">
          Create Account
        </Button>
      </form>
    </Form>
  );
}
