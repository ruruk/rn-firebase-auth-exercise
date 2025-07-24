import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { currentUser, logoutUser } from "../services/authService";

const ProfileScreen = () => {
  // TODO: handle logout
  const handleLogout = () => {
    logoutUser();
  };

  const [userInfo, setUserInfo] = useState(currentUser());

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text>Profile</Text>

        {/* TODO: Show logged in user info */}
        <Text>{userInfo?.email}</Text>
        <Text>{userInfo?.uid}</Text>
        <Text>{userInfo?.emailVerified}</Text>

        <Button title="Sign Out" color="green" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
