/**
 * Data Transfer Object (DTO) representing the output user data.
 *
 * @interface
 */
export interface IUserOutReqDTO {
  /**
   * The ID of the user.
   */
  id: string;

  /**
   * The name of the user.
   */
  name: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The creation date of the user account.
   */
  createdAt: string;
}
