
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDwvBpO1GfPKzxaYzeQ3n5E-uVr1tKlJd4",
  authDomain: "practical-project-john.firebaseapp.com",
  projectId: "practical-project-john",
  storageBucket: "practical-project-john.appspot.com",
  messagingSenderId: "974938942045",
  appId: "1:974938942045:web:56b95ed098065abbb4fbb4",
  measurementId: "G-Z0676Z3SX8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)