import { Text, View } from "react-native";
import "../global.css";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebase.client";

export default function Index() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <>
  {user ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/(auth)" />
  )}
  </>
}
