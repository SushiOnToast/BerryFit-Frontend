import { View, Text, Settings } from "react-native";
import { Tabs } from "expo-router";
import React from "react";
import {
  HouseIcon,
  LoaderCircle,
  PlusCircle,
  SettingsIcon,
  UsersRound,
} from "lucide-react-native";
import PageWrapper from "@/components/PageWrapper";

export default function _layout() {
  return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            position: "absolute",
            elevation: 0,
            height: 40,
            paddingBottom: 8,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <HouseIcon size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="trackers"
          options={{
            tabBarIcon: ({ size, color }) => (
              <LoaderCircle size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ size, color }) => (
              <PlusCircle size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="social"
          options={{
            tabBarIcon: ({ size, color }) => (
              <UsersRound size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ size, color }) => (
              <SettingsIcon size={size} color={color} />
            ),
          }}
        />
      </Tabs>
  );
}
