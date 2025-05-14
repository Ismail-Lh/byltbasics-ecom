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
- **Drizzle ORM**: Database ORM
- **Postgres**: PostgreSQL client

## Architecture Overview

The project follows Clean Architecture principles to create a maintainable and testable codebase with clear separation of concerns:

### Layers

1. **Domain Layer** - Contains enterprise business rules, entities, and use cases. It has no dependencies on other layers.

2. **Application Layer** - Contains application-specific business rules. It defines interfaces that are implemented by the outer layers.

3. **Infrastructure Layer** - Contains implementations of interfaces defined in the application layer, including external services, tools, and frameworks.

4. **Presentation Layer** - Contains delivery mechanisms like the Express framework, controllers, and middleware that interact with the application layer.

### Key Benefits of This Architecture

- **Independent of Frameworks**: The core business logic is isolated from external frameworks.
- **Testable**: Business rules can be tested without the UI, database, web server, or any external element.
- **Independent of UI**: The UI can change without changing the business rules.
- **Independent of Database**: Business rules are not bound to a specific database.
- **Independent of External Agencies**: Business rules don't know anything about external interfaces.

## Project Structure

The project follows a Clean Architecture approach, separating concerns into distinct layers:

```
express-app/
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── drizzle.config.ts   # Drizzle ORM configuration
├── logs/               # Log files (gitignored)
│   ├── all.log         # Combined logs
│   └── error.log       # Error-only logs
└── src/
    ├── application/    # Application business rules layer
    │   └── providers/  # Interfaces for external services
    │       ├── index.ts       # Export provider interfaces
    │       └── logger.interface.ts # Logger interface definitions
    ├── domain/         # Enterprise business rules layer
    │   └── users/      # User domain entities and use cases
    ├── infrastructure/ # External implementations (frameworks, tools)
    │   ├── databases/  # Database implementations
    │   │   └── drizzle-supabase/ # Drizzle ORM with Supabase/Postgres
    │   │       ├── index.ts         # DB connection and setup
    │   │       ├── migrate.ts       # Migration script
    │   │       ├── seed.ts          # Seeding script
    │   │       ├── schemas/         # Database schema definitions
    │   │       │   ├── index.ts     # Export schemas
    │   │       │   └── user.ts      # User schema definition
    │   │       ├── seeds/           # Database seed data
    │   │       │   ├── index.ts     # Export seed functions
    │   │       │   ├── user.ts      # User seeding logic
    │   │       │   └── data/        # Seed data files
    │   │       │       └── users.json # Sample user data
    │   │       └── migrations/      # Generated migration files
    │   │           ├── meta/        # Migration metadata
    │   │           │   ├── _journal.json   # Migration journal
    │   │           │   └── *.json   # Migration snapshots
    │   │           └── *.sql        # SQL migration files
    │   ├── errors/     # Custom error classes
    │   │   ├── base.error.ts   # Base error class
    │   │   ├── index.ts        # Export error classes
    │   │   └── *               # HTTP status-specific errors
    │   └── providers/  # External service implementations
    │       ├── index.ts        # Export providers
    │       └── logger/         # Logging implementation
    │           ├── constants.ts # Logger configuration constants
    │           ├── index.ts     # Export logger components
    │           └── logger.ts    # Winston logger implementation
    ├── presentation/   # User interface layer
    │   └── express/    # Express-specific code
    │       ├── app.ts           # Express application setup
    │       ├── server.ts        # Server entry point
    │       └── middlewares/     # Express middlewares
    │           ├── index.ts     # Export middlewares
    │           └── errors/      # Error handling middlewares
    │               ├── global-error.middleware.ts # Global error handler
    │               ├── not-allowed-method.middleware.ts # 405 Method not allowed
    │               └── index.ts # Export error middlewares
    └── config/         # Configuration files
        ├── env.config.ts  # Environment variable validation
        ├── index.ts       # Export configurations
        └── inversify/     # Dependency injection setup
            ├── container.ts      # IoC container setup
            ├── service-provider.ts # Service provider initialization
            ├── types.ts          # DI type definitions
            └── index.ts          # Export DI utilities
```

## Setup and Installation

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL database

### Installation

From the root of the monorepo:

```bash
# Install dependencies for all packages including the express-app
pnpm install
```

### Environment Variables

Create a `.env` file in the `apps/express-app` directory with the following variables:

```
NODE_ENV=development
PORT=3001
SERVER_URL=http://localhost:3001
CLIENT_URL=http://localhost:3000
DB_URL=postgres://username:password@localhost:5432/database
DB_MIGRATING=false
DB_SEEDING=false
DB_LOGGING=true
```

Replace `username`, `password`, and `database` with your PostgreSQL credentials.

## Database Setup

The project uses Drizzle ORM with PostgreSQL for database operations. Here's how to work with the database:

### Generate Migrations

When you make changes to the schema files, generate a new migration:

```bash
# From the root of the monorepo
pnpm db:generate
```

### Run Migrations

Apply migrations to your database:

```bash
# From the root of the monorepo
pnpm db:migrate
```

### Seed Database

Populate your database with initial data:

```bash
# From the root of the monorepo
pnpm db:seed
```

### Pushing Schema Changes

For development, you can push schema changes directly to the database:

```bash
# From the root of the monorepo
pnpm db:push
```

### Database Migration Structure

- Migrations are stored in `src/infrastructure/databases/drizzle-supabase/migrations/`
- Each migration has SQL files and metadata files tracking the changes
- The `meta/_journal.json` file tracks all migrations that have been applied

## Development

```bash
# Start the Express API in development mode
pnpm dev:api

# Or from within the express-app directory
pnpm dev
```

The development server will start with hot-reloading enabled, running from the entry point at `src/presentation/express/server.ts`.

## Recent Changes (May 2025)

- **Architectural Refactoring**: Migrated from a flat structure to a layered Clean Architecture approach
- **Improved Separation of Concerns**:
  - Moved Express-specific code to the presentation layer
  - Defined clear interfaces in the application layer
  - Implemented services in the infrastructure layer
- **Enhanced Logging System**:
  - Created a clearer interface for the logger in the application layer
  - Implemented the interface in the infrastructure layer
- **Dependency Injection Updates**:
  - Updated DI container with the new architecture
  - Renamed symbols for better clarity (e.g., LoggerService -> Logger)

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
