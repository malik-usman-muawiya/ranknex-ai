# RankNex AI — AI-Powered Digital Marketing Agency Website

A complete, production-ready, full-stack website for RankNex AI — an AI-powered digital marketing and SEO agency based in Pakistan, targeting clients in Pakistan, UK, and US.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | MySQL via Prisma ORM |
| Auth | NextAuth.js (Credentials, JWT) |
| Animations | Framer Motion + CSS |
| Icons | Lucide React |
| Fonts | Inter + Outfit (Google Fonts) |

## Getting Started

### Prerequisites
- Node.js 18+
- MySQL database
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

Update `DATABASE_URL` with your MySQL connection string:
```
DATABASE_URL="mysql://user:password@localhost:3306/ranknex_ai"
```

### 3. Setup Database
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed initial data (admin user, categories, sample posts)
npm run db:seed
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Admin Access

The admin panel is **hidden** from public navigation.

### Method 1: Logo Click
Click the RankNex AI logo **6 times** consecutively (within 3 seconds) to open the admin login.

### Method 2: Direct URL
Navigate to `/admin` to access the admin login page.

### Default Credentials
- **Username:** admin
- **Password:** RankNex@2024

> ⚠️ Change these credentials in production by updating the database.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About Us page
│   ├── services/          # Service pages (SEO, PPC, etc.)
│   ├── blog/              # Blog listing + single post
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact page with form
│   ├── uk/                # UK market landing page
│   ├── us/                # US market landing page
│   ├── admin/             # Hidden admin panel
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── layout/            # Header, Footer, WhatsApp
│   ├── home/              # Homepage sections
│   ├── ui/                # UI components
│   ├── blog/              # Blog components
│   └── admin/             # Admin components
├── lib/                   # Utilities, DB, auth
└── types/                 # TypeScript types
```

## Features

- ✅ 14+ pages with unique SEO metadata
- ✅ Dynamic blog system with MySQL database
- ✅ Hidden admin panel with CRUD for blogs, case studies
- ✅ Contact form with database storage
- ✅ Animated, responsive, conversion-focused design
- ✅ WhatsApp floating button
- ✅ Schema.org markup (Organization, Article, Service)
- ✅ robots.txt + sitemap.xml
- ✅ UK and US market landing pages

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy via Vercel CLI or GitHub integration
```

### VPS
```bash
npm run build
npm start
```

Ensure your MySQL database is accessible from the deployment environment.

## License

Proprietary — RankNex AI. All rights reserved.
