'use client';

import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PostForm, PostFormValues } from '../../../post-form';

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { toast } = useToast();
  const router = useRouter();
  const [post, setPost] = useState<PostFormValues | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((p) => setId(p.id));
  }, [params]);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();
        
      if (error || !data) {
        toast({ variant: 'destructive', title: 'Error', description: 'Post not found.' });
        router.push('/admin');
      } else {
        setPost(data);
      }
      setIsLoading(false);
    }
    fetchPost();
  }, [id, router, toast]);

  const handleSubmit = async (values: PostFormValues) => {
    if (!id) return false;

    const { error } = await supabase
      .from('posts')
      .update({ 
        title: values.title, 
        slug: values.slug, 
        content: values.content,
        image_url: values.image_url,
      })
      .eq('id', id);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error updating post',
        description: error.message,
      });
      return false;
    } else {
      toast({
        title: 'Post Updated!',
        description: 'Your blog post has been updated.',
      });
      router.push('/admin');
      router.refresh();
      return true;
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <main className="flex-1 flex items-center justify-center">
          <p>Loading post...</p>
        </main>
      </div>
    );
  }

  if (!post) {
    return null; // or some other placeholder
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-background py-16 sm:py-24">
       <main className="w-full">
         <PostForm
          title="Edit Post"
          onSubmit={handleSubmit}
          initialData={post}
          submitButtonText="Save Changes"
        />
      </main>
    </div>
  );
}
