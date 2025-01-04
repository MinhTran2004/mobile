// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMBU_T-lbBiekOXDGI_dLZLHtvK4o6SX4",
  authDomain: "doantotnghiep-6698c.firebaseapp.com",
  projectId: "doantotnghiep-6698c",
  storageBucket: "doantotnghiep-6698c.firebasestorage.app",
  messagingSenderId: "875073255444",
  appId: "1:875073255444:web:1eabafd9e357c3d6084f01",
  measurementId: "G-GRVSE2E9T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, addDoc, collection };
