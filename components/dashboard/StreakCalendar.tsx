import { View, Text } from 'react-native'
import React from 'react'

export default function StreakCalendar() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const streak = [true, true, true, true, false, false, false] // sample

  return (
    <View className="bg-white rounded-2xl mt-4 py-5 mx-auto w-full shadow-sm">
      <Text className="text-base font-semibold text-gray-700 mb-4">Weekly Activity</Text>
      <View className="flex-row justify-between">
        {days.map((day, index) => (
          <View key={index} className="items-center">
            <Text className="text-sm text-gray-400 mb-2">{day}</Text>
            <View className={`h-6 w-6 rounded-full flex items-center justify-center ${
              streak[index] ? 'bg-orange-400' : 'bg-gray-200'
            }`}>
              <Text className="text-xs text-white font-bold">{index + 1}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
