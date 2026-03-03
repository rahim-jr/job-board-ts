# Reference: Routes and Access

## Web routes

### Public

- `/` - home page, job listings, filters (`page`, `jobTypes`, `location` query params)
- `/job/[jobId]` - job details for `ACTIVE` jobs
- `/login` - OAuth login page

### Requires authenticated user

- `/onboarding` - onboarding flow (redirects to `/` if already completed)
- `/post-job` - create paid job listing
- `/my-jobs` - company job management list
- `/my-jobs/[jobId]/edit` - edit own job post
- `/my-jobs/[jobId]/delete` - delete own job post
- `/favourites` - saved jobs list
- `/payment/success` - post-payment success page
- `/payment/cancel` - post-payment cancellation page

## API routes

- `/api/auth/[...nextauth]` - Auth.js handlers
- `/api/webhook/stripe` - Stripe webhook endpoint; activates paid job post
- `/api/inngest` - Inngest function serving endpoint
- `/api/uploadthing` - placeholder UploadThing endpoint (currently no-op)

## Access model

- Authentication checks are done via `auth()` and `User()` helper.
- Company-specific operations are scoped by `company.userId` checks.
- Save/unsave job actions are tied to `userId`.
