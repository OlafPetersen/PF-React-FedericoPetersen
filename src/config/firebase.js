// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_API_KEY",
  authDomain: "proyectofinal-f1455.firebaseapp.com",
  projectId: "proyectofinal-f1455",
  storageBucket: "proyectofinal-f1455.appspot.com",
  messagingSenderId: "772281225190",
  appId: "1:772281225190:web:b1d84864e3c99a0fb6d027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);