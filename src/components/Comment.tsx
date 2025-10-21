import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getCommentsForPost } from '@/supabase/query';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { styles } from './styles';

interface Comment {
  id: string;
  username: string;
  comment: string;
  date: string;
}

interface CommentsForPostProps {
  postId: string;
}

export const CommentsForPost: React.FC<CommentsForPostProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getCommentsForPost(postId);
        setComments(data || []);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setComments([]);
      }
    };

    fetchComments();
  }, [postId]);

  if (comments.length === 0) {
    return (
      <View style={styles.commentsContainer}>
        <Text>No comments yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.commentsContainer}>
      {comments.map(c => (
        <View key={c.id}>
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <ProfilePlaceholder style={styles.profilePlaceholder} />
              <Text style={styles.commentUsername}>{c.username}</Text>
            </View>
            <Text style={styles.commentDate}>{formatDate(c.date)}</Text>
          </View>
          <Text style={[styles.commentText, { paddingLeft: 40 }]}>
            {c.comment}
          </Text>
        </View>
      ))}
    </View>
  );
};
