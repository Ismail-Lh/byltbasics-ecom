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
- **express-async-errors**: Async error handling
- **@byltbasics/types**: Shared type definitions across the monorepo

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

### Domain-Driven Design Approach

The application follows Domain-Driven Design principles:

- **Entities**: Domain objects with identity, such as User
- **Value Objects**: Immutable objects that represent a concept, such as Email, Password
- **Repositories**: Abstract data access with domain-focused interfaces
- **Domain Services**: Encapsulate domain logic that doesn't fit in entities or value objects
- **Factories**: Create complex domain objects or aggregates

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
    │   ├── providers/  # Interfaces for external services
    │   │   ├── index.ts       # Export provider interfaces
    │   │   ├── crypto.interface.ts # Crypto provider interface
    │   │   ├── logger.interface.ts # Logger interface definitions
    │   │   └── response-sanitizer.interface.ts # Response sanitizer interface
    │   ├── repositories/ # Repository interfaces
    │   │   ├── index.ts       # Export repository interfaces
    │   │   └── user.repository.ts # User repository interface
    │   └── use-cases/  # Application use cases
    │       └── user/   # User-related use cases
    │           ├── implementations/ # Use case implementations
    │           │   └── create-user.ts # User creation use case
    │           ├── interfaces/    # Use case interfaces
    │           │   └── create-user.ts # User creation interface
    │           └── index.ts       # Export use cases
    ├── domain/         # Enterprise business rules layer
    │   ├── shared/     # Shared domain components
    │   │   └── dtos/   # Shared data transfer objects
    │   │       └── response/ # Response DTOs
    │   │           └── response.dto.ts # Generic response interface
    │   └── user/       # User domain entities and value objects
    │       ├── dtos/   # User data transfer objects
    │       ├── entity/ # User entity definition
    │       │   └── user.entity.ts # User domain entity
    │       ├── enums/  # User-related enumerations
    │       │   └── errors.enum.ts # User error messages
    │       ├── schemas/ # Validation schemas
    │       │   ├── create-user.schema.ts # User creation schema
    │       │   ├── email.schema.ts # Email validation schema
    │       │   ├── password.schema.ts # Password validation schema
    │       │   ├── username.schema.ts # Username validation schema
    │       │   └── index.ts     # Export schemas
    │       └── value-objects/ # User value objects
    │           ├── email.ts     # Email value object
    │           ├── name.ts      # Name value object
    │           ├── password.ts  # Password value object
    │           └── index.ts     # Export value objects
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
    │   ├── di-container/ # Dependency injection container
    │   │   ├── container.ts   # IoC container setup
    │   │   └── types.ts       # DI type definitions
    │   ├── errors/     # Custom error classes
    │   │   ├── base.error.ts   # Base error class
    │   │   ├── index.ts        # Export error classes
    │   │   └── *               # HTTP status-specific errors
    │   ├── providers/  # External service implementations
    │   │   ├── crypto/  # Cryptography implementation
    │   │   ├── logger/  # Logging implementation
    │   │   │   ├── constants.ts # Logger configuration constants
    │   │   │   ├── index.ts     # Export logger components
    │   │   │   └── logger.ts    # Winston logger implementation
    │   │   ├── response-sanitizer/ # Response sanitizer implementation
    │   │   │   ├── index.ts     # Export response sanitizer
    │   │   │   └── response-sanitizer.ts # Response sanitizer implementation
    │   │   └── index.ts # Export providers
    │   └── repositories/ # Repository implementations
    │       └── drizzle/  # Drizzle-based repositories
    │           └── user.repository.ts # User repository implementation
    ├── presentation/   # User interface layer
    │   ├── adapters/   # Adapter implementations
    │   │   └── express.ts     # Express adapter for controllers
    │   ├── express/    # Express-specific code
    │   │   ├── app.ts         # Express application setup
    │   │   ├── server.ts      # Server entry point
    │   │   ├── middlewares/   # Express middlewares
    │   │   │   ├── errors/    # Error handling middlewares
    │   │   │   │   ├── global-error.middleware.ts # Global error handler
    │   │   │   │   ├── not-allowed-method.middleware.ts # 405 Method not allowed
    │   │   │   │   └── index.ts # Export error middlewares
    │   │   │   ├── validations/ # Request validation middlewares
    │   │   │   │   ├── validate-request.middleware.ts # Zod validation middleware
    │   │   │   │   └── index.ts # Export validation middlewares
    │   │   │   └── index.ts     # Export all middlewares
    │   │   ├── routes/       # Express routes
    │   │   │   ├── user.ts     # User routes
    │   │   │   └── index.ts    # Export routes
    │   │   └── types/        # Express type definitions
    │   │       └── index.ts    # Type definitions
    │   ├── http/      # HTTP-related components
    │   │   ├── controllers/  # API controllers
    │   │   │   ├── controller.interface.ts # Controller interface
    │   │   │   └── user/     # User controllers
    │   │   │       ├── create-user.ts # User creation controller
    │   │   │       └── index.ts # Export user controllers
    │   │   └── helpers/     # HTTP helpers
    │   │       └── interfaces/ # HTTP interfaces
    │   │           ├── http-req.ts # HTTP request interface
    │   │           ├── http-res.ts # HTTP response interface
    │   │           └── index.ts # Export HTTP interfaces
    │   └── service-provider/ # Service provider (DI container access)
    │       └── index.ts      # Service provider implementation
    └── config/         # Configuration files
        ├── env.config.ts  # Environment variable validation
        └── index.ts       # Export configurations
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

