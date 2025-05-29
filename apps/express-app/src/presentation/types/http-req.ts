import type { Request } from "express";

import type { EmptyRecord } from "./global";

/**
 * Interface representing an HTTP request.
 */
export interface IHttpRequest<B, Q = EmptyRecord, P = EmptyRecord> {
  /**
   * Represents the headers of the HTTP request.
   */
  headers: Request["headers"];

  /**
   * Represents the cookies of the HTTP request.
   */
  cookies: Request["cookies"];

  /**
   * Represents the IP address of the client making the HTTP request.
   */
  ip: Request["ip"];

  /**
   * Represents the body of the HTTP request.
   */
  body: B;

  /**
   * Represents the query parameters of the HTTP request.
   */
  query: Q;

  /**
   * Represents the URL parameters of the HTTP request.
   */
  params: P;

  /**
   * Represents the path parameters of the HTTP request.
   */
  path?: unknown;
}
