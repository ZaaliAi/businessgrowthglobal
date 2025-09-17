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

const YouTubeEmbed = ({ url }: { url: string }) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    if(!videoId) return <a href={url}>{url}</a>;

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="aspect-video w-full my-8">
            <iframe
                className="h-full w-full rounded-lg"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default async function BlogPostPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = await paramsPromise;
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
          
          {post.image_url && (
            <div className="relative aspect-video not-prose my-8">
              <Image 
                src={post.image_url} 
                alt={post.title} 
                fill 
                className="object-contain rounded-lg"
                priority
              />
            </div>
          )}

          <ReactMarkdown
             components={{
                p: ({ node, ...props }) => {
                    // Check if the paragraph contains just a YouTube link
                    const child = node?.children[0];
                    if (child?.type === 'text' && child.value.startsWith('https://www.youtube.com/watch?v=')) {
                        return <YouTubeEmbed url={child.value} />;
                    }
                    return <p {...props} />;
                },
                img: ({ node, ...props }) => {
                  const { src, alt } = props;
                  if (!src) return null;
                  
                  if(src.includes('supabase.co')) {
                    return (
                        <div className="relative aspect-video">
                            <Image 
                                src={src}
                                alt={alt || 'Blog post image'}
                                fill
                                className="object-contain rounded-lg"
                             />
                        </div>
                    )
                  }
                  
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
