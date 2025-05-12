# BYLT Basics Express API

This is the backend API service for the BYLT Basics e-commerce project. It provides RESTful endpoints to support the frontend application.

## Technology Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **TypeScript**: Type-safe JavaScript
- **InversifyJS**: Dependency injection
- **Winston**: Logging library
- **Zod**: Schema validation
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing
- **HTTP-Status**: HTTP status code constants

## Project Structure

```
express-app/
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── logs/               # Log files (gitignored)
│   ├── all.log         # Combined logs
│   └── error.log       # Error-only logs
└── src/
    ├── app.ts          # Express application setup
    ├── index.ts        # Server entry point
    ├── api-errors/     # Custom error classes
    │   ├── base.error.ts     # Base error class
    │   ├── index.ts          # Export error classes
    │   └── specific errors   # HTTP status-specific errors
    ├── config/         # Configuration files
    │   ├── env.config.ts  # Environment variable validation
    │   ├── index.ts       # Export configurations
    │   └── inversify/     # Dependency injection setup
    │       ├── container.ts      # IoC container setup
    │       ├── service-provider.ts # Service provider initialization
    │       ├── types.ts          # DI type definitions
    │       └── index.ts          # Export DI utilities
    ├── middlewares/    # Express middlewares
    │   └── error/      # Error handling middlewares
    │       ├── global-error.middleware.ts # Global error handler
    │       ├── not-allowed-method.middleware.ts # 405 Method not allowed handler
    │       └── index.ts          # Export middlewares
    └── services/       # Service implementations
        ├── index.ts    # Export services
        └── logger/     # Logging service
            ├── index.ts          # Export logger components
            ├── logger.service.ts # Winston logger implementation
            ├── logger.types.ts   # Logger interfaces and types
            └── logger.constants.ts # Logger configuration constants
```

## Setup and Installation

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

From the root of the monorepo:

```bash
# Install dependencies for all packages including the express-app
pnpm install
```

### Environment Variables

Create a `.env` file in the `apps/express-app` directory with the following variables:

```env
NODE_ENV=development
PORT=8080
SERVER_URL=http://localhost:8080
CLIENT_URL=http://localhost:3000
```

## Development

```bash
# Start the Express API in development mode
pnpm dev:api

# Or from within the express-app directory
pnpm dev
```

This will start the server with hot-reloading enabled.

## Building for Production

```bash
# Build the Express API
pnpm build:api

# Start the production server
pnpm start:api
```

## API Endpoints

| Method                             | Endpoint | Description                  |
| ---------------------------------- | -------- | ---------------------------- |
| GET                                | /        | Health check/welcome message |
| _Additional endpoints to be added_ |

## Core Features

### Dependency Injection

The application uses InversifyJS for dependency injection, which helps with:

- Loose coupling between components
- Easier testing through mocking
- Centralized service management

Services are registered in `container.ts` and accessed through `service-provider.ts`.

### Type-Safe Environment Configuration

Environment variables are validated using Zod to ensure type safety and proper configuration. This prevents runtime errors due to missing or incorrectly formatted environment variables.

Example from `env.config.ts`:

```typescript
const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  PORT: z.string({ message: "PORT must be a string" }).default("8080"),
  SERVER_URL: z.string({ message: "SERVER_URL must be a string" }),
  CLIENT_URL: z.string({ message: "CLIENT_URL must be a string" }),
});
```

### Logging System

The application includes a comprehensive logging system based on Winston:

- Multiple log levels (error, warn, info, http, debug)
- Console output with color coding for development
- File-based logging for production
- Separate error logs
- Structured JSON log format
- Contextual metadata support

Example usage:

```typescript
import { loggerService } from "@/config/inversify";

// Basic logging
loggerService.info("Server started successfully");

// Logging with metadata
loggerService.error("Database connection failed", {
  attemptCount: 3,
  lastError: "Connection timeout"
});
```

Example implementation features:

```typescript
@injectable()
export class LoggerService implements ILoggerService {
  // Multiple log methods with consistent interface
  public error: LogMethod = (message: string, meta?: any) => {
    this.logger.error(message, meta);
  };

  public warn: LogMethod = (message: string, meta?: any) => {
    this.logger.warn(message, meta);
  };

  // Additional utility methods
  public getLogger(): winston.Logger {
    return this.logger;
  }

  public addTransport(transport: winston.transport): void {
    this.logger.add(transport);
  }
}
```

### Error Handling

The application includes a comprehensive error handling system:

#### Standardized Error Classes

- **BaseError**: Foundation error class with standardized properties:

  - `name`: Identifies the error type
  - `httpCode`: Appropriate HTTP status code
  - `isOperational`: Distinguishes operational from programming errors
  - `metadata`: Additional context for debugging

- **Specific Error Classes**: Type-safe error classes for common HTTP status codes:
  - `BadRequestError` (400)
  - `UnauthorizedError` (401)
  - `ForbiddenError` (403)
  - `NotFoundError` (404)
  - `HttpMethodNotAllowedError` (405)
  - `ConflictError` (409)
  - `TooManyRequestsError` (429)
  - `InternalServerError` (500)
  - `DatabaseError` (500)

#### Error Middleware

- **Global Error Middleware**: Catches and processes all errors:

  - Standardizes error responses
  - Logs detailed error information
  - Provides appropriate status codes
  - Shows stack traces in development mode

- **Method Not Allowed Middleware**: Handles requests with unsupported HTTP methods:
  - Returns 405 status code with detailed message
  - Includes which method was attempted and on which route

#### Error Response Format

All API errors follow a consistent JSON format:

```json
{
  "message": "Detailed error message",
  "statusCode": 400,
  "name": "BAD_REQUEST"
}
```

#### Process Error Handlers

The application also includes process-level error handlers for:

- Uncaught exceptions
- Unhandled promise rejections

These ensure that errors are properly logged before the application shuts down gracefully.

### Security

- **Helmet**: Provides security headers to protect against common web vulnerabilities
- **CORS**: Configured to only allow specific origins to access the API

## Testing

_Testing implementation details to be added_

## Deployment

_Deployment details to be added_

## License

Proprietary - BYLT Basics
