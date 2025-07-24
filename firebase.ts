import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ... Your Configuration Here
  apiKey: "AIzaSyBqsBzH567Q5T83lHoQXuDVuNDvTe3JWrQ",
  authDomain: "dv300-classproject-2025-ruan.firebaseapp.com",
  projectId: "dv300-classproject-2025-ruan",
  storageBucket: "dv300-classproject-2025-ruan.firebasestorage.app",
  messagingSenderId: "261959159223",
  appId: "1:261959159223:web:348e592fe1e3aef9e1ac32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: Initialise Firebase Authentication and get a reference to the service

// Initialise all srvices
export const auth = getAuth(app);

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
