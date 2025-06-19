import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <View>
      {children}
    </View>
  );
}