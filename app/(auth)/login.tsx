import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FIREBASE_AUTH } from "@/firebase.client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const login = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      Alert.alert("Success", "Login Successfull!");
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Login Failed", error.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white justify-center items-center px-6"
    >
      {/* Avatar Placeholder */}
      <View className="w-24 h-24 rounded-full bg-gray-300 mb-6" />

      {/* Heading */}
      <Text className="text-2xl font-semibold mb-6">Log In</Text>

      {/* Google Sign-In Button */}
      <TouchableOpacity className="flex-row items-center justify-center w-full py-3 bg-gray-100 rounded-full mb-4">
        <AntDesign name="google" size={20} color="black" style={{ marginRight: 8 }} />
        <Text className="text-base text-gray-800">Google</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View className="flex-row items-center my-4 w-full">
        <View className="flex-1 h-px bg-gray-400" />
        <Text className="px-2 text-gray-500 text-sm">OR</Text>
        <View className="flex-1 h-px bg-gray-400" />
      </View>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="w-full border border-gray-300 rounded-full px-4 py-3 mb-3 text-base"
        keyboardType="email-address"
        placeholderTextColor="#888"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full border border-gray-300 rounded-full px-4 py-3 mb-2 text-base"
        placeholderTextColor="#888"
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text className="text-sm text-blue-500 mb-4 self-end">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={login} className="w-full bg-black py-3 rounded-full mb-4">
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-center text-white text-base font-medium">
            Log In
          </Text>
        )}
      </TouchableOpacity>

      {/* Sign Up */}
      <Text className="text-sm text-gray-700">
        Need an account?{" "}
        <Text
          className="text-black underline"
          onPress={() => router.push("/(auth)/signup")}
        >
          Sign Up
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
}