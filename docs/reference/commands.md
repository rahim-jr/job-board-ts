# Reference: Commands

Scripts from `package.json`:

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start Next.js dev server (Webpack mode) |
| `pnpm dev:turbo` | Start dev server with Turbopack |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start built app |
| `pnpm lint` | Run Next.js ESLint |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:push` | Push schema directly to DB (no migration files) |
| `pnpm db:migrate` | Create/apply dev migration |
| `pnpm db:migrate:deploy` | Apply pending migrations in deployment |
| `pnpm db:studio` | Open Prisma Studio |
| `pnpm db:seed` | Run Prisma seed command |

## Important notes

- `pnpm postinstall` runs `prisma generate` automatically.
- No dedicated `test` script is currently defined.
