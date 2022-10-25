// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-1L7QQEBIfKaRJstaswOUwyjxl9k_xSc",
  authDomain: "coder-react-38120.firebaseapp.com",
  projectId: "coder-react-38120",
  storageBucket: "coder-react-38120.appspot.com",
  messagingSenderId: "913710130455",
  appId: "1:913710130455:web:12d5a005fa171bb7074352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//crear la instancia de la base de datos
export const db = getFirestore(app);