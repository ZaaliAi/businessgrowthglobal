import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();
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
