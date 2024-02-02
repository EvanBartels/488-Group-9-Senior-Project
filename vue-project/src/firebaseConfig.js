// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMukwSR7gZvLlWXTUOWYGk1mAdpus1mm0",
  authDomain: "cscd490-senior-project.firebaseapp.com",
  projectId: "cscd490-senior-project",
  storageBucket: "cscd490-senior-project.appspot.com",
  messagingSenderId: "60616079679",
  appId: "1:60616079679:web:0542edf7e6ed79f25ebb8a",
  measurementId: "G-G1JWS1FBEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth }