# BYLT Basics Express API

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-green?logo=express)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)
[![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.29.x-orange)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-blue?logo=postgresql)](https://www.postgresql.org/)
[![InversifyJS](https://img.shields.io/badge/InversifyJS-6.x-yellow)](https://inversify.io/)
[![Last Updated](https://img.shields.io/badge/Last_Updated-May_2025-brightgreen)](/)

</div>

This is the backend API service for the BYLT Basics e-commerce platform, providing RESTful endpoints to support the frontend application. Built with a clean architecture approach, this API delivers scalable, maintainable, and secure services for the e-commerce ecosystem.

## 🚀 Technology Stack

### Core Technologies

- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment
- **[Express](https://expressjs.com/)**: Fast, unopinionated web framework
- **[TypeScript](https://www.typescriptlang.org/)**: Static type checking for JavaScript
- **[InversifyJS](https://inversify.io/)**: Powerful dependency injection container

### Database & ORM

- **[Drizzle ORM](https://orm.drizzle.team/)**: TypeScript ORM with type safety
- **[PostgreSQL](https://www.postgresql.org/)**: Advanced object-relational database
- **[Supabase](https://supabase.com/)**: Open source Firebase alternative

### Authentication & Security

- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: Password hashing
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: JWT implementation
- **[Helmet](https://helmetjs.github.io/)**: Security headers middleware
- **[CORS](https://www.npmjs.com/package/cors)**: Cross-origin resource sharing

### Validation & Error Handling

- **[Zod](https://zod.dev/)**: TypeScript-first schema validation
- **[HTTP-Status](https://www.npmjs.com/package/http-status)**: HTTP status code constants
- **[express-async-errors](https://www.npmjs.com/package/express-async-errors)**: Async error handling

### Logging & Monitoring

- **[Winston](https://www.npmjs.com/package/winston)**: Versatile logging library
- **[morgan](https://www.npmjs.com/package/morgan)**: HTTP request logger middleware

### Monorepo Integration

- **[pnpm Workspaces](https://pnpm.io/workspaces)**: Package management
- **[@byltbasics/types](../packages/types)**: Shared type definitions
- **[@byltbasics/schemas](../packages/schemas)**: Shared validation schemas

## Architecture Overview

The project follows Clean Architecture principles to create a maintainable and testable codebase with clear separation of concerns:

### Layers

1. **Domain Layer**: Contains business entities, value objects, and domain rules

   - Independent of frameworks and external concerns
   - Defines the core business logic

2. **Application Layer**: Contains use cases and interfaces

   - Orchestrates the flow of data between domain and infrastructure
   - Defines interfaces implemented by outer layers

3. **Infrastructure Layer**: Contains implementations of interfaces

   - Database access, external services, and framework integrations
   - Adapts external technologies to the application's needs

4. **Presentation Layer**: Contains controllers, routes, and middleware
   - Handles HTTP requests and responses
   - Adapts the application to the web framework

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
├── src/
│   ├── domain/         # Enterprise business rules
│   │   ├── shared/     # Shared domain components
│   │   └── user/       # User domain entities and value objects
│   ├── application/    # Application business rules
│   │   ├── providers/  # Provider interfaces
│   │   ├── repositories/ # Repository interfaces
│   │   └── use-cases/  # Application use cases
│   ├── infrastructure/ # External implementations
│   │   ├── databases/  # Database implementations
│   │   ├── di-container/ # Dependency injection
│   │   ├── errors/     # Error handling
│   │   ├── providers/  # Provider implementations
│   │   └── repositories/ # Repository implementations
│   ├── presentation/   # User interface layer
│   │   ├── adapters/   # Framework adapters
│   │   ├── express/    # Express-specific code
│   │   ├── http/       # HTTP controllers
│   │   └── service-provider/ # DI container access
│   └── config/         # Configuration
├── logs/               # Log files (gitignored)
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── drizzle.config.ts   # Drizzle ORM configuration
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

## 🔄 Recent Changes (May 2025)

### 🔐 Authentication System Expansion

- **Complete Authentication Flow Implementation**:

  - ✅ Implemented user registration with validation and hashing
  - ✅ Added JWT-based login with access and refresh tokens
  - ❌ Created token refresh endpoint and validation (in-progress)
  - ❌ Implemented secure logout mechanism (in-progress)
  - ❌ Added password reset flow with email verification (planned)

- **Security Enhancements**:
  - ✅ Strengthened password requirements with entropy checks
  - ❌ Enhanced JWT validation with proper audience and issuer checks (planned)
  - ❌ Added rate limiting for auth endpoints to prevent brute-force attacks (planned)
  - ❌ Implemented IP-based suspicious activity detection (planned)
  - ❌ Added CSRF protection for authenticated routes (planned)

### 🛡️ Response Handling & Error Management

- **Enhanced Response Sanitization**:

  - ✅ Improved API response sanitization with clearer documentation
  - ✅ Added additional sensitive field pattern detection
  - ✅ Implemented configurable sanitization rules
  - ✅ Enhanced security by removing sensitive data from responses

- **Error Handling Improvements**:
  - ✅ Standardized error response formatting across the application
  - ✅ Improved global error middleware for better error tracing
  - ✅ Refined auth error messages for better user experience
  - ✅ Enhanced error details for debugging in development mode

### 🏗️ Architectural Improvements

- **Clean Architecture Refinement**:

  - ✅ Complete separation of concerns across all layers
  - ✅ Improved domain model with stronger invariant validation
  - ✅ Refactored use cases to eliminate side effects
  - ✅ Enhanced repository interfaces for greater flexibility

- **Dependency Injection Enhancements**:
  - ✅ Reorganized DI container for improved service registration
  - ✅ Added proper scoping for request-level dependencies
  - ✅ Implemented automated binding discovery
  - ✅ Added factory method support for complex object creation

### 🔍 Enhanced Data Validation

- **Schema-First Development**:
  - ✅ Shared schemas between frontend and backend through `@byltbasics/schemas` package
  - ✅ Enhanced Zod validation with custom error messages
  - ✅ Added runtime type checking for all external inputs
  - ✅ Implemented stricter validation for sensitive data
  - ✅ Created validation pipelines with transformation support

### 📈 Monitoring and Performance

- **Logging and Telemetry**:
  - ✅ Enhanced structured logging with correlation IDs
  - ✅ Added performance tracking for database queries
  - ✅ Implemented request tracing across services
  - ✅ Created comprehensive error tracking system
  - ✅ Added health check endpoints with detailed status reports

### 🚢 Deployment and Infrastructure

- **Containerization**:
  - ✅ Multi-stage Docker builds for smaller production images
  - ✅ Optimized Node.js configuration for container environments
  - ✅ Implemented graceful shutdown handlers
  - ✅ Added container health checks and readiness probes

## Building for Production

```bash
# Build the Express API
pnpm build:api

# Start the production server
pnpm start:api
```

## 🔌 API Reference

### 🔍 API Overview

All API endpoints use a consistent response format and follow RESTful principles. The API is versioned using URL path versioning (`/api/v1/`).

### 📊 Status Endpoints

| Method | Endpoint | Description                  | Authentication |
| ------ | -------- | ---------------------------- | -------------- |
| GET    | /        | Health check/welcome message | None           |

### 🔐 Authentication Endpoints

| Method | Endpoint              | Description                 | Request Body                | Authentication |
| ------ | --------------------- | --------------------------- | --------------------------- | -------------- |
| POST   | /api/v1/auth/register | Register a new user account | `{ name, email, password }` | None           |
| POST   | /api/v1/auth/login    | Authenticate and get tokens | `{ email, password }`       | None           |

### 👤 User Endpoints

| Method | Endpoint         | Description              | Request Body           | Authentication |
| ------ | ---------------- | ------------------------ | ---------------------- | -------------- |
| GET    | /api/v1/users/me | Get current user profile | None                   | Required       |
| PATCH  | /api/v1/users/me | Update user profile      | `{ name, email, ... }` | Required       |
| DELETE | /api/v1/users/me | Delete user account      | None                   | Required       |

### 💼 Admin Endpoints

| Method | Endpoint                | Description    | Authentication |
| ------ | ----------------------- | -------------- | -------------- |
| GET    | /api/v1/admin/users     | List all users | Admin Only     |
| GET    | /api/v1/admin/users/:id | Get user by ID | Admin Only     |
| PATCH  | /api/v1/admin/users/:id | Update user    | Admin Only     |
| DELETE | /api/v1/admin/users/:id | Delete user    | Admin Only     |

### 🔒 Authentication Implementation

The authentication system is built with security and flexibility as core principles:

#### 🔐 Controllers & Routes

- **Controllers**:

  - ✅ `AuthRegisterController`: Handles user registration with validation
  - ✅ `AuthLoginController`: Manages login and token issuance
  - ❌ `AuthRefreshController`: Handles token refresh logic
  - ❌ `AuthLogoutController`: Manages secure session termination
  - ❌ `AuthPasswordResetController`: Handles password reset flows

- **Routes**: Auth-specific routes in `presentation/express/routes/auth.routes.ts`
  - RESTful endpoints under `/api/v1/auth/` prefix
  - Clear separation of authentication concerns

#### 🔑 Token Implementation

- **JWT Strategy**:

  - ✅ Access tokens with configurable short lifetime (default: 15m)
  - ✅ Refresh tokens with longer lifetime (default: 7d)
  - ✅ Token rotation on refresh for improved security
  - ✅ Signed tokens with RS256 algorithm

- **Token Storage**:
  - ✅ Access tokens delivered as Bearer tokens
  - ✅ Refresh tokens stored in HTTP-only, secure cookies
  - ✅ Server-side token tracking for instant invalidation

#### 🛡️ Security Features

- **Password Management**:

  - ✅ Bcrypt hashing with configurable work factors
  - ✅ Minimum entropy requirements
  - ✅ Dictionary attack prevention
  - ✅ Password history tracking (prevents reuse)

- **Attack Prevention**:

  - ❌ Rate limiting on auth endpoints (sliding window)
  - ❌ Progressive delays for failed attempts
  - ❌ Account lockout after threshold breaches
  - ❌ IP-based and user-based tracking

- **Session Security**:
  - ❌ CSRF protection with SameSite cookie attributes
  - ❌ XSS prevention with HTTPOnly cookies
  - ❌ Automatic token refresh handling
  - ❌ Device fingerprinting for unusual activity detection

### 🔐 Authentication Endpoints Examples

#### Registration

```
POST /api/v1/auth/register
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
    "message": "User registered successfully",
    "data": null
  }
}
```

#### Login

```
POST /api/v1/auth/login
```

Authenticates a user and returns access and refresh tokens.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "StrongP@ssw0rd"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "statusCode": 200,
  "body": {
    "message": "Login successful",
    "data": null
  }
}
```

**Note:** The refresh token is automatically set as an HTTP-only cookie.

**Possible Errors:**

- 400 Bad Request: Invalid input data
- 401 Unauthorized: Invalid credentials
- 429 Too Many Requests: Rate limit exceeded

## 🏛️ Core Architecture

### 💉 Dependency Injection

The application uses InversifyJS for dependency injection, providing:

- **Loose Coupling**: Components connect through interfaces, not implementations
- **Testability**: Easy mocking and substitution of dependencies
- **Lifecycle Management**: Proper scoping of singleton/transient services
- **Centralized Service Registry**: All services registered in `container.ts`
- **Automated Discovery**: Components can be auto-registered via decorators
- **Lazy Initialization**: Services initialized only when required

### 🌐 Shared Types & Schemas

The application uses shared packages across frontend and backend:

- **@byltbasics/types**: Type definitions for DTOs, API responses, and models
- **@byltbasics/schemas**: Zod validation schemas shared between applications
- **Benefits**:
  - Consistent validation rules across client and server
  - Single source of truth for data shapes
  - Automatic TypeScript type inference
  - Contract-first API development

### ⚙️ Type-Safe Configuration

Environment variables are validated using Zod to ensure:

- **Type Safety**: Strong typing for all configuration values
- **Default Values**: Fallbacks when values are missing
- **Transformation**: Automatic conversion to appropriate types
- **Validation**: Runtime checking of requirements
- **Documentation**: Self-documenting configuration schema
- **Early Failure**: Immediate startup failure if config is invalid

### 📝 Structured Logging

The application includes a comprehensive logging system based on Winston:

- **Log Levels**: Fine-grained control (error, warn, info, http, debug)
- **Color-Coded Console**: Developer-friendly terminal output
- **File-Based Logging**: Persistent logs for production
- **Separate Error Channel**: Dedicated error logs for critical issues
- **Structured JSON Format**: Machine-parsable logs for aggregation
- **Request Correlation**: Trace IDs to track requests across systems
- **Context Enrichment**: Automatic metadata addition to logs

### 🛑 Error Handling

The application includes a comprehensive error handling system:

#### 🔄 Standardized Error Classes

- **BaseError**: Foundation error class with standardized properties:

  - `name`: Identifies the error type for automated handling
  - `httpCode`: Appropriate HTTP status code mapping
  - `isOperational`: Distinguishes operational from programming errors
  - `metadata`: Structured context for debugging and analytics
  - `errorId`: Unique identifier for tracking incidents
  - `timestamp`: Occurrence time for chronological analysis

- **Domain-Specific Errors**: Contextual error types for different domains:

  - `ValidationError`: Schema validation failures with field-specific details
  - `AuthenticationError`: Authentication and credential issues
  - `AuthorizationError`: Permission and access control violations
  - `ResourceError`: CRUD operation failures
  - `BusinessRuleError`: Domain logic constraint violations
  - `ExternalServiceError`: Third-party service failures

- **HTTP Status-Mapped Errors**: Type-safe error classes for common HTTP status codes:
  - `BadRequestError` (400): Malformed requests
  - `UnauthorizedError` (401): Authentication failures
  - `ForbiddenError` (403): Authorization failures
  - `NotFoundError` (404): Resource not found
  - `HttpMethodNotAllowedError` (405): Unsupported HTTP methods
  - `ConflictError` (409): Resource conflicts (e.g., duplicates)
  - `TooManyRequestsError` (429): Rate limit exceeded
  - `InternalServerError` (500): Unexpected server errors
  - `DatabaseError` (500): Database operation failures
  - `ServiceUnavailableError` (503): Temporary unavailability

#### 🚦 Error Middleware Pipeline

- **Global Error Middleware**: Centralized error processing:

  - Standardizes response format across the API
  - Enriches logs with contextual information
  - Maps errors to appropriate status codes
  - Sanitizes sensitive information in responses
  - Shows detailed diagnostics in development mode only
  - Applies different handling based on error types

- **Method Not Allowed Middleware**: Specialized handler for invalid HTTP methods:
  - Returns 405 status with allowed methods header
  - Provides descriptive error messages
  - Logs attempted access patterns

#### 📊 Error Response Format

All API errors follow a consistent JSON format with useful diagnostics:

```json
{
  "success": false,
  "statusCode": 400,
  "body": {
    "message": "Detailed error message for the client",
    "name": "BAD_REQUEST",
    "errorId": "err-uuid-1234-5678",
    "errorDetails": {
      "email": "Email format is invalid",
      "password": "Password must be at least 8 characters"
    }
  }
}
```

#### 🔄 Process-Level Error Handling

The application implements failsafe error handling at the process level:

- **Uncaught Exception Handler**: Catches unexpected errors:

  - Logs comprehensive error details
  - Notifies monitoring systems
  - Ensures graceful shutdown to prevent corrupted state
  - Signals process manager for restart

- **Unhandled Rejection Handler**: Manages unhandled promise rejections:

  - Converts to proper error objects
  - Logs rejection causes and stack traces
  - Prevents silent failures
  - Maintains same error format as synchronous errors

- **Graceful Shutdown**: Orderly termination sequence:
  - Completes in-flight requests
  - Closes database connections properly
  - Releases external resources
  - Notifies health check systems

### Controller and Adapter Pattern

The application follows the Controller pattern with Adapters for clean separation of concerns:

- **HTTP Controllers**: Handle the application's business logic
- **Express Adapter**: Translates between Express requests/responses and the application's interface
- **Framework-Agnostic**: Business logic remains isolated from web framework details

This approach makes the application more testable and adaptable to different presentation frameworks.

### Authentication Module

The application includes a dedicated authentication module that handles user registration, login, and session management:

#### Architecture

- **Controllers**: Auth-specific controllers in `presentation/http/controllers/auth/`

  - `AuthRegisterController`: Handles user registration with validation
  - `AuthLoginController`: Manages login and token issuance with proper error handling
  - `AuthRefreshController`: Handles token refresh logic
  - `AuthPasswordResetController`: Handles password reset flows

- **Routes**: Auth-specific routes in `presentation/express/routes/auth.routes.ts`

  - RESTful endpoints under `/api/v1/auth/` prefix
  - Clear separation of authentication concerns

- **Design Benefits**:
  - Centralized authentication logic
  - Improved API organization and discoverability
  - Clear extension points for future auth features
  - Better adherence to single responsibility principle

#### Security Considerations

- Password hashing with bcrypt
- Protection against brute force attacks
- Proper error handling for auth failures
- Input validation for all auth-related requests

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
- Authentication tokens and keys
- API keys
- Private keys
- Secret keys
- Any field matching authentication patterns

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

## 📝 Latest Updates (May 2025)

### 🛡️ Response Handling System Enhancements

In our ongoing effort to improve security and user experience, we've made several enhancements to the response handling system:

#### Response Sanitizer Interface Improvements

- Added comprehensive documentation to interface methods and parameters
- Introduced configurable sanitization rules for greater flexibility
- Added new sanitization pattern detection for improved security
- Enhanced TypeScript types to ensure type safety across the application

#### Advanced Error Handling

- Refined global error middleware for more consistent error reporting
- Improved error message clarity for authentication failures
- Added environment-aware stack trace handling (development-only)
- Enhanced error formatting for better client-side interpretation

These improvements ensure sensitive data never leaves our API and that error messages are consistently formatted while being informative to clients. The enhanced sanitization patterns now cover a broader range of sensitive data types without impacting response performance.

## 🔒 License

Proprietary - BYLT Basics - Copyright © 2025
