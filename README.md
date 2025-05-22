# BYLT Basics E-Commerce Platform

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-white?logo=express)](https://expressjs.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8.x-orange?logo=pnpm)](https://pnpm.io/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.29.x-blue)](https://orm.drizzle.team/)
[![Last Updated](https://img.shields.io/badge/Last_Updated-May_2025-brightgreen)](/)

</div>

A modern, scalable e-commerce platform for BYLT Basics, built with a clean architecture and the latest web technologies. This monorepo contains all the applications and shared packages needed to run the BYLT Basics e-commerce ecosystem.

## 🏗️ Architecture Overview

BYLT Basics uses a modern microservices architecture with the following components:

- **Next.js Frontend**: Modern React application with server components and client-side interactivity
- **Express.js API**: RESTful API built with clean architecture principles
- **Shared Packages**: Common types and schemas used across applications
- **PostgreSQL Database**: Managed with Drizzle ORM for type safety

## 📁 Project Structure

```
byltbasics-ecom/
├── apps/
│   ├── nextjs-app/     # React 19 + Next.js 15 frontend application
│   │   ├── src/        # Frontend source code with feature-based organization
│   │   └── README.md   # Frontend documentation
│   │
│   ├── express-app/    # Express.js API with clean architecture
│   │   ├── src/        # Backend source code with layered architecture
│   │   └── README.md   # API documentation
│   │
│   └── client-ui/      # Legacy React client
│
├── packages/           # Shared packages
│   ├── schemas/        # Zod schemas for validation
│   └── types/          # TypeScript type definitions
│
├── pnpm-workspace.yaml # Workspace configuration
└── package.json        # Root package.json with workspace scripts
```

## 🚀 Key Features

- **Full-Stack TypeScript**: End-to-end type safety across frontend and backend
- **Modern Authentication**: JWT-based auth with refresh tokens and secure cookie management
- **Clean Architecture**: Domain-driven design with proper separation of concerns
- **Responsive UI**: Mobile-first design with modern UI components
- **API Integration**: Type-safe API communication with shared schemas
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Monorepo Structure**: Streamlined development with shared code and tooling

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or later (v20.x recommended)
- **pnpm**: v8.x or later
- **PostgreSQL**: v16.x (or access to a PostgreSQL database)
- **Git**: Latest version recommended

### Environment Setup

1. **Clone the repository**:

```bash
git clone https://github.com/byltbasics/byltbasics-ecom.git
cd byltbasics-ecom
```

2. **Install dependencies**:

```bash
pnpm install
```

3. **Set up environment variables**:

```bash
# Copy the example env files
cp apps/nextjs-app/.env.example apps/nextjs-app/.env.local
cp apps/express-app/.env.example apps/express-app/.env
```

4. **Set up the database**:

```bash
# Run database migrations
pnpm db:migrate

# Seed the database with initial data
pnpm db:seed
```

### Development Workflow

```bash
# Start the Next.js frontend in development mode
pnpm dev:client

# Start the Express API in development mode
pnpm dev:api

# Start all applications in development mode
pnpm dev

# Run TypeScript type checking
pnpm typecheck

# Run linting for all packages
pnpm lint
```

### Building for Production

```bash
# Build shared packages
pnpm -r --filter "./packages/**" build

# Build the Next.js frontend
pnpm build:client

# Build the Express API
pnpm build:api

# Build all applications
pnpm build
```

## 📊 Database Management

The project uses Drizzle ORM to interact with PostgreSQL:

```bash
# Generate migrations from schema changes
pnpm db:generate

# Run migrations
pnpm db:migrate

# Seed the database
pnpm db:seed

# Push schema changes directly (dev only)
pnpm db:push
```

## 🤝 Development Guidelines

### Directory Structure

Each application follows its own internal structure, documented in its respective README.md file:

- [Next.js Frontend Structure](/apps/nextjs-app/README.md)
- [Express API Structure](/apps/express-app/README.md)

### Authentication Flow

The platform implements a secure authentication system:

1. User registers or logs in through the Next.js frontend
2. Express API validates credentials and issues JWT tokens
3. Access token is stored in memory, refresh token in HTTP-only cookies
4. Protected routes require valid tokens for access
5. Tokens automatically refresh when needed

### Type-Safe API Development

API endpoints and data models are defined with shared types:

1. Define schemas in `packages/schemas`
2. Generate TypeScript types from schemas
3. Use types in both frontend and backend
4. Validate request/response data against schemas

## 🧪 Testing

```bash
# Run tests for all packages
pnpm test

# Run tests with coverage reports
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch
```

## 📝 Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```bash
# Use the interactive commit wizard
pnpm commit
```

The commit format follows the pattern: `type(scope): description`

Common types:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or modifying tests
- `chore`: Changes to the build process or auxiliary tools

## 🛡️ Code Quality Tools

- **TypeScript**: Static type checking with strict configuration
- **ESLint**: Advanced linting with custom rule sets
  - Uses `@antfu/eslint-config` as a base
  - Enforces TypeScript types with `type` instead of `interface`
  - Enforces kebab-case for filenames
  - Sorts imports with `perfectionist` plugin
  - Custom stylistic rules
- **Husky**: Git hooks for pre-commit and commit message validation
- **lint-staged**: Automatic linting of staged files before commits
- **Commitlint**: Validation of commit messages
- **CI/CD**: Automated testing and deployment pipeline

## 📚 Documentation

- [BRANCHING_STRATEGY.md](BRANCHING_STRATEGY.md) - Git workflow guidelines
- [Next.js Frontend Documentation](/apps/nextjs-app/README.md)
- [Express API Documentation](/apps/express-app/README.md)

## 📜 License

Proprietary - BYLT Basics - Copyright © 2025
