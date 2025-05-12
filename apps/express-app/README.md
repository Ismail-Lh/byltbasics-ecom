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
    ├── config/         # Configuration files
    │   ├── env.config.ts  # Environment variable validation
    │   ├── index.ts       # Export configurations
    │   └── inversify/     # Dependency injection setup
    │       ├── container.ts      # IoC container setup
    │       ├── service-provider.ts # Service provider initialization
    │       ├── types.ts          # DI type definitions
    │       └── index.ts          # Export DI utilities
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

### Environment Configuration

Environment variables are validated using Zod to ensure type safety and proper configuration. This prevents runtime errors due to missing or incorrectly formatted environment variables.

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

### Error Handling

The application includes global error handlers for:

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
