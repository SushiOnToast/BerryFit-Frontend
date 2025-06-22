import { View, Text } from 'react-native'
import React from 'react'

export default function NetCalorieDisplay() {
  return (
    <View className="bg-white p-4 rounded-2xl shadow-sm">
      <Text className="text-lg font-semibold text-gray-800">Today's Calories</Text>
      <View className="flex-row justify-between items-center mt-4">
        <View>
          <Text className="text-4xl font-bold text-green-500">1,840</Text>
          <Text className="text-sm text-gray-500">consumed</Text>
        </View>
        <Text className="text-2xl font-bold text-gray-300">-</Text>
        <View>
          <Text className="text-4xl font-bold text-blue-500">320</Text>
          <Text className="text-sm text-gray-500">burned</Text>
        </View>
        <Text className="text-2xl font-bold text-gray-300">=</Text>
        <View>
          <Text className="text-4xl font-bold text-purple-500">1,520</Text>
          <Text className="text-sm text-gray-500">net</Text>
        </View>
      </View>
    </View>
  )
}