/**
 * Details about an error that occurred.
 */
export interface IErrorDetails {
  /**
   * A map of field names to error messages.
   */
  [field: string]: string | string[] | Record<string, any>;
}

/**
 * Represents the structure of an API error response.
 */
export interface IApiErrorResponse {
  /**
   * Indicates whether the API request was successful.
   */
  success: boolean;

  /**
   * The HTTP status code of the response.
   */
  statusCode: number;

  /**
   * The payload containing details about the error.
   */
  payload: {
    /**
     * A descriptive message about the error.
     */
    message: string;

    /**
     * A name or code identifying the type of error.
     */
    name?: string;

    /**
     * Optional detailed information about the error.
     */
    errorDetails?: IErrorDetails;
  };
}
