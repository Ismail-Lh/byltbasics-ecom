/* eslint-disable node/no-process-env */

import type { AuthStatus } from "@/stores/user-auth.store";

import Cookies from "js-cookie";

/**
 * Cookie utilities for authentication state management using js-cookie
 * These functions work in both client and server contexts
 */

// Cookie names
export const AUTH_STATUS_COOKIE = "auth_status";

// Cookie default options
const DEFAULT_COOKIE_OPTIONS = {
  path: "/",
  // js-cookie does not support httpOnly (it's only for server-side)
  secure: process.env.NODE_ENV === "production",
  expires: 1, // 1 day
  sameSite: "lax" as const,
};

/**
 * Set the authentication status cookie
 *
 * @param status - The authentication status to set (authenticated, unauthenticated, loading)
 * @param options - Optional cookie configuration
 */
export function setAuthStatusCookie(status: AuthStatus, options = {}) {
  Cookies.set(AUTH_STATUS_COOKIE, status, {
    ...DEFAULT_COOKIE_OPTIONS,
    ...options,
  });
}

/**
 * Get the authentication status from cookies
 *
 * @returns The authentication status or undefined if not found
 */
export function getAuthStatusFromCookie(): AuthStatus | undefined {
  const status = Cookies.get(AUTH_STATUS_COOKIE);
  if (["authenticated", "unauthenticated"].includes(status ?? "")) {
    return status as AuthStatus;
  }
  return undefined;
}

/**
 * Remove the authentication status cookie
 */
export function removeAuthStatusCookie() {
  Cookies.remove(AUTH_STATUS_COOKIE, { path: "/" });
}
