import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator,
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      sidebarAdaptable
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => require('@/assets/bar_icons/home.png'),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: () => require('@/assets/bar_icons/code.png'),
        }}
      />
      <Tabs.Screen
        name="tv_focus"
        options={{
          title: 'TV event demo',
          tabBarIcon: () => require('@/assets/bar_icons/tv.png'),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          tabBarIcon: () => require('@/assets/bar_icons/video.png'),
        }}
      />
    </Tabs>
  );
}
