# BYLT Basics Monorepo

This is a monorepo for the BYLT Basics e-commerce project. The monorepo is managed using pnpm workspaces.

## Project Structure

```
byltbasics-ecom/
├── apps/
│   ├── nextjs-app/     # BYLT Basics Next.js frontend application
│   └── express-app/    # Express.js API
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

- **ESLint**: Linting JavaScript and TypeScript files with custom configurations
  - Uses `@antfu/eslint-config` as a base with custom rules
  - Enforces TypeScript types with `type` instead of `interface`
  - Enforces kebab-case for filenames
  - Sorts imports with `perfectionist` plugin
  - Custom stylistic choices like double quotes and semicolons
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit and commit message validation
- **lint-staged**: Run linters automatically on staged files before commits
- **Commitlint**: Validate commit messages using conventional commit format

## License

Proprietary - BYLT Basics
