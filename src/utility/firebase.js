// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArdpelAToBsiMBiG6t0sEflZPpZLxjPMQ",
  authDomain: "fir-d7510.firebaseapp.com",
  projectId: "fir-d7510",
  storageBucket: "fir-d7510.firebasestorage.app",
  messagingSenderId: "299876569850",
  appId: "1:299876569850:web:bbce04eec6af8ef4982f43",
  measurementId: "G-5R70GD0W2V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
