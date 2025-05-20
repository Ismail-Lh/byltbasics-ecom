# @byltbasics/schemas

This package provides a centralized collection of validation schemas for the ByltBasics e-commerce platform. It uses [Zod](https://github.com/colinhacks/zod) to enforce data validation rules across the monorepo, ensuring consistency between frontend and backend applications.

## Overview

The `@byltbasics/schemas` package defines standardized validation rules for user inputs, data structures, and API payloads used throughout the ByltBasics application ecosystem. By centralizing these validation schemas, we ensure consistent data validation across all parts of the application.

## Installation

This package is set up as part of the monorepo and is automatically available to other packages through workspace dependencies. If you need to explicitly install it in a specific package:

```bash
pnpm add @byltbasics/schemas
```

## Usage

Import the schemas you need in your TypeScript/JavaScript files:

```typescript
import { emailAddressSchema, passwordSchema, usernameSchema } from "@byltbasics/schemas";

// Validate an email
try {
  const validatedEmail = emailAddressSchema.parse("user@example.com");
  // Use the validated email
} catch (error) {
  // Handle validation error
  console.error("Invalid email:", error.message);
}

// Validate a password with error handling
const result = passwordSchema.safeParse("Password123!");
if (result.success) {
  const validPassword = result.data;
  // Use the validated password
} else {
  // Handle validation error
  console.error("Invalid password:", result.error.message);
}

// Use with form libraries like React Hook Form
// Example with React Hook Form (in your components)
const resolver = zodResolver(
  z.object({
    email: emailAddressSchema,
    password: passwordSchema,
    username: usernameSchema
  })
);
```

## Available Schemas

### User Schemas

- **emailAddressSchema**: Validates email addresses
  - Ensures string format
  - Maximum length: 255 characters
  - Validates standard email format

- **passwordSchema**: Validates user passwords
  - Requires at least one lowercase letter
  - Requires at least one uppercase letter
  - Requires at least one digit
  - Requires at least one special character
  - Minimum length: 8 characters
  - Maximum length: 128 characters
  - Restricts certain special characters

- **usernameSchema**: Validates usernames
  - Allows only letters, digits, and underscores
  - Minimum length: 3 characters
  - Maximum length: 20 characters
  - Restricts certain special characters

## Development

### Building the Package

To build the schemas package:

```bash
# From the monorepo root
pnpm build:schemas

# Or from the package directory
pnpm build
```

### Development Mode

To watch for changes during development:

```bash
pnpm dev
```

## Structure

```
packages/schemas/
├── src/
│   ├── user/
│   │   ├── email.schema.ts     # Email validation schema
│   │   ├── password.schema.ts  # Password validation schema
│   │   ├── username.schema.ts  # Username validation schema
│   │   └── index.ts            # Exports all user schemas
│   └── index.ts                # Main export file
├── tsconfig.json               # TypeScript configuration
├── tsup.config.ts              # Build configuration
└── package.json                # Package metadata and dependencies
```

## Extending the Schemas

When adding new schemas to this package:

1. Create a new file in the appropriate subdirectory (or create a new one if needed)
2. Define your schema using Zod
3. Add comprehensive JSDoc comments explaining the validation rules
4. Export your schema through the relevant index.ts files
5. Build the package and test it in the consuming applications

Example of adding a new schema:

```typescript
// src/product/price.schema.ts
import { z } from "zod";

/**
 * Schema for validating product prices.
 * 
 * - Must be a number
 * - Must be greater than zero
 * - Must have at most 2 decimal places
 */
export const priceSchema = z
  .number()
  .positive({ message: "Price must be greater than zero." })
  .refine(
    (val) => {
      const decimals = val.toString().split(".")[1];
      return !decimals || decimals.length <= 2;
    },
    { message: "Price can have at most 2 decimal places." }
  );

// Then in src/product/index.ts
export * from "./price.schema";

// And in src/index.ts
export * from "./product";
```

## Best Practices

- Always provide meaningful error messages in your schemas
- Group related schemas in subdirectories
- Use Zod's composition features to build complex schemas from simpler ones
- Write thorough tests for your schemas
- Always properly export your schemas through index files

## Contributing

When contributing to this package:

1. Ensure your schemas follow the established patterns
2. Update this README when adding significant new functionality
3. Run `pnpm build` to verify your changes compile correctly
4. Test your schemas thoroughly before submitting

## License

ISC
