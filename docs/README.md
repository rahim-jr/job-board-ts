# Job Board SaaS Platform Docs

This directory contains all project documentation.

## Project Snapshot

`job-board-platform` is a multi-tenant job board built with Next.js App Router, Prisma, PostgreSQL, and Auth.js.

Core capabilities:
- OAuth login with GitHub/Google
- Onboarding flows for companies and job seekers
- Paid job posting flow through Stripe Checkout
- Public job discovery with filters and pagination
- Saved jobs for authenticated users
- Background jobs with Inngest (job expiration + email workflow)

## Quick Start

1. Install dependencies: `pnpm install`
2. Start PostgreSQL: `docker compose up -d db`
3. Copy env file: `cp .env.example .env`
4. Sync schema: `pnpm db:push`
5. Start app: `pnpm dev`

## Documentation Map

### Tutorials
- [Local development quickstart](./tutorials/getting-started-local.md)

### How-to guides
- [Prisma setup and migrations](./how-to/prisma-setup.md)

### Reference
- [Environment variables](./reference/environment-variables.md)
- [Commands and scripts](./reference/commands.md)
- [Routes and access control](./reference/routes-and-access.md)
- [Database schema](./reference/database-schema.md)

### Explanation
- [Architecture overview](./explanation/architecture.md)

## Current Constraints

- UploadThing is intentionally stubbed right now (`lib/uploadthing.ts`, `app/api/uploadthing/core.ts`) due Turbopack compatibility issues. Upload UI renders but upload behavior is not functional until the real UploadThing integration is restored.
- No `test` script is defined in `package.json` yet.
