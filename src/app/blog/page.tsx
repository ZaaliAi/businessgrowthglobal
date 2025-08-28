import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import Image from 'next/image';

async function getPosts() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('posts')
    .select('id, created_at, title, slug, content, image_url')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data;
}

function createExcerpt(markdown: string) {
    if (!markdown) return '';
    const plainText = markdown
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/#+\s/g, '')
      .replace(/(\*|_|`|>)/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    return plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                Our Blog
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Insights and strategies for business growth.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <Card className="h-full flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    {post.image_url && (
                        <div className="relative aspect-video">
                           <Image 
                            src={post.image_url} 
                            alt={post.title} 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           />
                        </div>
                    )}
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        {format(new Date(post.created_at), 'MMMM d, yyyy')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-3">{createExcerpt(post.content || '')}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
