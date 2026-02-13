// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCshMcs65TeumLFyryeYYWCsBlMxX1wQss",
  authDomain: "valentine-d4400.firebaseapp.com",
  projectId: "valentine-d4400",
  storageBucket: "valentine-d4400.firebasestorage.app",
  messagingSenderId: "526132238146",
  appId: "1:526132238146:web:9e6ec96827c38f8c421adb",
  measurementId: "G-ZWD7G4XMS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);