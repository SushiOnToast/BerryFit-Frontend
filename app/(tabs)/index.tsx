import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { GoalProgress, NetCalorieDisplay, StreakCalendar, StreakDisplay } from '@/components/dashboard'

export default function Dashboard() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 px-4 pt-6">
        <Text className="text-3xl font-bold text-gray-800 mb-6">Dashboard</Text>

        <StreakDisplay />

        <View className="space-y-4 mt-6">
          <NetCalorieDisplay />
          <GoalProgress />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
