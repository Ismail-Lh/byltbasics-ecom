# @byltbasics/types

This package provides shared TypeScript type definitions for the ByltBasics e-commerce platform. It serves as a centralized package for defining common data structures and interfaces used across the monorepo to ensure type consistency between the frontend and backend applications.

## Overview

The `@byltbasics/types` package defines standardized types for API responses and other shared data structures used throughout the ByltBasics application ecosystem. By centralizing these definitions, we maintain consistency and improve developer experience when working across different parts of the application.

## Installation

This package is set up as part of the monorepo and is automatically available to other packages through workspace dependencies. If you need to explicitly install it in a specific package:

```bash
pnpm add @byltbasics/types
```

## Usage

Import the types you need in your TypeScript files:

```typescript
import { IApiErrorResponse, IApiSuccessResponse } from "@byltbasics/types";

// Example of using the success response type
function processApiResponse<T>(response: IApiSuccessResponse<T>) {
  if (response.success) {
    return response.payload.data;
  }
  return null;
}

// Example of handling an error response
function handleApiError(error: IApiErrorResponse) {
  console.error(`Error: ${error.payload.message}`);
  if (error.payload.errorDetails) {
    console.error("Details:", error.payload.errorDetails);
  }
}
```

## Available Types

### API Response Types

- **IApiSuccessResponse<T>**: Standardized interface for successful API responses
- **IApiErrorResponse**: Interface defining the structure of API error responses
- **IErrorDetails**: Interface for detailed error information

## Development

### Building the Package

To build the types package:

```bash
# From the monorepo root
pnpm build:types

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
packages/types/
├── src/
│   ├── api/
│   │   ├── error-response.ts
│   │   ├── success-response.ts
│   │   └── index.ts
│   └── index.ts
├── tsconfig.json
├── tsup.config.ts
└── package.json
```

## Contributing

When adding new types to this package:

1. Place related types in appropriate subdirectories
2. Ensure proper documentation with JSDoc comments
3. Export all public types through the relevant index.ts files
4. Run `pnpm build` to compile the package
5. Test the types in the consuming applications

## License

ISC
