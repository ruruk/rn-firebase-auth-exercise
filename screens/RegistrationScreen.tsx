import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      Alert.alert("Success", "Registration successful!");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Your Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ color: "blue", textAlign: "center" }}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
