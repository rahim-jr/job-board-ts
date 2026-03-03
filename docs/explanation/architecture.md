# Explanation: Architecture Overview

## High-level structure

- Framework: Next.js App Router
- Runtime model: server components + server actions
- Database: PostgreSQL via Prisma + `@prisma/adapter-pg`
- Auth: Auth.js (`next-auth` v5 beta) with Prisma adapter
- Payments: Stripe Checkout + webhook activation
- Background jobs: Inngest functions

## Core flows

### 1. Auth and onboarding

1. User signs in via GitHub or Google.
2. `/onboarding` collects either company or jobseeker profile.
3. `User.userType` and `onboardingCompleted` determine the user path.

### 2. Job posting and monetization

1. Company submits post through server action (`CreateJobPost`).
2. A draft post is created first (`status = DRAFT`).
3. Stripe Checkout session is created based on selected listing duration.
4. Stripe webhook (`/api/webhook/stripe`) marks the post as `ACTIVE` after successful payment.

### 3. Job lifecycle automation

- Inngest `job/created` event schedules expiration after N days.
- Expiration function sets job status to `EXPIRED`.
- Deletion flow sends `job/cancel.expiration` to cancel scheduled expiration.

### 4. Discovery and saved jobs

- Home listing queries only `ACTIVE` jobs.
- Filters are URL-driven (`jobTypes`, `location`, `page`).
- Authenticated users can save/unsave posts via server actions.

## Security and reliability patterns

- Zod schemas validate key form payloads on server actions.
- Arcjet rules are applied where configured; when `ARCJET_KEY` is missing, the app uses a no-op fallback.
- Prisma queries scope critical operations to authenticated owner IDs.

## Current technical tradeoffs

- UploadThing integration is temporarily replaced by stubs to avoid Turbopack dependency conflicts.
- Automated tests are not configured yet; validation currently depends on linting/manual checks.
