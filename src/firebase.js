// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCshMcs65TeumLFyryeYWCsBlMx1wQss",
  authDomain: "valentine-d4400.firebaseapp.com",
  projectId: "valentine-d4400",
  storageBucket: "valentine-d4400.firebasestorage.app",
  messagingSenderId: "526132238146",
  appId: "1:526132238146:web:9eec96827c38f8c421adb",
  measurementId: "G-ZWD7G4XMS7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
