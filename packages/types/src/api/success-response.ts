/**
 * Represents a standardized structure for a successful API response.
 *
 * @template T - The type of the data included in the response payload.
 *
 * @property success - Indicates whether the API request was successful.
 * @property statusCode - The HTTP status code associated with the response.
 * @property payload - The main content of the response.
 * @property payload.message - A descriptive message about the response.
 * @property payload.data - (Optional) The data returned by the API, if any.
 * @property payload.paginationMeta - (Optional) Metadata for paginated responses, if applicable.
 */
export interface IApiSuccessResponse<T> {
  statusCode: number;
  success: boolean;
  body: {
    message: string;
    data: T;
  };
}
