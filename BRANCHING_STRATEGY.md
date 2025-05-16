# Git Branching Strategy

This document outlines the branching strategy for the ByltBasics E-commerce project.

## Main Branches

- **main**: Production-ready code that has been thoroughly tested and is ready for deployment.
- **develop**: Integration branch where completed features are merged and tested together.

## Feature Branch Naming Convention

All feature branches should follow these naming conventions:
- `feature/[feature-name]` - For new features
- `bugfix/[bug-name]` - For bug fixes
- `hotfix/[hotfix-name]` - For critical fixes to production
- `release/[version]` - For release preparation

## Current Implementation Plan

### Phase 1: User Management Features
- `feature/user-create` - Implement user creation functionality
- `feature/user-read` - Implement user data retrieval
- `feature/user-update` - Implement user profile updates
- `feature/user-delete` - Implement user account deletion
- `feature/user-profile` - Implement user profile views and management

### Phase 2: Authentication Features
- `feature/auth-login` - Implement login functionality
- `feature/auth-signup` - Implement signup process
- `feature/auth-password-reset` - Implement password reset flow
- `feature/auth-email-verification` - Implement email verification
- `feature/auth-oauth-integration` - Implement OAuth authentication options

## Branch Workflow

1. Create new feature branches from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/feature-name
   ```

2. Regularly commit changes to your feature branch
   ```bash
   git add .
   git commit -m "feat: descriptive message"
   ```

3. Push feature branch to remote repository
   ```bash
   git push -u origin feature/feature-name
   ```

4. When feature is complete, create a Pull Request to merge into `develop`

5. After testing in `develop`, merge to `main` for production release
   ```bash
   git checkout main
   git pull origin main
   git merge develop
   git push origin main
   ```

## Best Practices

1. Keep feature branches short-lived (1-2 weeks max)
2. Regularly pull from `develop` into your feature branch to stay up-to-date
3. Use descriptive commit messages following the Conventional Commits format
4. Always create Pull Requests for code review before merging
5. Delete feature branches after merging

## Commit Message Format

We use the Conventional Commits specification for commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types include:
- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code changes that neither fix a bug nor add a feature
- perf: Performance improvements
- test: Adding or modifying tests
- chore: Changes to the build process or auxiliary tools
