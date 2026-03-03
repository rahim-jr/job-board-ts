# Reference: Database Schema

Schema file: `prisma/schema.prisma`

## Core models

- `User`
  - auth identity, optional profile type (`COMPANY` or `JOB_SEEKER`)
  - has optional `company` or `jobseeker` profile
  - stores optional `stripeCustomerId`

- `Company`
  - one-to-one with `User` (`userId` unique)
  - stores company profile data
  - owns many `Jobpost` records

- `Jobseeker`
  - one-to-one with `User` (`userId` unique)
  - stores resume URL and short profile

- `Jobpost`
  - belongs to `Company`
  - lifecycle status enum: `DRAFT`, `ACTIVE`, `EXPIRED`
  - supports benefits array and listing duration

- `SavedJobPost`
  - join table between `User` and `Jobpost`
  - unique pair constraint: `@@unique([jobPostId, userId])`

## Auth.js models

- `Account`
- `Session`
- `VerificationToken`

These are used by the Prisma adapter for OAuth/session persistence.
