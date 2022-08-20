// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCudbdBXSG3kNo9BgSAW4rEUR3uWMIF2Ok",
  authDomain: "berryhealthy-4a85d.firebaseapp.com",
  projectId: "berryhealthy-4a85d",
  storageBucket: "berryhealthy-4a85d.appspot.com",
  messagingSenderId: "775395220906",
  appId: "1:775395220906:web:028da757a1219c7b505fd3",
  measurementId: "G-6W9KDJ6VXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);