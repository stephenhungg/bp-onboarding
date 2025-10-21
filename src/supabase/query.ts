import { supabase } from '@/supabase/client';

export const getAllPosts = async () => {
  const { data, error } = await supabase.from('Posts').select('*');
  if (error) {
    throw error;
  }
  return data;
};

export const getCommentsForPost = async (postId: string) => {
  const { data, error } = await supabase
    .from('Comments')
    .select('*')
    .eq('post', postId)
    .order('date', { ascending: true });

  if (error) {
    throw error;
  }
  return data;
};
