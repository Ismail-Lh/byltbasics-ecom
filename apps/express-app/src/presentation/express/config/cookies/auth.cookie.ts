import type { CookieOptions } from "express";

import { envConfig } from "@/config";

/**
 * Configuration options for the access token cookie.
 *
 * @property httpOnly - Ensures the cookie is only accessible via HTTP(S) requests and not through client-side scripts.
 * @property sameSite - Specifies the SameSite attribute to control cross-site request behavior. Set to "none" to allow cross-site cookies.
 * @property secure - Indicates whether the cookie should only be transmitted over secure HTTPS connections.
 *                    This is determined by the application's environment, enabling it only in production.
 * @property maxAge - Specifies the maximum age of the cookie in milliseconds.
 *                    In this case, the cookie will expire after 15 minutes (15 * 60 * 1000).
 */
export const accessTokenCookieConfig: CookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: envConfig.node_env === "production",
  maxAge: 15 * 60 * 1000,
};

/**
 * Configuration options for the refresh token cookie.
 *
 * @constant
 * @type {CookieOptions}
 * @property {boolean} httpOnly - Indicates if the cookie is accessible only through the HTTP protocol.
 * @property {boolean} sameSite - Indicates if the cookie is restricted to the same site.
 * @property {boolean} secure - Indicates if the cookie is only to be sent over HTTPS.
 * @property {number} maxAge - The maximum age of the cookie in milliseconds (24 hours).
 */
export const refreshTokenCookieConfig: CookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: envConfig.node_env === "production",
  maxAge: 24 * 60 * 60 * 1000,
};

/**
 * Configuration object for clearing the auth token cookie.
 *
 * @constant
 * @type {CookieOptions}
 * @property {boolean} httpOnly - Indicates if the cookie is accessible only through the HTTP protocol.
 * @property {boolean} sameSite - Indicates if the cookie is restricted to the same site.
 * @property {boolean} secure - Indicates if the cookie is only to be sent over HTTPS.
 * This is true if the environment is production.
 */
export const clearAuthTokenCookieConfig: CookieOptions = {
  httpOnly: true,
  sameSite: "none",
  secure: envConfig.node_env === "production",
};
