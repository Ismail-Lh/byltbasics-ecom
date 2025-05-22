"use client";

import { useUserAuthStore } from "@/stores";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { loginUser } from "../services";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { UserAuthActions } = useUserAuthStore();

  const { setLoading, setAuthenticated, setError } = UserAuthActions;

  return useMutation({
    mutationKey: ["login-user"],
    mutationFn: loginUser,
    retry: false,
    onMutate: () => {
      // Cancel any outgoing refetches
      queryClient.cancelQueries({ queryKey: ["current-user"] });

      setLoading();

      toast.loading("Logging in...", { id: "loadingToast" });
    },
    onSuccess: async (responseData) => {
      const { body } = responseData;

      toast.success(body.message);

      setAuthenticated();

      queryClient.invalidateQueries({ queryKey: ["current-user"] });

      // Redirect to dashboard after successful login
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);

      setError(error);
    },
    onSettled: () => {
      // Clean up loading states regardless of outcome
      toast.dismiss("loadingToast");
    },
  });
}
