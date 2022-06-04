// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7XS77FQCHcBlxaUXe0Rs06aCgZoHC03A",
  authDomain: "house-marketplace-app-14b4b.firebaseapp.com",
  projectId: "house-marketplace-app-14b4b",
  storageBucket: "house-marketplace-app-14b4b.appspot.com",
  messagingSenderId: "710221648825",
  appId: "1:710221648825:web:534a0d35190a5ccdfbdc68"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();