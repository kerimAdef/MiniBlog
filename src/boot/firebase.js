// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzXyx9IeAIDs2gk3IeedeSWq0rmxJ-4r8",
  authDomain: "madblog-b0b5c.firebaseapp.com",
  projectId: "madblog-b0b5c",
  storageBucket: "madblog-b0b5c.appspot.com",
  messagingSenderId: "502257462050",
  appId: "1:502257462050:web:cec4186ca31cbc86b0937b",
  measurementId: "G-DWCNQYBMW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
