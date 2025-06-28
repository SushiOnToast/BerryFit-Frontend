import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv5fGcqNqQ5GJ8h-Sy-omVu2tpzRB-PFo",
  authDomain: "cs-ia-fitness-app.firebaseapp.com",
  projectId: "cs-ia-fitness-app",
  storageBucket: "cs-ia-fitness-app.firebasestorage.app",
  messagingSenderId: "183147857205",
  appId: "1:183147857205:web:568c16d2795c2e0b14f87c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Auth with persistence for React Native
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});