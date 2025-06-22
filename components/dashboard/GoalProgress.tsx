import { View, Text } from 'react-native'
import React from 'react'

export default function GoalProgress() {
  const progress = 75 // Example progress percentage

  return (
    <View className="bg-white p-4 rounded-2xl shadow-sm mt-4">
      <Text className="text-lg font-semibold text-gray-800">Goal Progress</Text>
      <View className="mt-4">
        <View className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <View 
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </View>
        <View className="flex-row justify-between mt-2">
          <Text className="text-sm text-gray-500">Current: 1,520</Text>
          <Text className="text-sm font-medium text-blue-500">{progress}%</Text>
          <Text className="text-sm text-gray-500">Goal: 2,000</Text>
        </View>
      </View>
    </View>
  )
}