import React from 'react';
import { Text, View } from 'react-native';
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={{ marginTop: -2 }}>
                <Logo />
              </View>
              <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 17, fontWeight: '600' }}>
                  <Text style={{ color: '#007AFF' }}>blueprint</Text>
                  <Text style={{ color: '#000' }}> blog</Text>
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </PostStack.Navigator>
  );
}
