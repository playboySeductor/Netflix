// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgBSf35X4MBs0qZQzYUufaTV4lhMHZ4qY",
  authDomain: "netflix-ui-8a151.firebaseapp.com",
  projectId: "netflix-ui-8a151",
  storageBucket: "netflix-ui-8a151.appspot.com",
  messagingSenderId: "857798928622",
  appId: "1:857798928622:web:3b95af25f4a481253b2bff",
  measurementId: "G-55XPPPSSPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);