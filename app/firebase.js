// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApiGLghNWSkXHG0C1tKTRAY8N738heaFs",
  authDomain: "learning-project-76b44.firebaseapp.com",
  projectId: "learning-project-76b44",
  storageBucket: "learning-project-76b44.appspot.com",
  messagingSenderId: "168249485047",
  appId: "1:168249485047:web:f9a8afa9b49dbd05be55f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);