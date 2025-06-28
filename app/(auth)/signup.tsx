import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebase.client"; // Adjust the import path as needed

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const auth = FIREBASE_AUTH;

  const getPasswordStrength = (pwd: string) => {
    let score = 0;
    const rules = [
      /[a-z]/, // lowercase
      /[A-Z]/, // uppercase
      /\d/, // digit
      /[^A-Za-z0-9]/, // special char
    ];
    rules.forEach((rule) => {
      if (rule.test(pwd)) score++;
    });
    if (pwd.length >= 8) score++;

    if (score <= 2) return { level: "Weak", color: "bg-red-500" };
    if (score === 3 || score === 4)
      return { level: "Moderate", color: "bg-yellow-400" };
    return { level: "Strong", color: "bg-green-500" };
  };

  // Validation helper
  const validate = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return false;
    }
    // Simple email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Weak Password", "Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      Alert.alert("Success", "Account created!");
      router.replace("/(auth)/login");
    } catch (error) {
      Alert.alert("Sign Up Failed", error.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white justify-center items-center px-6"
    >
      {/* Avatar Placeholder */}
      <View className="w-24 h-24 rounded-full bg-gray-300 mb-6" />

      {/* Heading */}
      <Text className="text-2xl font-semibold mb-6">Sign Up</Text>

      {/* Google Sign-In Button */}
      <TouchableOpacity className="flex-row items-center justify-center w-full py-3 bg-gray-100 rounded-full mb-4">
        <AntDesign
          name="google"
          size={20}
          color="black"
          style={{ marginRight: 8 }}
        />
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
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full border border-gray-300 rounded-full px-4 py-3 mb-3 text-base"
        placeholderTextColor="#888"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        className="w-full border border-gray-300 rounded-full px-4 py-3 mb-3 text-base"
        placeholderTextColor="#888"
      />

      {/* Confirm Password */}
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        className="w-full border border-gray-300 rounded-full px-4 py-3 mb-4 text-base"
        placeholderTextColor="#888"
      />

      {/* Password Strength Bar */}
      {password.length > 0 && (
        <View className="w-full mb-2">
          <View className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <View
              className={`h-2 ${passwordStrength.color} w-[${passwordStrength.level === "Weak" ? "33" : passwordStrength.level === "Moderate" ? "66" : "100"}%]`}
            />
          </View>
          <Text className="text-sm mt-1 text-gray-600">
            Strength: {passwordStrength.level}
          </Text>
        </View>
      )}

      {/* Password Guidelines */}
      <Text className="text-xs text-gray-500 mb-2">
        Must include at least 8 characters, an uppercase letter, a number, and a
        special symbol.
      </Text>

      {/* Sign Up Button */}
      <TouchableOpacity
        className="w-full bg-black py-3 rounded-full mb-4"
        onPress={handleSignUp}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-center text-white text-base font-medium">
            Sign Up
          </Text>
        )}
      </TouchableOpacity>

      {/* Log In Redirect */}
      <Text className="text-sm text-gray-700">
        Already have an account?{" "}
        <Text
          className="text-black underline"
          onPress={() => router.push("/(auth)/login")}
        >
          Log In
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
}
