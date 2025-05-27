// Import modular Firebase SDK
//importing the function initializeApp from Firebase to start (initialize) your Firebase app using your configuration.
import { initializeApp } from "firebase/app";
// importing the getAuth function from Firebase Authentication. It's used to enable sign-up, login, logout, etc. in your app.
import { getAuth } from "firebase/auth";

// importing getFirestore, the function that gives you access to Cloud Firestore — Firebase's NoSQL database.
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
// keys and IDs that connect your React app to your specific Firebase project.
const firebaseConfig = {
  apiKey: "AIzaSyArdpelAToBsiMBiG6t0sEflZPpZLxjPMQ",
  authDomain: "fir-d7510.firebaseapp.com",
  projectId: "fir-d7510",
  storageBucket: "fir-d7510.firebasestorage.app",
  messagingSenderId: "299876569850",
  appId: "1:299876569850:web:bbce04eec6af8ef4982f43",
  measurementId: "G-5R70GD0W2V",
};

// Initialize Firebase app,  line initializes your Firebase app with the config you provided.app now holds your initialized Firebase instance.
const app = initializeApp(firebaseConfig);

// get the auth service from the initialized app and export it
export const auth = getAuth(app);
// get the Firestore database instance from the initialized app and export it so you can use it to add, update, delete, or read data in your app.
export const db = getFirestore(app);
