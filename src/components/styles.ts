import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 45,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  postImage: {
    width: 375,
    height: 250,
    marginVertical: 10,
    borderRadius: 10,
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
  activityShare: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityLikesIcon: {
    marginRight: 8,
  },
  activityLikesText: {
    fontWeight: 'bold',
  },
  commentContent: {
    paddingLeft: 40,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
