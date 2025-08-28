
'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deletePost(postId: number) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from('posts').delete().eq('id', postId);

  if (error) {
    return { success: false, message: error.message };
  }
  
  revalidatePath('/admin');
  revalidatePath('/blog');
  
  return { success: true, message: 'Post deleted successfully.' };
}
