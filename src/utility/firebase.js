import { initializeApp } from "firebase/app";
//!  Starts your Firebase app with config info.
import { getAuth } from "firebase/auth";
//! Gives you access to Firebase Authentication.
import { getFirestore } from "firebase/firestore";
//! Gives you access to Firestore (Firebase’s cloud NoSQL database).

//! This object holds your Firebase project’s credentials
const firebaseConfig = {
  apiKey: "AIzaSyArdpelAToBsiMBiG6t0sEflZPpZLxjPMQ",
  authDomain: "fir-d7510.firebaseapp.com",
  projectId: "fir-d7510",
  storageBucket: "fir-d7510.firebasestorage.app",
  messagingSenderId: "299876569850",
  appId: "1:299876569850:web:bbce04eec6af8ef4982f43",
  measurementId: "G-5R70GD0W2V",
};

const app = initializeApp(firebaseConfig);
//! This line initializes Firebase using your project’s config

export const auth = getAuth(app);
//! Sets up Firebase Authentication (sign in, sign out, etc.) and exports it as auth.

const db = getFirestore(app);
//! Sets up Firestore (cloud database) and exports it as db
export { db };
