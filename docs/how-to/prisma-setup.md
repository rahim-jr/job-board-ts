# How-to: Configure Prisma

This guide explains the Prisma setup used in this repository.

## Why this project is configured this way

The app uses Prisma with the `@prisma/adapter-pg` adapter and a shared `pg` connection pool (`lib/prisma.ts`).

Because of this:
- runtime DB access comes from the adapter-backed Prisma client
- migrations and CLI commands still use `DATABASE_URL`

## 1. Set `DATABASE_URL`

Example:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/jobboard?schema=public"
```

## 2. Apply schema

For local development (fastest):

```bash
pnpm db:push
```

For migration-based workflow:

```bash
pnpm db:migrate
```

For production rollout:

```bash
pnpm db:migrate:deploy
```

## 3. Generate Prisma client

Usually generated automatically on install (`postinstall`), but can be run manually:

```bash
pnpm db:generate
```

## 4. Inspect data (optional)

```bash
pnpm db:studio
```

## Troubleshooting

### `Cannot connect to database`

- check Postgres is running
- verify `DATABASE_URL`
- verify host/port/user/password/database

### Prisma adapter/client errors

- ensure both `@prisma/adapter-pg` and `pg` are installed
- confirm `lib/prisma.ts` constructs `PrismaClient` with `adapter`

### Migration issues

- Prisma CLI reads `DATABASE_URL` directly
- ensure env is loaded before running migration commands
