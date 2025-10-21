import { Image, Text, View } from 'react-native';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { CommentsForPost } from './Comment';
import { styles } from './styles';

export const Post = ({
  id,
  username,
  date,
  text,
  image,
  likeCount,
}: {
  id: string;
  username: string;
  date: string;
  text: string;
  image: string;
  likeCount: number;
}) => {
  const formatDate = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <ProfilePlaceholder style={styles.profilePlaceholder} />
          <Text style={styles.username}>{username}</Text>
        </View>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <View style={styles.postContent}>
        <Text>{text}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.postImage} />
      <View style={styles.activityContainer}>
        <View style={styles.activityLikes}>
          <HeartIcon style={styles.activityLikesIcon} />
          <Text style={styles.activityLikesText}>{likeCount} Likes</Text>
        </View>
        <ShareIcon />
      </View>
      <CommentsForPost postId={id} />
    </View>
  );
};
