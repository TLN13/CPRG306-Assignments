"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCzdl5awKIh7FJu99YhXBV8WKDisxi4gdY",
//   authDomain: "cprg306-assignments-f3c3b.firebaseapp.com",
//   projectId: "cprg306-assignments-f3c3b",
//   storageBucket: "cprg306-assignments-f3c3b.firebasestorage.app",
//   messagingSenderId: "117966034965",
//   appId: "1:117966034965:web:8c9fcb0213fa01cde1d61c"
// };

console.log("this is your API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);