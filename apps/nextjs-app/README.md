# ByltBasics E-commerce Frontend

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.7-06B6D4)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.76.1-FF4154)](https://tanstack.com/query)
[![Last Updated](https://img.shields.io/badge/Last_Updated-May_2025-green)](/)

</div>

Modern, scalable frontend for the ByltBasics e-commerce platform, built with Next.js 15, React 19, and TypeScript. This frontend application provides a seamless shopping experience with advanced authentication, product browsing, and checkout capabilities.

## 🌟 Features

- **Authentication & User Management**

  - Secure registration with email validation
  - Login system with persistent sessions using cookies
  - Password recovery flow
  - User profile management
  - Protected routes with authentication state

- **Modern UI Components**

  - Customizable button components with variants
  - Form inputs with validation state integration
  - Toast notifications for user feedback
  - Responsive design with Tailwind CSS
  - Accessible components based on Radix UI primitives

- **State Management**

  - Zustand for global state management
  - React Query for data fetching and caching
  - Cookie-based authentication persistence
  - Form state management with React Hook Form

- **Performance Optimized**
  - Server components for improved initial load time
  - Client components only where interactivity is needed
  - Turbopack for faster development experience
  - Optimized API request handling

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/) with [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Fetching**: [TanStack React Query 5](https://tanstack.com/query) for server state management
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **HTTP Client**: [Axios](https://axios-http.com/) with custom interceptors
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) with [Immer](https://immerjs.github.io/immer/) for immutable state
- **Styling**: SCSS Modules with Tailwind utility classes
- **UI Components**: Custom components based on [Radix UI](https://www.radix-ui.com/) primitives
- **Authentication**: Cookie-based auth with [js-cookie](https://github.com/js-cookie/js-cookie)
- **Notifications**: User feedback with [react-hot-toast](https://react-hot-toast.com/)

## 📋 Prerequisites

- Node.js 18.17.0 or later
- PNPM 8.x or later
- Access to the ByltBasics API (running locally or remote)
- Environment variables configured (see [Environment Setup](#-environment-setup))

## 🛠️ Getting Started

### Installation

```bash
# From the monorepo root
pnpm install

# Or from the nextjs-app directory
cd apps/nextjs-app
pnpm install
```

### Environment Setup

Create a `.env.local` file in the `apps/nextjs-app` directory with the following variables:

```
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1

# Authentication
NEXT_PUBLIC_AUTH_COOKIE_LIFETIME=7
```

### Development

```bash
# From the monorepo root
pnpm dev:client

# Or from the nextjs-app directory
cd apps/nextjs-app
pnpm dev
```

This starts the development server with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Building for Production

```bash
# From the monorepo root
pnpm build:client

# Or from the nextjs-app directory
cd apps/nextjs-app
pnpm build
```

### Running Production Build

```bash
# From the monorepo root
pnpm start:client

# Or from the nextjs-app directory
cd apps/nextjs-app
pnpm start
```

## 🏗️ Project Structure

```
nextjs-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth-related routes
│   │   │   ├── login/          # Login page
│   │   │   └── register/       # Registration page
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Home page
│   │
│   ├── components/             # Reusable UI components
│   │   ├── global/             # Application-specific components
│   │   └── ui/                 # Basic UI primitives
│   │
│   ├── constants/              # Application constants
│   │   └── env.constants.ts    # Environment variables
│   │
│   ├── features/               # Feature modules
│   │   └── auth/               # Authentication feature
│   │       ├── components/     # Auth-specific components
│   │       │   └── forms/      # Authentication forms
│   │       │       ├── login/  # Login form components
│   │       │       └── register/# Register form components
│   │       ├── hooks/          # Auth-related hooks
│   │       │   ├── use-login.ts# Login hook with React Query
│   │       │   └── use-register.ts# Register hook with React Query
│   │       ├── pages/          # Page components
│   │       │   ├── login/      # Login page component
│   │       │   └── register/   # Register page component
│   │       ├── schemas/        # Validation schemas
│   │       │   ├── login.schema.ts  # Login validation
│   │       │   └── register.schema.ts# Register validation
│   │       └── services/       # API services
│   │           └── auth.services.ts # Authentication API calls
│   │
│   ├── lib/                    # Utility libraries
│   │   └── axios.lib.ts        # Axios instance with interceptors
│   │
│   ├── providers/              # React providers
│   │   └── react-query.provider.tsx # TanStack Query provider
│   │
│   ├── stores/                 # Global state stores
│   │   └── user-auth.store.ts  # Authentication state management
│   │
│   └── utils/                  # Utility functions
│       ├── async-try-catch.ts  # Async error handling
│       └── auth-cookies.util.ts# Cookie management utilities
│
├── public/                     # Static files
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🔄 Authentication Architecture

The frontend implements a comprehensive authentication system:

- **State Management**: Zustand store with Immer middleware for immutable updates
- **Persistence**: Cookie-based authentication with token storage
- **API Integration**: Secure token handling with HTTP-only cookies
- **User Experience**: Toast notifications for feedback and error handling

### Authentication Flow

1. User provides credentials via login form
2. Form data is validated with Zod schemas
3. Credentials are sent to API using axios
4. On success, auth tokens are stored in cookies
5. User state is updated in the Zustand store
6. React Query invalidates and refetches relevant queries
7. User is redirected to the appropriate page

## 🔌 Integration with API

The frontend integrates with the ByltBasics Express.js API for all data operations:

- **Service Layer**: API calls are organized under `src/features/*/services/*`
- **Data Fetching**: React Query hooks manage caching, refetching, and invalidation
- **Error Handling**: Centralized error handling with the `asyncTryCatch` utility
- **State Synchronization**: Automatic invalidation of related queries on mutations

## 🧪 Development Guidelines

### Adding a New Feature

1. Create a new directory under `src/features/`
2. Implement components, services, and hooks specific to the feature
3. Create page components as needed
4. Add to the App Router (under `src/app/`)
5. Update relevant global state if necessary

### Component Structure

- **Container Components**: Handle data fetching and business logic
- **Presentational Components**: Focus on rendering UI based on props
- **Hooks**: Extract reusable logic into custom hooks
- **Services**: Encapsulate API calls and data transformation

### Styling Approach

- Use SCSS modules for component-specific styles
- Use Tailwind utility classes for common styling needs
- Follow the established design system for consistency
- Implement responsive designs using Tailwind breakpoints

### Form Validation Best Practices

- Define Zod schemas for form validation in dedicated schema files
- Use React Hook Form with Zod resolver for type-safe forms
- Handle validation errors with toast notifications and inline feedback
- Maintain consistent UX patterns across all forms

## 🔄 CI/CD Pipeline

The application is set up with CI/CD pipelines that:

- Run linting and type checking on every pull request
- Execute unit and integration tests
- Build the application to verify no build errors exist
- Deploy to staging environments for review
- Promote to production after approval

## 🔍 Monitoring & Analytics

- Runtime error tracking with error boundaries
- Performance monitoring with custom metrics
- User behavior analytics for UX improvements

## 📚 Documentation & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [Zod Documentation](https://zod.dev)
- [Internal API Documentation](http://localhost:5000/api-docs) (when running locally)

## 📝 License

ISC
