// TODO: Create Firebase Auth Functions

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const loginUSer = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User singed in", user);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Sign in Error:", error);
    });
};

export const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully registered
      const user = userCredential.user;
      console.log("User Registered:", user);
      return user;
    })
    .catch((error) => {
      console.error("Registration Error:", error.code, error.message);
      throw error;
    });
};

export const logoutUser = () => {
  signOut(auth).then(() => {
    console.log("Logged Out");
  });
};

export const currentUser = () => {
  const user = auth.currentUser;
  if (user) {
    return user;
  } else {
    return null;
  }
};

// Registration UI abd  - Homework
// useContext
// localstorage thing or cookies

//TODO: :
// DONE 1. Create the RegistrationScreen UI
// DONE 2. Create the registration authentication function in authServices
// DONE 3. Add the functionality to your registration screen
// DONE 4. add effient navigation between the login and registration screens (stacks & navigation functions)
//5. BONUS: try and add the user data to the database (if applicable) after registration
//6. BONUS: add useContext for auth state management
//7. BONUS: fix the localstorage issue with we get in the terminal
