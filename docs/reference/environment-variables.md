# Reference: Environment Variables

Use `.env.example` as the base template.

| Variable | Required | Used in | Notes |
| --- | --- | --- | --- |
| `DATABASE_URL` | Yes | Prisma client + Prisma CLI | PostgreSQL connection string |
| `AUTH_SECRET` | Yes | Auth.js (`next-auth` v5) | Generate with `openssl rand -base64 32` |
| `AUTH_URL` | Yes | Auth.js callbacks/session URL handling | Set to app base URL (`http://localhost:3000` in local dev) |
| `GITHUB_CLIENT_ID` | Conditional | GitHub provider | Needed if using GitHub login |
| `GITHUB_CLIENT_SECRET` | Conditional | GitHub provider | Needed if using GitHub login |
| `GOOGLE_CLIENT_ID` | Conditional | Google provider | Needed if using Google login |
| `GOOGLE_CLIENT_SECRET` | Conditional | Google provider | Needed if using Google login |
| `STRIPE_SECRET_KEY` | For paid posting | Stripe Checkout creation | Required to create paid posts |
| `STRIPE_WEBHOOK_SECRET` | For paid posting | Stripe webhook signature verification | Required for `/api/webhook/stripe` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Optional currently | Client-side Stripe usage (future/current UI support) | Present in template; not heavily used in current code |
| `NEXT_PUBLIC_URL` | For paid posting and emails | Stripe success/cancel URLs, share links, email CTA | Use full base URL |
| `UPLOADTHING_SECRET` | Optional currently | UploadThing integration | Current upload modules are placeholder stubs |
| `UPLOADTHING_APP_ID` | Optional currently | UploadThing integration | Current upload modules are placeholder stubs |
| `RESEND_API_KEY` | Optional | Inngest email function | Needed for `sendPeriodicJobListing` email sends |
| `ARCJET_KEY` | Optional | Arcjet protection rules | If omitted, fallback no-op protection is used |

## Notes

- At least one OAuth provider must be configured for login to work correctly.
- Keep production secrets out of source control.
