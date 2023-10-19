// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCNyBqKPgtWVjrQxM210O_tXTixUdNuZw",
  authDomain: "parabolic-nomad-387216.firebaseapp.com",
  projectId: "parabolic-nomad-387216",
  storageBucket: "parabolic-nomad-387216.appspot.com",
  messagingSenderId: "396218227782",
  appId: "1:396218227782:web:53bbec66425981fb0cbe47"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;


