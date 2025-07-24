import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ProfileScreen from "./screens/ProfileScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// TODO: Navigation Container
const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setIsLoggedIn(true);
        console.log("USER LOGGED IN");

        // ...
      } else {
        // User is signed out
        console.log("USER NOT LOGGED IN");
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={ProfileScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
    // Research how to use a useContext hook
  );
}

// 1. setup the navigation is logged in
// 2. setup the navigation is logged out
// 3. listen to whether the user is logged in or not
