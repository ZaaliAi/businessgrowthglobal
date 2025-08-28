'use client';

import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { PostForm, PostFormValues } from '../../post-form';

export default function NewPostPage() {
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (values: PostFormValues) => {
    const { error } = await supabase.from('posts').insert([
      { 
        title: values.title, 
        slug: values.slug, 
        content: values.content,
        author: 'Lee Broders' // Or dynamically set author
      }
    ]);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error creating post',
        description: error.message,
      });
      return false;
    } else {
      toast({
        title: 'Post Created!',
        description: 'Your new blog post has been published.',
      });
      router.push('/admin');
      router.refresh();
      return true;
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-background py-16 sm:py-24">
      <main className="w-full">
        <PostForm
          title="Create New Post"
          onSubmit={handleSubmit}
          submitButtonText="Publish Post"
        />
      </main>
    </div>
  );
}
