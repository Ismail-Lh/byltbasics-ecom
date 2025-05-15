export enum UserErrors {
  // User Email related errors
  EmailLengthLimitExceeded = "Email must be at most 255 characters long.",
  InvalidEmailAddress = "Invalid email format. Please try another one.",

  // User Password related errors
  PasswordLengthLimitExceeded = "Password must be at most 128 characters long.",
  PasswordMinLength = "Password must be at least 8 characters long.",
  PasswordSpecialCharacter = "Password must include a lowercase, uppercase, number, and special character.",
  PasswordSpecialCharacterLimit = "Password cannot contain special characters like '\"<>;(){}.",

  // User Name related errors
  UserNameLengthLimitExceeded = "Username must be at most 20 characters long.",
  UserNameMinLength = "Username must be at least 3 characters long.",
  UserNameInvalidFormat = "Invalid username format. Only letters, numbers, and underscores are allowed.",
  UserNameSpecialCharacterLimit = "Username cannot contain special characters like '\"<>;(){}.",

  // User already exists
  UserAlreadyExists = "User already exists with this email address.",
}
