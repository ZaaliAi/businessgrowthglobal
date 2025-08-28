import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';

async function getPosts() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data;
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
                  <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        {format(new Date(post.created_at), 'MMMM d, yyyy')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{post.content.substring(0, 150)}...</p>
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
