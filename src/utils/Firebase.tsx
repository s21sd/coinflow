
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc3bZAsv474CgwpkV2MSIXVNkVoCL6OLc",
  authDomain: "coinflow-bb6e1.firebaseapp.com",
  projectId: "coinflow-bb6e1",
  storageBucket: "coinflow-bb6e1.appspot.com",
  messagingSenderId: "531322508298",
  appId: "1:531322508298:web:7ce949f8e5c43bb81dfbf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();