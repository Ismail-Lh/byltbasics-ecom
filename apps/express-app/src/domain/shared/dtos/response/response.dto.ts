/**
 * Represents a generic response Data Transfer Object (DTO).
 * This interface is used to standardize the structure of API responses.
 *
 * @template T - The type of the data being returned in the response.
 */
export interface IResponseDTO<T> {
  /**
   * Indicates whether the operation was successful.
   */
  success: boolean;

  /**
   * The data payload of the response.
   * The type of this field is determined by the generic parameter `T`.
   */
  data: T;

  /**
   * A message providing additional information about the response.
   * This can be used for success messages, error messages, or any other relevant information.
   */
  message: string;

  /**
   * (Optional) The HTTP status code associated with the response.
   */
  statusCode: number;
}
