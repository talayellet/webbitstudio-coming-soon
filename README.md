# WebbitStudio

A modern full-stack monorepo built with NX, featuring a React frontend and Next.js backend with end-to-end type safety.

## 📑 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#️-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Available Commands](#-available-commands)
  - [Development](#development)
  - [Building](#building)
  - [Testing](#testing)
  - [Linting & Formatting](#linting--formatting)
  - [Code Generation](#code-generation)
  - [Moving/Renaming Libraries](#movingrenaming-libraries)
  - [Removing Libraries](#removing-libraries)
  - [Prisma Commands](#prisma-commands)
  - [NX Utilities](#nx-utilities)
- [Architecture Decisions](#️-architecture-decisions)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Links](#-links)

---

## 🚀 Tech Stack

### Frontend

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **HeadlessUI** - Unstyled, accessible UI components
- **Zustand** - Lightweight state management
- **React Query** - Server state management
- **Zod** - Schema validation
- **React Router** - Client-side routing

### Backend

- **Next.js 16** - React framework with App Router
- **tRPC** - End-to-end type-safe APIs
- **Prisma** - Type-safe ORM
- **NextAuth.js** - Authentication
- **PostgreSQL** - Database (recommended)

### Testing

- **Vitest** - Unit testing
- **Playwright** - E2E testing
- **Testing Library** - React component testing

### Monorepo & Tooling

- **NX** - Monorepo management and build system
- **Yarn Workspaces** - Package management
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
webbitstudio-coming-soon/
├── apps/
│   ├── web/              # React frontend (Vite)
│   ├── web-e2e/          # Frontend E2E tests (Playwright)
│   ├── backend/          # Next.js API backend
│   └── backend-e2e/      # Backend E2E tests (Playwright)
├── libs/
│   ├── shared-types/     # Shared TypeScript types
│   ├── ui-components/    # Shared React components
│   └── utils/            # Shared utilities
├── .nx/                  # NX cache
├── node_modules/         # Dependencies
├── nx.json               # NX configuration
├── package.json          # Root package.json
├── tsconfig.base.json    # Base TypeScript config
└── yarn.lock             # Dependency lock file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- Yarn 1.22+
- PostgreSQL (for production)

### Installation

```bash
# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env.local
```

### Environment Setup

Create a `.env.local` file in the root and configure:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/webbitstudio"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Add other environment variables as needed
```

Initialize Prisma:

```bash
# Generate Prisma client (when you have defined your schema)
cd apps/backend
npx prisma generate
cd ../..

# Run migrations (when you have a database set up)
cd apps/backend
npx prisma migrate dev --name migration_name
cd ../..
```

## 📜 Available Commands

### Development

```bash
# Serve frontend (localhost:4200)
yarn nx serve web

# Serve backend (localhost:3000)
yarn nx dev backend

# Serve both simultaneously (in separate terminals recommended)
# Terminal 1:
yarn nx serve web

# Terminal 2:
yarn nx dev backend
```

### Building

```bash
# Build frontend
yarn nx build web

# Build backend
yarn nx build backend

# Build all projects
yarn nx run-many --target=build --all
```

### Testing

```bash
# Run unit tests for frontend
yarn nx test web

# Run E2E tests for frontend
yarn nx e2e web-e2e

# Run E2E tests for backend
yarn nx e2e backend-e2e

# Run all tests
yarn nx run-many --target=test --all
```

### Linting & Formatting

```bash
# Lint all projects
yarn nx run-many --target=lint --all

# Lint specific project
yarn nx lint web
yarn nx lint backend

# Format code with Prettier
yarn prettier --write .
```

### Code Generation

```bash
# Generate a new library
yarn nx g @nx/js:lib my-lib --directory=libs/my-lib

# Generate a new React component library
yarn nx g @nx/react:lib my-components --directory=libs/my-components

# Generate a new Next.js app
yarn nx g @nx/next:app my-app --directory=apps/my-app
```

### Moving/Renaming Libraries

```bash
# Move/rename a library or app (use project name without @webbitstudio/ prefix for destination)
yarn nx g @nx/workspace:move --projectName=@webbitstudio/utils --destination=shared-utils

# Example: Move library to different folder
yarn nx g @nx/workspace:move --projectName=@webbitstudio/utils --destination=common/utils
```

**Important:** Always use the full project name (with `@webbitstudio/` prefix) for `--projectName`, but use just the new name (without prefix) for `--destination`.

### Removing Libraries

```bash
# Remove a library or app
yarn nx g @nx/workspace:remove @webbitstudio/project-name

# If a project has dependencies, remove them first
# Example: To remove web app, first remove web-e2e
yarn nx g @nx/workspace:remove @webbitstudio/web-e2e
yarn nx g @nx/workspace:remove @webbitstudio/web

# Or use force flag to skip dependency checks (use with caution!)
yarn nx g @nx/workspace:remove @webbitstudio/web --forceRemove
```

This will:

- Delete the library/app folder
- Remove from tsconfig paths
- Update any imports in other projects

### Prisma Commands

```bash
# All Prisma commands should be run from the backend directory

# Generate Prisma client (after defining your schema)
cd apps/backend
npx prisma generate
cd ../..

# Create a migration
cd apps/backend
npx prisma migrate dev --name migration_name
cd ../..

# Open Prisma Studio
cd apps/backend
npx prisma studio
cd ../..

# Reset database
cd apps/backend
npx prisma migrate reset
cd ../..
```

### NX Utilities

```bash
# Show project graph
yarn nx graph

# Show all projects
yarn nx show projects

# Show project details
yarn nx show project @webbitstudio/web

# Clear NX cache
yarn nx reset
```

## 🏗️ Architecture Decisions

### Why NX Monorepo?

- **Code Sharing**: Share types, components, and utilities across apps
- **Consistent Tooling**: Unified build, test, and lint configuration
- **Dependency Graph**: Understand project relationships
- **Incremental Builds**: Only rebuild what changed

### Why tRPC?

- **Type Safety**: End-to-end type safety from backend to frontend
- **No Code Generation**: Types are inferred automatically
- **Great DX**: Autocomplete and type checking in your IDE

### Why Zustand?

- **Lightweight**: Minimal boilerplate compared to Redux
- **Simple API**: Easy to learn and use
- **TypeScript First**: Excellent TypeScript support
- **No Context Provider**: Works outside React components

## 🚢 Deployment

### Frontend (GitHub Pages / Cloudflare Pages)

```bash
# Build frontend
yarn nx build web

# Output: apps/web/dist
```

**GitHub Pages Deployment:**

1. The built files are in `apps/web/dist`
2. Push to your `gh-pages` branch or configure GitHub Pages to use the dist folder
3. The site will be available at the configured custom domain (webbitstudio.com)

**Cloudflare Pages Deployment:**

1. The repository is connected to Cloudflare Pages
2. Build command: `yarn nx build web`
3. Output directory: `apps/web/dist`
4. The DNS is already configured through Cloudflare

### Backend - TBD

For the backend API, you'll need a Node.js hosting service. Recommended options:

- **Vercel** (easiest for Next.js)
- **Railway** (simple, Node.js friendly)
- **Fly.io** (full control)
- **DigitalOcean App Platform**
- **AWS/Google Cloud** (if you need more infrastructure)

```bash
# Build backend
yarn nx build backend

# Output: apps/backend/.next
```

### Custom Domain Setup

Since you're using Namecheap + Cloudflare:

1. ✅ Domain registered with Namecheap (webbitstudio.com)
2. ✅ DNS managed by Cloudflare
3. Configure your DNS records in Cloudflare:
   - Frontend: Point to GitHub Pages or Cloudflare Pages
   - Backend API: Point to your backend hosting service

## 📝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

**Proprietary and Confidential**

Copyright © 2024 WebbitStudio. All rights reserved.

This software and associated documentation files are proprietary and confidential. Unauthorized copying, distribution, modification, public display, or public performance of this software, via any medium, is strictly prohibited without the express written consent of WebbitStudio.

For licensing inquiries, please contact: info@webbitstudio.com

## 🔗 Links

### Core Technologies

- [NX Documentation](https://nx.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Frontend

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HeadlessUI Documentation](https://headlessui.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Router Documentation](https://reactrouter.com)
- [Zod Documentation](https://zod.dev)

### Backend

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)

### Testing

- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
- [React Testing Library](https://testing-library.com/react)

### Tools

- [Yarn Documentation](https://yarnpkg.com)
- [ESLint Documentation](https://eslint.org)
- [Prettier Documentation](https://prettier.io)
