// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAezpw7C_1KCt6iGrk8DnEiX0LANlwLTIc",
  authDomain: "fb-app-c9e9c.firebaseapp.com",
  projectId: "fb-app-c9e9c",
  storageBucket: "fb-app-c9e9c.appspot.com",
  messagingSenderId: "512581221298",
  appId: "1:512581221298:web:ba064ceb44d5d84d0842ab",
  measurementId: "G-FBM2SK4G58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);