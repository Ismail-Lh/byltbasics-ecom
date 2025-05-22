"use client";

import { getAuthStatusFromCookie, setAuthStatusCookie } from "@/utils";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Define authentication state types
export type AuthStatus = "authenticated" | "unauthenticated";

interface UserAuthState {
  authStatus: AuthStatus;
  currentUser: unknown | null;
  isLoading: boolean;
  error: Error | null;
}

interface UserAuthStore extends UserAuthState {
  UserAuthActions: {
    setAuthenticated: () => void;
    setUnauthenticated: (error?: Error) => void;
    setError: (error: Error) => void;
    setLoading: () => void;
    clearError: () => void;
  };
}

export const useUserAuthStore = create<UserAuthStore>()(
  immer(set => ({
    authStatus: getAuthStatusFromCookie() ?? "unauthenticated",
    currentUser: null,
    isLoading: false,
    error: null,

    UserAuthActions: {
      setAuthenticated: () =>
        set((state) => {
          state.authStatus = "authenticated";
          state.error = null;
          setAuthStatusCookie("authenticated");
        }),

      setUnauthenticated: error =>
        set((state) => {
          state.authStatus = "unauthenticated";
          state.currentUser = null;
          state.error = error || null;
          setAuthStatusCookie("unauthenticated");
        }),

      setError: error =>
        set((state) => {
          state.error = error;
          state.authStatus = "unauthenticated";
          setAuthStatusCookie("unauthenticated");
        }),

      setLoading: () =>
        set((state) => {
          state.isLoading = true;
        }),

      clearError: () =>
        set((state) => {
          state.error = null;
        }),
    },
  })),
);
