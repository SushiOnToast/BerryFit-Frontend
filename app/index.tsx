import { Text, View } from "react-native";
import "../global.css";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebase.client";

export default function Index() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      setLoading(false); // done checking
    });

    return () => unsubscribe(); // cleanup listener on unmount
  }, []);

  if (loading) return null; // or show splash screen

  return user ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)" />;
}
