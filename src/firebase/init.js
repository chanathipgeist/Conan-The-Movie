// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore" ;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu-6qDAdeHfr6hWV3V4-PcdSAgiJbkQyc",
  authDomain: "int305fb012-d5a6e.firebaseapp.com",
  projectId: "int305fb012-d5a6e",
  storageBucket: "int305fb012-d5a6e.appspot.com",
  messagingSenderId: "838227063131",
  appId: "1:838227063131:web:ee188aa897b0673ee62a7e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default db 

