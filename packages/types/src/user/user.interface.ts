/**
 * Represents a user entity within the system.
 *
 * @property id - Unique identifier for the user.
 * @property name - Full name of the user.
 * @property email - Email address associated with the user.
 * @property isEmailVerified - Indicates whether the user's email has been verified.
 * @property emailVerifiedAt - The date and time when the user's email was verified, or null if not verified.
 * @property password - Hashed password of the user.
 * @property createdAt - Timestamp indicating when the user was created.
 * @property updatedAt - Timestamp indicating when the user was last updated.
 */
export interface IUser {
  id: number;
  name: string;
  email: string;
  isEmailVerified: boolean;
  emailVerifiedAt: string | null;
  password: string;
  createdAt: string;
  updatedAt: string;
}
