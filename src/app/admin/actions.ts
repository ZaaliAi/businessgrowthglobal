'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deletePost(postId: number): Promise<{ success: boolean; message: string }> {
  const supabase = createSupabaseServerClient();

  // First, get the post to find the image URL
  const { data: post, error: fetchError } = await supabase
    .from('posts')
    .select('image_url')
    .eq('id', postId)
    .single();

  if (fetchError) {
    return { success: false, message: `Failed to fetch post: ${fetchError.message}` };
  }

  // If there's an image, delete it from storage
  if (post.image_url) {
    try {
      const url = new URL(post.image_url);
      const pathSegments = url.pathname.split('/');
      const fileName = pathSegments[pathSegments.length - 1];
      
      if (fileName) {
        const { error: storageError } = await supabase.storage
          .from('posts-images')
          .remove([fileName]);

        if (storageError) {
          // Log the error but don't block post deletion if the image isn't found
          console.warn(`Could not delete image from storage: ${storageError.message}`);
        }
      }
    } catch (e) {
      console.error("Error parsing image URL for deletion:", e);
    }
  }

  // Now, delete the post from the database
  const { error: deleteError } = await supabase
    .from('posts')
    .delete()
    .eq('id', postId);

  if (deleteError) {
    return { success: false, message: `Failed to delete post: ${deleteError.message}` };
  }
  
  revalidatePath('/admin');
  revalidatePath('/blog');
  
  return { success: true, message: 'Post deleted successfully.' };
}