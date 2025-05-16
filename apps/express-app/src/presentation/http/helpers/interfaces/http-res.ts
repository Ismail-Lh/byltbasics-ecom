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
  body: R;
}
