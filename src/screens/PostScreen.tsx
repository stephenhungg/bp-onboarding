import { Image, Text, View } from 'react-native';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { styles } from '../components/styles';

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <ProfilePlaceholder style={styles.profilePlaceholder} />
          <Text style={styles.username}>rbeggs</Text>
        </View>
        <Text style={styles.date}>September 19</Text>
      </View>
      <View style={styles.postContent}>
        <Text>
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. read more online:
          https://www.codetenderloin.org/
        </Text>
      </View>
      <Image
        source={{
          uri: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
        }}
        style={styles.postImage}
      />
      <View style={styles.activityContainer}>
        <View style={styles.activityLikes}>
          <HeartIcon style={styles.activityLikesIcon} />
          <Text style={styles.activityLikesText}>256 Likes</Text>
        </View>
        <ShareIcon />
      </View>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <ProfilePlaceholder style={styles.profilePlaceholder} />
          <Text style={styles.username}>philip_ye</Text>
        </View>
        <Text style={styles.date}>September 20</Text>
      </View>
      <Text style={styles.commentContent}>
        This organization is doing amazing work tackling the complex root causes
        of the issue.
      </Text>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <ProfilePlaceholder style={styles.profilePlaceholder} />
          <Text style={styles.username}>vppraggie</Text>
        </View>
        <Text style={styles.date}>September 21</Text>
      </View>
      <Text style={styles.commentContent}>Thanks for sharing!</Text>
    </View>
  );
}
