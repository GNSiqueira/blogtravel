// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPWNk9_Rrkfpq3KdqV3bbi4EYviMhoEm4",
  authDomain: "miniblog-dfeb3.firebaseapp.com",
  projectId: "miniblog-dfeb3",
  storageBucket: "miniblog-dfeb3.appspot.com",
  messagingSenderId: "998697455312",
  appId: "1:998697455312:web:777db64bd63db6c07dd8d5"
};

// Initialize Firebase
const db = getFirestore(app);
const app = initializeApp(firebaseConfig);

export {db};