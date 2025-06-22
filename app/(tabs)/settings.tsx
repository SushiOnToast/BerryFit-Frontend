import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '@/firebase.client'
import { useRouter } from 'expo-router'

export default function Settings() {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut()
    } catch (error) {
      Alert.alert('Sign Out Failed', error.message || 'An error occurred.')
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-8">Settings</Text>
      <TouchableOpacity
        className="bg-red-500 px-6 py-3 rounded-full"
        onPress={handleSignOut}
      >
        <Text className="text-white text-base font-semibold">Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}