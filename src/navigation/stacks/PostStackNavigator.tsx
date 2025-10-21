import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '@/components/Logo';
import PostScreen from '@/screens/PostScreen';

const PostStack = createNativeStackNavigator();

export default function PostStackNavigator() {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="blueprint blog"
        component={PostScreen}
        options={{
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <View style={styles.logoContainer}>
                <Logo />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                  <Text style={styles.blueText}>blueprint</Text>
                  <Text style={styles.blackText}> blog</Text>
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </PostStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: -2,
  },
  titleContainer: {
    marginBottom: 15,
  },
  titleText: {
    fontSize: 17,
    fontWeight: '600',
  },
  blueText: {
    color: '#007AFF',
  },
  blackText: {
    color: '#000',
  },
});
