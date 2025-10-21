import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Post } from '@/components/Post';
import { getAllPosts } from '@/supabase/query';
import { styles } from '../components/styles';

type PostData = {
  id: string;
  username: string;
  date: string;
  text: string;
  image: string;
  likeCount: number;
};

export default function PostScreen() {
  const [postData, setPostData] = useState<PostData[] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAllPosts();
        setPostData(data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPostData([]);
      }
    };

    loadData();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      contentContainerStyle={styles.container}
    >
      {postData?.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          date={post.date}
          text={post.text}
          image={post.image}
          likeCount={post.likeCount}
        />
      ))}
    </ScrollView>
  );
}
