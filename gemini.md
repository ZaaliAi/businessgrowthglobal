# Business Growth Global Website Overview

This document provides a detailed explanation of the Business Growth Global website, its features, and its technical implementation.

## 1. Project Purpose

The website serves as the online presence for **Business Growth Global**, a mentorship and coaching service founded by Lee Broders. Its primary goals are:
- To clearly articulate the value proposition of the business mentoring services.
- To generate leads through a contact form and calls-to-action.
- To build authority and credibility through a professional design, testimonials, and a blog.
- To provide a platform for publishing articles and insights related to business growth.

## 2. Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Auth**: [Supabase](https://supabase.io/) for the PostgreSQL database and user authentication.
- **Deployment**: Configured for Firebase App Hosting.

## 3. Key Features & Pages

### 3.1. Public-Facing Pages

- **Homepage (`/`)**: The main landing page, composed of several distinct sections:
  - `Hero`: A full-screen introduction with a compelling headline and a call-to-action (CTA).
  - `Intro`: Highlights the core benefits of the service using an icon-based layout.
  - `Packages`: Details the "Regular" and "Intensive" mentorship packages, including pricing and features.
  - `Testimonials`: A carousel showcasing client feedback.
  - `About`: A brief introduction to the company, featuring an embedded YouTube video.
  - `Final CTA`: A final prompt for users to book a discovery call.

- **About Lee Broders (`/about-lee-broders`)**: A dedicated page providing a detailed biography of the founder, Lee Broders, including his credentials and experience.

- **Blog (`/blog`)**:
  - **Listing Page**: Displays a grid of all published blog posts, sorted by creation date.
  - **Post Page (`/blog/[slug]`)**: A dynamic page that renders a single blog post. The content is written in Markdown and is fetched from the Supabase database.

- **Contact (`/contact`)**: A dedicated page containing a contact form for inquiries. The form includes fields for name, email, and message with client-side validation.

- **Login (`/login`)**: A page for administrators to sign in to manage the website content.

### 3.2. Admin Dashboard (Blog Management)

- **Admin Root (`/admin`)**: The main dashboard for managing blog posts. It displays a table of all posts, with options to create, edit, or delete them. This route and all sub-routes are protected and require a user to be logged in.
- **Create New Post (`/admin/blog/new`)**: A form for writing and publishing new blog posts. It includes a `Textarea` for Markdown content.
- **Edit Post (`/admin/blog/edit/[id]`)**: A form, pre-filled with existing post data, allowing for updates.

## 4. Supabase Integration (Backend)

The blog functionality and user authentication are powered by Supabase.

### 4.1. Setup

- **Client**: The Supabase client is initialized in `src/lib/supabase.ts`. It uses environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for configuration. These must be set in a `.env` file.
- **Database Schema**: The backend relies on a single `posts` table in the Supabase PostgreSQL database.

The SQL schema for the `posts` table is:
```sql
CREATE TABLE posts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  author TEXT
);
```

### 4.2. Functionality

- **Authentication**: User login is handled by Supabase Auth. The `/admin` routes are protected by a layout (`src/app/admin/layout.tsx`) that checks for a valid session and redirects to `/login` if the user is not authenticated.
- **Fetching Posts**: The blog pages (`/blog` and `/blog/[slug]`) use async React Server Components to fetch data directly from Supabase.
- **CRUD Operations**: The admin dashboard pages (`/admin/...`) use the Supabase client to perform Create, Read, Update, and Delete operations on the `posts` table.

## 5. Code Structure

- **`src/app`**: Contains all the pages and routes, following the Next.js App Router convention.
  - **`app/admin`**: Routes for the admin dashboard.
  - **`app/blog`**: Routes for the public-facing blog.
  - **`app/login`**: The login page.
  - **`app/layout.tsx`**: The root layout for the application.
  - **`app/page.tsx`**: The homepage.
- **`src/components`**: Reusable React components.
  - **`components/layout`**: Header, Footer, and authentication-related buttons.
  - **`components/sections`**: Components that make up the different sections of the homepage.
  - **`components/ui`**: UI components from ShadCN/UI (Button, Card, etc.).
- **`src/lib`**: Utility functions and libraries.
  - **`lib/supabase.ts`**: Supabase client initialization.
  - **`lib/utils.ts`**: General utility functions, like `cn` for merging Tailwind classes.
- **`src/hooks`**: Custom React hooks, such as `use-toast`.
- **`public`**: Static assets.
- **`tailwind.config.ts`**: Configuration file for Tailwind CSS.
- **`next.config.ts`**: Configuration for the Next.js framework.
