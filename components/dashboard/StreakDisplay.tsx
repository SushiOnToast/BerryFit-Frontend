import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import StreakCalendar from './StreakCalendar'

export default function StreakDisplay() {
  return (
    <View className="items-center justify-center py-6 bg-white rounded-2xl shadow-md">
      <View className="bg-orange-100 p-6 rounded-full mb-4">
        <Ionicons name="flame" size={48} color="#f97316" />
      </View>
      <Text className="text-5xl font-bold text-gray-800">4</Text>
      <Text className="text-base font-medium text-gray-600 mt-2">Day Streak</Text>
      <Text className="text-sm text-gray-400 mt-1">You’re doing really great, Anna!</Text>
      <StreakCalendar/>
    </View>
  )
}
