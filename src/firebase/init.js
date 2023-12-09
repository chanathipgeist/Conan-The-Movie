// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJJwRkMPBdM6pSlybX2Vm7kP9bn0AjsAY",
  authDomain: "project-conan-95b4a.firebaseapp.com",
  projectId: "project-conan-95b4a",
  storageBucket: "project-conan-95b4a.appspot.com",
  messagingSenderId: "196188843227",
  appId: "1:196188843227:web:cf43484332c58b2acaf0fe",
  measurementId: "G-9V91039CDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// init firestore service
const db = getFirestore()

export default db 

