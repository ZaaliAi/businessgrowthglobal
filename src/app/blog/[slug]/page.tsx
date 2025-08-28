import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

async function getPost(slug: string) {
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
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}
