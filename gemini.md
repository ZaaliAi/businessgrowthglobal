# Business Growth Global Website Overview

This document provides a detailed explanation of the Business Growth Global website, its features, and its technical implementation.

## ❗ To-Do / Next Steps

To make the contact form fully functional, the following steps need to be completed:

1.  **Sign up for Resend:** Create an account at [resend.com](https://resend.com) to get an API key.
2.  **Set Supabase Secrets:** Run the following commands in your terminal, replacing the placeholder values with your actual credentials:
    *   `npx supabase secrets set RESEND_API_KEY=YOUR_API_KEY`
    *   `npx supabase secrets set CONTACT_FORM_TO_EMAIL=your-email@example.com`
    *   `npx supabase secrets set CONTACT_FORM_FROM_EMAIL=no-reply@your-domain.com` (This must be a verified domain in Resend).
3.  **Deploy the Supabase Function:** Run the following command to deploy the email-sending function:
    *   `npx supabase functions deploy contact-form`
4.  add links to social media accounts

---

## 1. Project Purpose

The website serves as the online presence for **Business Growth Global**, a mentorship and coaching service. Its primary goals are:
- To clearly articulate the value proposition of the business mentoring services.
- To generate leads through a contact form and calls-to-action.
- To build authority and credibility through a professional design, testimonials, and a blog.
- To provide a platform for publishing articles and insights related to business growth.

## 2. Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Auth**: [Supabase](https://supabase.io/) for the PostgreSQL database, user authentication, and Edge Functions.
- **Email**: [Resend](https://resend.com) for transactional emails.
- **Deployment**: Configured for Firebase App Hosting.

## 3. Key Features & Pages

### 3.1. Public-Facing Pages

- **Homepage (`/`)**: The main landing page, composed of several distinct sections:
  - `Hero`: A full-screen introduction with a professional static image, compelling headline, and dual calls-to-action.
  - `Intro`: Highlights the core benefits of the service using an icon-based layout.
  - `AEROPS Framework`: An interactive section with hover-activated popovers detailing the signature framework.
  - `Packages`: Details the "Regular" and "Intensive" mentorship packages.
  - `Testimonials`: A carousel showcasing client feedback.
  - `About`: A brief introduction to the company.
  - `Final CTA`: A final prompt for users to book a discovery call.

- **Our Team (`/our-team`)**: Profiles of the leadership and sales team.

- **Case Studies (`/case-studies`)**: A hub for success stories.
  - **Listing Page**: A gallery of case studies with a professional hero section and key metrics banner.
  - **Detail Page (`/case-studies/[slug]`)**: A detailed breakdown of individual client challenges, solutions, and results.

- **Blog (`/blog`)**:
  - **Listing Page**: Displays a grid of all published blog posts.
  - **Post Page (`/blog/[slug]`)**: Renders a single blog post with Markdown support.

- **Contact (`/contact`)**: A dedicated page with a functional contact form that sends an email notification upon submission (requires setup).

- **Login (`/login`)**: A page for administrators to sign in.

### 3.2. Admin Dashboard (Blog Management)

- **Admin Root (`/admin`)**: The main dashboard for managing blog posts.
- **Create New Post (`/admin/blog/new`)**: A form for writing and publishing new blog posts, including featured image uploads.
- **Edit Post (`/admin/blog/edit/[id]`)**: A form for updating existing posts.

## 4. Supabase Integration (Backend)

- **Authentication**: Supabase Auth protects all `/admin` routes.
- **Database**: A `posts` table in Supabase PostgreSQL stores all blog content.
- **Storage**: The `posts-images` bucket stores all uploaded images for blog posts.
- **Edge Functions**: A `contact-form` function handles email sending via Resend.

The SQL schema for the `posts` table is:
```sql
CREATE TABLE posts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  author TEXT,
  image_url TEXT
);
```