"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { registerUser } from "../services";

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: registerUser,
    onMutate: () => {
      toast.loading("Registering...", { id: "loadingToast" });
    },
    onSuccess: (responseData) => {
      toast.success(responseData.message, { id: "loadingToast" });

      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      // Clean up loading states regardless of outcome
      toast.dismiss("loadingToast");
    },
  });
}
