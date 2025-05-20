# ByltBasics E-commerce Frontend

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.7-06B6D4)](https://tailwindcss.com/)

Modern, scalable frontend for the ByltBasics e-commerce platform, built with Next.js 15, React 19, and TypeScript.

## 🌟 Features

- **User Authentication**

  - Secure registration and login flows
  - Form validation with Zod schemas
  - Error handling with toast notifications

- **Modern UI Components**

  - Customizable button components with variants
  - Form inputs with validation state integration
  - Responsive design with Tailwind CSS

- **Performance Optimized**
  - Server components for improved initial load time
  - Client components only where interactivity is needed
  - Turbopack for faster development experience

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI**: [React 19](https://react.dev/) with [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [TanStack React Query](https://tanstack.com/query)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Styling**: SCSS Modules with Tailwind
- **UI Components**: Custom components based on [Radix UI](https://www.radix-ui.com/)

## 📋 Prerequisites

- Node.js 18.17.0 or later
- PNPM 8.x or later

## 🛠️ Getting Started

### Installation

```bash
# From the monorepo root
pnpm install

# Or from the nextjs-app directory
cd apps/nextjs-app
pnpm install
```

### Development

```bash
# From the monorepo root
pnpm dev:client

# Or from the nextjs-app directory
pnpm dev
```

This starts the development server with Turbopack. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Building for Production

```bash
# From the monorepo root
pnpm build:client

# Or from the nextjs-app directory
pnpm build
```

### Running Production Build

```bash
# From the monorepo root
pnpm start:client

# Or from the nextjs-app directory
pnpm start
```

## 🏗️ Project Structure

```
nextjs-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth-related routes
│   │   │   └── register/       # Registration page
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Home page
│   │
│   ├── components/             # Reusable UI components
│   │   ├── global/             # Application-specific components
│   │   └── ui/                 # Basic UI primitives
│   │
│   ├── constants/              # Application constants
│   │
│   ├── features/               # Feature modules
│   │   └── auth/               # Authentication feature
│   │       ├── components/     # Auth-specific components
│   │       ├── hooks/          # Auth-related hooks
│   │       ├── pages/          # Page components
│   │       ├── schemas/        # Validation schemas
│   │       └── services/       # API services
│   │
│   ├── lib/                    # Utility libraries
│   │
│   ├── providers/              # React context providers
│   │
│   └── utils/                  # Utility functions
│
├── public/                     # Static files
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🔄 Integration with API

The frontend integrates with the ByltBasics Express.js API for all data operations. The integration is handled through:

- API services under `src/features/*/services/*`
- React Query hooks for data fetching and caching
- Axios interceptors for request/response handling

## 🧪 Development Guidelines

### Adding a New Feature

1. Create a new directory under `src/features/`
2. Implement components, services, and hooks specific to the feature
3. Create page components as needed
4. Update routes in the App Router

### Styling Components

- Use SCSS modules for component-specific styles
- Use Tailwind utility classes for common styling needs
- Follow the established design system for consistency

### Form Validation

- Define Zod schemas for form validation
- Use React Hook Form with Zod resolver
- Handle validation errors with meaningful user feedback

## 🔄 CI/CD

The application is set up with CI/CD pipelines that:

- Run linting and type checking on every pull request
- Build the application to verify no build errors exist
- Deploy to staging environments for review

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

## 📝 License

ISC
