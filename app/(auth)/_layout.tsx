import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function _layout() {
  return (
    <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "black",
          }}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
  )
}