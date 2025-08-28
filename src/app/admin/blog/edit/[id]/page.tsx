'use client';

import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PostForm, PostFormValues } from '../../post-form';

export default function EditPostPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const router = useRouter();
  const [post, setPost] = useState<PostFormValues | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', params.id)
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
  }, [params.id, router, toast]);

  const handleSubmit = async (values: PostFormValues) => {
    const { error } = await supabase
      .from('posts')
      .update(values)
      .eq('id', params.id);

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
