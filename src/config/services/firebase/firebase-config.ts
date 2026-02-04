import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration from google-services.json
const firebaseConfig = {
  apiKey: "AIzaSyAiNSatT_Uw2USfUPkm7_JePfViLTqZqjA",
  authDomain: "keep-recipe-7faac.firebaseapp.com",
  projectId: "keep-recipe-7faac",
  storageBucket: "keep-recipe-7faac.appspot.com",
  messagingSenderId: "245761560244",
  appId: "1:245761560244:android:709e174f85f671aefd91e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
