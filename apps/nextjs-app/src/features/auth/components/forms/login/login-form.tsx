"use client";

import type { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useLogin } from "@/features/auth/hooks/use-login";
import { loginSchema } from "@/features/auth/schemas";
import { Button, FormInput } from "@/ui/components/global";
import { Form } from "@/ui/components/ui";

import styles from "./login-form.module.scss";

export type ILoginDto = z.infer<typeof loginSchema>;

export function LoginForm() {
  const form = useForm<ILoginDto>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useLogin();

  const handleLogin = (formData: ILoginDto) => login(formData);

  return (
    <Form {...form}>
      <form className={styles.login__form} onSubmit={form.handleSubmit(handleLogin)}>
        <FormInput
          name="email"
          type="email"
          placeholder="Email Address"
          control={form.control}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          control={form.control}
        />

        <Button type="submit" color="black" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
