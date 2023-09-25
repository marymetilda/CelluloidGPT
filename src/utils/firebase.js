// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8nKaIHKLDkpTfHswP8X1Td5CmtiILIRw",
  authDomain: "celluloidgpt-15b7a.firebaseapp.com",
  projectId: "celluloidgpt-15b7a",
  storageBucket: "celluloidgpt-15b7a.appspot.com",
  messagingSenderId: "219164446270",
  appId: "1:219164446270:web:a37fff876b1ccd411f4b6f",
  measurementId: "G-WWCGRP3S59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
