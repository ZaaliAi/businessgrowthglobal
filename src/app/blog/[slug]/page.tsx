import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import Image from 'next/image';

async function getPost(slug: string) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="prose prose-lg mx-auto py-16 sm:py-24 px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{post.title}</h1>
          <p className="text-muted-foreground">{format(new Date(post.created_at), 'MMMM d, yyyy')}</p>
          <ReactMarkdown
             components={{
                img: ({ node, ...props }) => {
                  const { src, alt } = props;
                  if (!src) return null;
                  
                  // For Supabase URLs, we don't know the dimensions beforehand, so we use fill and give it a container.
                  // This is a simple approach. For more advanced cases, you might store image dimensions in the DB.
                  if(src.includes('supabase.co')) {
                    return (
                        <div className="relative aspect-video">
                            <Image 
                                src={src}
                                alt={alt || 'Blog post image'}
                                fill
                                className="object-cover rounded-lg"
                                unoptimized // if you can't get width and height, or trust the source, this might be needed.
                                             // Let's try without it first. The user can add it if needed.
                             />
                        </div>
                    )
                  }
                  
                  // Fallback for external images where we can't use next/image optimization easily without width/height
                  // or without adding the domain to next.config.js
                  // eslint-disable-next-line @next/next/no-img-element
                  return <img src={src} alt={alt || ''} className="rounded-lg" />;
                },
              }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}
