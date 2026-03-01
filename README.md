# Bookify

Bookify is a Next.js App Router application that lets users upload PDF books, extract and segment the content, and prepare books for AI-powered voice conversations.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Auth:** Clerk (`@clerk/nextjs`)
- **Database:** MongoDB + Mongoose
- **Storage:** Vercel Blob (`@vercel/blob`)
- **Forms & Validation:** React Hook Form + Zod
- **UI:** Tailwind CSS v4 + shadcn/ui + Sonner

## Current Features

- Clerk authentication integrated with App Router middleware (`proxy.ts`)
- Upload flow for PDF + optional cover image
- Client-side PDF parsing with `pdfjs-dist`
- Automatic cover generation from first PDF page (when no cover is uploaded)
- Book creation and text segment persistence in MongoDB
- Search-ready text index on book segments
- Plan-based upload limits scaffolded from Clerk plan claims

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_SECRET_KEY

# MongoDB
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

# Vercel Blob
BLOB_READ_WRITE_TOKEN=YOUR_BLOB_READ_WRITE_TOKEN

# Voice assistant config
NEXT_PUBLIC_ASSISTANT_ID=YOUR_ASSISTANT_ID
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add environment variables in `.env.local`.
3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Build production bundle
- `npm run start` - Run production server
- `npm run lint` - Run ESLint

## Notes

- Book upload currently enforces plan-based limits by counting user books.
- Voice session model and subscription constants are present for expansion of usage-based features.
