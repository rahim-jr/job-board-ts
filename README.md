# Job Board SaaS Platform

A modern, full-stack job board SaaS platform built with Next.js 15, TypeScript, and PostgreSQL. This platform enables companies to post job listings and job seekers to find and save opportunities.

## 🚀 Features

### Core Functionality
- **Multi-tenant Architecture**: Support for both companies and job seekers
- **Job Management**: Create, edit, delete, and manage job postings
- **Advanced Search & Filtering**: Filter jobs by location, salary, employment type, and more
- **User Authentication**: Secure authentication with NextAuth.js and OAuth providers
- **Company Profiles**: Comprehensive company information and branding
- **Job Seeker Profiles**: Resume management and personal information
- **Saved Jobs**: Bookmark and track favorite job postings
- **Rich Text Editor**: Advanced job description editing with TipTap

### Monetization
- **Stripe Integration**: Payment processing for premium features
- **Subscription Management**: Handle recurring payments and webhooks
- **Payment Flow**: Complete checkout experience with success/cancel pages

### Developer Experience
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Modern, responsive design system
- **Prisma ORM**: Type-safe database access and migrations
- **Component Library**: Reusable UI components with Radix UI
- **Form Handling**: Robust form validation with React Hook Form and Zod
- **File Uploads**: Resume and logo uploads with UploadThing
- **Background Jobs**: Automated tasks with Inngest
- **Email Services**: Transactional emails with Resend

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **State Management**: React Hooks + Context API
- **Forms**: React Hook Form + Zod validation
- **Rich Text**: TipTap editor
- **Theme**: next-themes for dark/light mode

### Backend
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **API**: Next.js API Routes
- **File Storage**: UploadThing
- **Payments**: Stripe
- **Email**: Resend
- **Background Jobs**: Inngest

### Development
- **Package Manager**: pnpm
- **Linting**: ESLint + Next.js config
- **Code Quality**: TypeScript strict mode
- **Version Control**: Git

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- pnpm (recommended) or npm/yarn
- Redis (for Inngest, optional for development)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Job-Board-SaaS-Platform
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Setup
Copy the environment template and configure your variables:
```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `AUTH_SECRET`: NextAuth.js secret key
- `STRIPE_SECRET_KEY`: Stripe API secret
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `UPLOADTHING_SECRET`: UploadThing secret
- `UPLOADTHING_APP_ID`: UploadThing app ID
- `RESEND_API_KEY`: Resend API key

### 4. Database Setup
```bash
# Generate Prisma client
pnpm db:generate

# Run database migrations
pnpm db:migrate

# (Optional) Seed database with sample data
pnpm db:seed
```

### 5. Start Development Server
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                          # Next.js app directory
│   ├── (Mainlayout)/            # Main application layout
│   │   ├── page.tsx            # Home page
│   │   ├── my-jobs/            # Job management
│   │   ├── post-job/           # Job creation
│   │   ├── favourites/         # Saved jobs
│   │   └── payment/            # Payment flow
│   ├── api/                    # API routes
│   │   ├── auth/              # Authentication endpoints
│   │   ├── webhook/           # Stripe webhooks
│   │   ├── uploadthing/       # File uploads
│   │   └── inngest/           # Background jobs
│   ├── components/            # Reusable components
│   │   ├── form/             # Form components
│   │   ├── TextEditor/       # Rich text editor
│   │   └── theme-provider.tsx
│   ├── login/                # Authentication pages
│   ├── onboarding/           # User onboarding
│   └── layout.tsx           # Root layout
├── components/ui/             # UI component library
├── prisma/                   # Database schema and migrations
│   └── schema.prisma        # Prisma schema definition
├── public/                   # Static assets
└── lib/                      # Utility functions
```

## 🗄️ Database Schema

### Core Models
- **User**: Authentication and user type management
- **Company**: Company profiles and information
- **Jobseeker**: Job seeker profiles and resumes
- **Jobpost**: Job listings with full details
- **SavedJobPost**: User's saved job bookmarks

### Key Relationships
- Users can be either Companies or Job Seekers
- Companies have multiple Job Posts
- Users can save multiple Job Posts
- OAuth integration through NextAuth.js models

## 🔧 Development Commands

```bash
# Development
pnpm dev                    # Start development server
pnpm build                 # Build for production
pnpm start                 # Start production server
pnpm lint                  # Run ESLint

# Database
pnpm db:generate           # Generate Prisma client
pnpm db:push              # Push schema to database
pnpm db:migrate           # Run migrations
pnpm db:studio            # Open Prisma Studio
pnpm db:seed              # Seed database

# Deployment
pnpm db:migrate:deploy     # Deploy migrations to production
```

## 🧪 Testing

The project uses standard testing practices. Run tests with:
```bash
pnpm test                 # Run all tests
pnpm test:watch          # Run tests in watch mode
pnpm test:coverage       # Generate coverage report
```

## 🚀 Deployment

### Environment Setup
1. Configure all production environment variables
2. Set up PostgreSQL database
3. Configure Stripe webhooks
4. Set up UploadThing and Resend accounts

### Build and Deploy
```bash
# Build the application
pnpm build

# Deploy database migrations
pnpm db:migrate:deploy

# Start the application
pnpm start
```

### Recommended Platforms
- **Vercel**: Seamless Next.js deployment
- **Railway**: PostgreSQL hosting
- **Fly.io**: Full-stack deployment
- **AWS**: Enterprise-grade infrastructure

## 🔐 Security Considerations

- Authentication handled by NextAuth.js with secure session management
- Environment variables for all sensitive data
- CSRF protection built into Next.js
- Input validation with Zod schemas
- SQL injection prevention through Prisma ORM
- File upload security through UploadThing

## 📈 Monitoring and Analytics

- Stripe dashboard for payment analytics
- Prisma Studio for database management
- Next.js analytics for performance monitoring
- Custom error tracking and logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use conventional commit messages
- Write tests for new features
- Update documentation as needed
- Ensure code passes linting and type checking

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the [documentation](./docs/)
- Review existing issues and discussions

## 🗺️ Roadmap

### Upcoming Features
- [ ] Advanced job recommendations
- [ ] Company reviews and ratings
- [ ] Real-time notifications
- [ ] Mobile application
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] API for third-party integrations

### Performance Improvements
- [ ] Database optimization
- [ ] Image CDN integration
- [ ] Caching strategies
- [ ] Bundle size optimization

---

Built with ❤️ using modern web technologies.