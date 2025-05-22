interface IResponseBody<T> {
  /**
   * The message describing the result of the operation.
   */
  message: string;

  /**
   * The data to include in the response.
   */
  data: T;
}

/**
 * Interface representing an HTTP response.
 */
export interface IHttpResponse<R> {
  /**
   * The status code of the HTTP response.
   */
  statusCode: number;

  /**
   * The body of the HTTP response.
   */
  body: IResponseBody<R>;
}