- **Standardized API Response Format**:

  - Implemented a unified response format for consistent API communication
  - Created an `ApiResponseSanitizer` to handle response formatting and data sanitization
  - Integrated with shared types package to ensure consistency across frontend and backend
  - Added sensitive data filtering to prevent leaking of critical information

- **Architectural Refactoring**:

  - Migrated from a flat structure to a layered Clean Architecture approach
  - Reorganized DI container from `/config/inversify` to `/infrastructure/di-container`
  - Moved service provider to the presentation layer for better separation of concerns

- **Improved Separation of Concerns**:

  - Moved Express-specific code to the presentation layer
  - Defined clear interfaces in the application layer
  - Implemented services in the infrastructure layer
  - Properly structured HTTP helpers and interfaces

- **Enhanced Logging System**:

  - Created a clearer interface for the logger in the application layer
  - Implemented the interface in the infrastructure layer

- **Added Schema Validation**:

  - Extracted validation schemas from value objects into dedicated schema files
  - Added comprehensive validation for email, username, and password
  - Added detailed JSDoc documentation for schemas and validation rules

- **Request Validation Middleware**:

  - Implemented type-safe request validation using Zod
  - Created middleware for validating request body, params, and query
  - Added standardized error handling for validation failures
  - Applied validation to API endpoints for improved data integrity

- **User Registration API**:

  - Implemented complete user registration endpoint
  - Added proper validation and error handling
  - Created controller, use case, and repository implementation
  - Added comprehensive documentation for all components

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

| Method | Endpoint      | Description                  | Request Body                | Response                                  |
| ------ | ------------- | ---------------------------- | --------------------------- | ----------------------------------------- |
| GET    | /             | Health check/welcome message | None                        | `{ "message": "Hello from the server!" }` |
| POST   | /api/v1/users | Create a new user account    | `{ name, email, password }` | User object with 201 status               |

### User Management Endpoints

#### Create User

```
POST /api/v1/users
```

Creates a new user account.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "StrongP@ssw0rd"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "statusCode": 201,
  "body": {
    "message": "User created successfully",
    "data": {
      "id": "user-123",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2025-05-16T10:30:00Z"
    }
  }
}
```

**Possible Errors:**

- 400 Bad Request: Invalid input data (name, email, or password)
- 409 Conflict: User with the provided email already exists

## Core Features

### Dependency Injection

The application uses InversifyJS for dependency injection, which helps with:

- Loose coupling between components
- Easier testing through mocking
- Centralized service management

Services are registered in `container.ts` and accessed through the service provider.

### Type-Safe Environment Configuration

Environment variables are validated using Zod to ensure type safety and proper configuration. This prevents runtime errors due to missing or incorrectly formatted environment variables.

### Logging System

The application includes a comprehensive logging system based on Winston:

- Multiple log levels (error, warn, info, http, debug)
- Console output with color coding for development
- File-based logging for production
- Separate error logs
- Structured JSON log format
- Contextual metadata support

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
  "success": false,
  "statusCode": 400,
  "body": {
    "message": "Detailed error message",
    "name": "BAD_REQUEST",
    "errorDetails": {
      "email": "Email format is invalid"
    }
  }
}
```

#### Process Error Handlers

The application also includes process-level error handlers for:

- Uncaught exceptions
- Unhandled promise rejections

These ensure that errors are properly logged before the application shuts down gracefully.

### Controller and Adapter Pattern

The application follows the Controller pattern with Adapters for clean separation of concerns:

- **HTTP Controllers**: Handle the application's business logic
- **Express Adapter**: Translates between Express requests/responses and the application's interface
- **Framework-Agnostic**: Business logic remains isolated from web framework details

This approach makes the application more testable and adaptable to different presentation frameworks.

### Standardized API Response Format

