import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Flame, FlameIcon } from "lucide-react-native";

export default function Dashboard() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [hasLogged, setHasLogged] = React.useState(false);

  const dashboardStats = [
    { type: "Burned", value: 30 },
    { type: "Consumed", value: 1030 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-6">
        {/* Header */}
        <Text className="text-3xl font-bold text-gray-900 mb-6">Dashboard</Text>

        {/* Streak Section */}
        <View className="items-center mb-4">
          <View className="bg-orange-500 p-4 rounded-full mb-2">
            <Flame color="white" size={28} />
          </View>
          <Text className="text-4xl font-bold text-gray-900">3</Text>
          <Text className="text-sm text-gray-500">day streak</Text>
        </View>

        {/* Streak Calendar */}
        <View className="flex-row justify-between mb-6 px-10">
          {days.map((day, index) => (
            <View
              key={index}
              className={`w-8 h-8 rounded-full items-center justify-center ${
                index < 5
                  ? "bg-orange-500"
                  : index === 5
                    ? "bg-yellow-400"
                    : "bg-gray-200"
              }`}
            >
              <Text
                className={`font-bold ${
                  index === 6 ? "text-gray-600" : "text-white"
                }`}
              >
                {day}
              </Text>
            </View>
          ))}
        </View>

        {/* Log Prompt */}
        {!hasLogged ? (
          <View className="bg-gray-100 p-4 rounded-xl mb-4 items-center">
            <Text className="text-center text-gray-700 mb-3">
              You haven’t logged any food today, click below to log now!
            </Text>
            <TouchableOpacity className="bg-black px-6 py-2 rounded-full">
              <Text className="text-white font-semibold">Log Food</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity className="bg-black px-6 py-2 rounded-full">
            <Text className="text-white font-semibold">Log Food</Text>
          </TouchableOpacity>
        )}

        {/* Divider */}
        <View className="my-8 border-b border-gray-300" />

        {/* Goal + Stats Section */}
        <View className="flex-col items-center gap-6">
          <View className="flex-row items-center gap-5 w-full">
            <View className="w-56 h-56 border-4 border-orange-400 rounded-full items-center justify-center">
              <FlameIcon size={52} color="orange" />
              <Text className="text-3xl font-bold text-gray-800">1000</Text>
              <Text className="text-lg text-gray-500">kcal</Text>
            </View>

            {/* Burned + Consumed */}
            <View className="gap-2">
              {dashboardStats.map((stat, index) => (
                <View key={index}>
                  <Text className="text-gray-700 text-2xl font-semibold">
                    {stat.type}
                  </Text>
                  <View className="flex-row items-baseline gap-1">
                    <Text className="text-2xl text-gray-900">
                    {stat.value} 
                  </Text>
                  <Text className="text-md text-gray-400">kcal</Text>
                  </View>
                  
                </View>
              ))}

              <TouchableOpacity className="bg-gray-200 mt-2 flex justify-center px-4 py-2 rounded-full">
                <Text className="text-gray-800 font-semibold">Edit Goal</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-black px-4 py-2 rounded-full">
            <Text className="text-white font-semibold">View more stats</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
