# BYLT Basics Monorepo

This is a monorepo for the BYLT Basics e-commerce project. The monorepo is managed using pnpm workspaces.

## Project Structure

```
byltbasics-ecom/
├── apps/
│   ├── nextjs-app/     # BYLT Basics Next.js frontend application
│   └── express-app/    # Express.js API (if applicable)
├── packages/           # Shared packages
│   ├── ui/             # Shared UI components
│   ├── utils/          # Shared utilities
│   └── config/         # Shared configuration
├── pnpm-workspace.yaml # Workspace configuration
└── package.json        # Root package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies for all packages
pnpm install
```

### Development

```bash
# Start the Next.js frontend in development mode
pnpm dev:client

# Start all applications in development mode (if you have multiple apps)
pnpm dev
```

### Building

```bash
# Build the Next.js frontend
pnpm build:client

# Build all applications
pnpm build
```

## Commit Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.
You can use the `pnpm commit` command to create a commit with a standardized message format.

## Code Quality Tools

- **ESLint**: Linting JavaScript and TypeScript files
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Run linters on staged files
- **Commitlint**: Validate commit messages

## License

Proprietary - BYLT Basics