The application implements a standardized API response format to ensure consistency across all endpoints:

#### Response Sanitizer

The `ApiResponseSanitizer` is responsible for:

- **Formatting Responses**: Ensuring all API responses follow a consistent format
- **Data Sanitization**: Removing sensitive data from responses (passwords, tokens, etc.)
- **Type Safety**: Providing type-safe response structures through shared types

All API responses follow these standardized formats:

**Success Response Structure:**

```typescript
{
  success: boolean; // Always true for success responses
  statusCode: number; // HTTP status code (200, 201, etc.)
  body: {
    message: string; // Success message
    data: T; // Response data (generic type)
  };
}
```

**Error Response Structure:**

```typescript
{
  success: boolean; // Always false for error responses
  statusCode: number; // HTTP status code (400, 404, 500, etc.)
  body: {
    message: string; // Error message
    name: string; // Error type identifier
    errorDetails: any;
  };
}
```

#### Sensitive Data Protection

The sanitizer automatically detects and removes sensitive data using pattern matching. Fields that match any of these patterns are removed from responses:

- Password fields
- User IDs collections
- Credit card information
- Social security numbers
- Authentication tokens
- API keys
- Private keys
- Secret keys

This helps prevent inadvertent exposure of sensitive information through API responses.

### Security

- **Helmet**: Provides security headers to protect against common web vulnerabilities
- **CORS**: Configured to only allow specific origins to access the API

### Request Validation

The application includes a comprehensive validation system:

#### Schema-Based Validation

- **Zod Schemas**: Type-safe validation schemas for all domain objects:

  - User creation data
  - Email addresses
  - Passwords
  - Usernames

- **Value Objects**: Domain-driven design approach with value objects:
  - `Email`: Validates and encapsulates email addresses
  - `Password`: Validates and encapsulates password values
  - `UserName`: Validates and encapsulates username values

#### Request Validation Middleware

- **validateRequest Middleware**: Generic middleware for validating HTTP requests:

  - Validates request body against schemas
  - Validates URL parameters
  - Validates query parameters
  - Provides descriptive error messages
  - Throws appropriate HTTP errors for invalid data

## Testing

The application follows a comprehensive testing strategy aligned with the Clean Architecture approach:

### Testing Framework

- **Jest**: Primary testing framework
- **Supertest**: HTTP testing utility for API endpoints
- **ts-mockito**: Mocking library for TypeScript

### Testing Structure

Tests are organized according to the application's architecture layers:

- **Unit Tests**: Test individual components in isolation

  - Value objects
  - Entities
  - Use cases
  - Providers

- **Integration Tests**: Test interactions between components
  - Repository implementations with database
  - Middleware chains
  - Controller workflows
- **API Tests**: Test complete HTTP endpoints
  - Request validation
  - Response format
  - Status codes
  - Error handling

### Test Naming Convention

Tests follow a descriptive naming convention:

```
[Component].[scenario].[expected result]
```

Example: `Email.withInvalidFormat.shouldThrowValidationError`

### Running Tests

```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run specific test suite
pnpm test -- -t "UserRepository"
```

### Test Environments

- Tests use isolated environments with:
  - In-memory databases for repository tests
  - Mocked dependencies for use case tests
  - Test-specific configuration

## Deployment

The application is designed for flexible deployment options:

### Containerization

- **Docker**: Application is containerized for consistent deployment
- **Docker Compose**: Development environment with all dependencies
- **Dockerfile**: Multi-stage build for optimized production images

### CI/CD Pipeline

The application uses GitHub Actions for continuous integration and deployment:

- **Build & Test**: On every pull request

  - Run tests
  - Check code style
  - Build application

- **Deploy to Staging**: On merge to develop branch
  - Build and push Docker image
  - Deploy to staging environment
  - Run smoke tests
- **Deploy to Production**: On merge to main branch
  - Build and push Docker image
  - Deploy to production environment
  - Run health checks

### Infrastructure

- **Production**: Kubernetes cluster on AWS EKS
- **Staging**: Kubernetes cluster on AWS EKS
- **Database**: Managed PostgreSQL (AWS RDS)
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Monitoring**: Prometheus and Grafana

### Scaling Strategy

- **Horizontal Scaling**: Multiple instances behind a load balancer
- **Auto-Scaling**: Based on CPU and memory metrics
- **Database Scaling**: Read replicas for high-traffic scenarios

### Deployment Commands

```bash
# Build for production
pnpm build:api

# Start in production mode
pnpm start:api

# Build Docker image
docker build -t byltbasics/api:latest .

# Run Docker container
docker run -p 3001:3001 --env-file .env byltbasics/api:latest
```

## License

Proprietary - BYLT Basics
