import type { EmptyRecord, IHttpRequest } from "../types";

/**
 * Interface representing a generic HTTP controller.
 *
 * @typeParam B - The type of the request body.
 * @typeParam R - The type of the response body.
 * @typeParam Q - The type of the query parameters. Defaults to `EmptyRecord`.
 * @typeParam P - The type of the path parameters. Defaults to `EmptyRecord`.
 *
 * @remarks
 * Implementations of this interface should define the `handle` method,
 * which processes an incoming HTTP request and returns a promise that resolves to an HTTP response.
 */
export interface IHttpController<B, R, Q = EmptyRecord, P = EmptyRecord> {
  handle: (request: IHttpRequest<B, Q, P>) => Promise<R>;
}
