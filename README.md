# Moderate Murmurations

Production site for Moderate Murmurations built with Next.js 14 App Router.

## Setup

1. Copy environment variables:
```bash
cp .env.local.example .env.local
```

2. Update `.env.local` with your values:
   - `NEXT_PUBLIC_SITE_URL`: Your site URL (required for canonical, sitemap, OG tags)
   - `GEMINI_API_KEY`: Google Gemini API key (optional; audit feature works without it)

3. Install dependencies:
```bash
npm install
```

4. Run development server:
```bash
npm run dev
```

Open the development URL shown in your terminal.

## Routes

- `/` - Homepage
- `/build` - Build lab with foundational audit feature
- `/robots.txt` - SEO robots file
- `/sitemap.xml` - XML sitemap
- `/api/audit` - Backend API for audit generation

## Build for Production

```bash
npm run build
npm run start
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Public site URL (e.g., `https://moderatemurmurations.com`)
- `GEMINI_API_KEY`: Google Gemini API key for audit feature (optional)
