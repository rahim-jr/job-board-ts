# Tutorial: Run the Project Locally

This tutorial is for developers who want a working local instance of the app.

## Outcome

By the end, you will be able to:
- start the app at `http://localhost:3000`
- log in via OAuth
- browse job listings

## Prerequisites

- Node.js 18+
- pnpm
- Docker (recommended for PostgreSQL)

## 1. Install dependencies

```bash
pnpm install
```

## 2. Start PostgreSQL

Use the provided Docker service:

```bash
docker compose up -d db
```

This starts PostgreSQL 16 on `localhost:5432` using the credentials defined in `docker-compose.yml`.

## 3. Configure environment variables

```bash
cp .env.example .env
```

Set values in `.env`.

Minimum required for a usable local setup:
- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_URL`
- at least one OAuth provider pair:
  - `GITHUB_CLIENT_ID` + `GITHUB_CLIENT_SECRET`, or
  - `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET`

To use paid posting flow, also set:
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_URL`

## 4. Sync the database schema

```bash
pnpm db:push
```

If you prefer migrations instead of direct sync:

```bash
pnpm db:migrate
```

## 5. Start development server

```bash
pnpm dev
```

Open `http://localhost:3000`.

## 6. Basic smoke test

1. Visit `/login` and authenticate.
2. Complete `/onboarding`.
3. Visit `/` and verify job list page loads.
4. If Stripe is configured, create a post from `/post-job` and complete checkout.

## Troubleshooting

### Database connection errors

- Confirm Postgres container is healthy: `docker compose ps`
- Re-check `DATABASE_URL`

### OAuth sign-in fails

- Verify provider credentials
- Ensure callback URL in provider dashboard matches local domain (for example, `http://localhost:3000/api/auth/callback/github`)

### Job posting fails with Stripe errors

- Ensure `STRIPE_SECRET_KEY` is set
- Ensure `NEXT_PUBLIC_URL` is set to your current public/local URL
