import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_21U9TBv54XUBgIHjMWIHooptSs0IXfI",
  authDomain: "react-netflix-clone-ali.firebaseapp.com",
  projectId: "react-netflix-clone-ali",
  storageBucket: "react-netflix-clone-ali.appspot.com",
  messagingSenderId: "377820893950",
  appId: "1:377820893950:web:e8066d537bf902a252cbaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// pass firebase auth to our app
export const firebaseAuth = getAuth(app)