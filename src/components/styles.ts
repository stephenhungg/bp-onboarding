import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 45,
    marginBottom: 12,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  postImage: {
    width: 375,
    height: 250,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePlaceholder: {
    marginRight: 8,
  },
  postContent: {
    paddingHorizontal: 10,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  activityLikes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityLikesIcon: {
    marginRight: 8,
  },
  activityLikesText: {
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
  },
  commentsContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  commentUsername: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  commentDate: {
    fontSize: 12,
    color: '#666',
  },
});
