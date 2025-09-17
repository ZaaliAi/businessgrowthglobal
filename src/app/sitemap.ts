import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Create a generic Supabase client for build-time data fetching
  // This avoids the dependency on `cookies()` from `next/headers` which fails during build.
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: posts } = await supabase.from('posts').select('slug');

  const postUrls = posts?.map((post) => ({
    url: `https://www.businessgrowth.global/blog/${post.slug}`,
    lastModified: new Date(),
  })) ?? [];

  return [
    {
      url: 'https://www.businessgrowth.global',
      lastModified: new Date(),
    },
    {
      url: 'https://www.businessgrowth.global/our-founder',
      lastModified: new Date(),
    },
    {
      url: 'https://www.businessgrowth.global/case-studies',
      lastModified: new Date(),
    },
    {
      url: 'https://www.businessgrowth.global/media',
      lastModified: new Date(),
    },
    {
      url: 'https://www.businessgrowth.global/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.businessgrowth.global/contact',
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}