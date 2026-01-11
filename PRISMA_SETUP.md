# Prisma Configuration Setup Guide

This project uses **Prisma 7** with PostgreSQL and the adapter pattern for database connections.

## Prisma 7 Configuration

### Key Changes in Prisma 7:

- The `url` property is no longer in the `schema.prisma` datasource block
- Connection strings are handled via the adapter in the PrismaClient constructor
- Migrations use environment variables directly

## Setup Steps

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Connection (Required)
DATABASE_URL="postgresql://user:password@localhost:5432/jobboard?schema=public"

# NextAuth Configuration (Required)
AUTH_SECRET="your-secret-key-here"
# Generate with: openssl rand -base64 32
AUTH_URL="http://localhost:3000"

# OAuth Providers (Required for authentication)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe (Required for payments)
STRIPE_SECRET_KEY="your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"

# UploadThing (Required for file uploads)
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"

# Resend (Optional - for emails)
RESEND_API_KEY="your-resend-api-key"
```

### 2. Database Setup

#### Option A: Using Prisma Migrate (Recommended for Production)

```bash
# Create and apply migrations
npm run db:migrate

# Or deploy existing migrations
npm run db:migrate:deploy
```

#### Option B: Using Prisma DB Push (Quick for Development)

```bash
# Push schema to database (no migration history)
npm run db:push
```

### 3. Generate Prisma Client

The Prisma client is automatically generated after `npm install` via the `postinstall` script, but you can also run it manually:

```bash
npm run db:generate
```

### 4. View Database (Optional)

Open Prisma Studio to view and edit your database:

```bash
npm run db:studio
```

## Available Scripts

- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database (development)
- `npm run db:migrate` - Create and apply a new migration
- `npm run db:migrate:deploy` - Apply pending migrations (production)
- `npm run db:studio` - Open Prisma Studio GUI

## How It Works

### Prisma Client Configuration

The Prisma client is configured in `lib/prisma.ts`:

1. **Connection Pool**: Creates a PostgreSQL connection pool using `pg`
2. **Adapter**: Uses `@prisma/adapter-pg` to connect Prisma to the pool
3. **Client**: Initializes PrismaClient with the adapter

```typescript
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
});
```

### Why No URL in Schema?

In Prisma 7, the connection URL is handled by:

- The adapter in the PrismaClient constructor (for runtime queries)
- Environment variables for migrations (`prisma migrate` reads `DATABASE_URL`)

## Troubleshooting

### Error: "MissingSecret"

- Set `AUTH_SECRET` in your `.env` file
- Generate a secure secret: `openssl rand -base64 32`

### Error: "Cannot connect to database"

- Verify `DATABASE_URL` is correct in `.env`
- Ensure PostgreSQL is running
- Check database credentials

### Error: "PrismaClient needs to be constructed with adapter"

- Ensure `@prisma/adapter-pg` and `pg` are installed
- Verify the adapter is passed to PrismaClient constructor

### Migration Issues

- For migrations, Prisma reads `DATABASE_URL` from environment
- Ensure the variable is set before running migration commands

## Database Schema

The schema includes:

- **User** - Authentication and user profiles
- **Company** - Company information
- **Jobseeker** - Job seeker profiles
- **Jobpost** - Job listings
- **SavedJobPost** - User saved jobs
- **Account, Session, VerificationToken** - NextAuth tables

See `prisma/schema.prisma` for the complete schema definition.
