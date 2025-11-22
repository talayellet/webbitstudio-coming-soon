# WebbitStudio

A modern full-stack monorepo built with NX, featuring a React frontend and Next.js backend with end-to-end type safety.

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
# Generate Prisma client
yarn nx run @webbitstudio/backend:prisma:generate

# Run migrations (when you have a database set up)
yarn nx run @webbitstudio/backend:prisma:migrate
```

## 📜 Available Commands

### Development

```bash
# Serve frontend (localhost:4200)
yarn nx serve web

# Serve backend (localhost:3000)
yarn nx dev backend

# Serve both simultaneously
yarn nx serve web & yarn nx dev backend
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

### Prisma Commands

```bash
# Generate Prisma client
yarn prisma generate

# Create a migration
yarn prisma migrate dev --name migration_name

# Open Prisma Studio
yarn prisma studio

# Reset database
yarn prisma migrate reset
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

### Frontend (Vercel/Netlify)

```bash
# Build frontend
yarn nx build web

# Output: apps/web/dist
```

### Backend (Vercel/Railway/Fly.io)

```bash
# Build backend
yarn nx build backend

# Output: apps/backend/.next
```

## 📝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

MIT

## 🔗 Links

- [NX Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
