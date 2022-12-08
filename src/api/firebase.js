// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7hpFjQPK_W8LLNHCkWca88XkONdz_ic8",
  authDomain: "vue-demos-31b4b.firebaseapp.com",
  databaseURL: "https://vue-demos-31b4b-default-rtdb.firebaseio.com",
  projectId: "vue-demos-31b4b",
  storageBucket: "vue-demos-31b4b.appspot.com",
  messagingSenderId: "924625397908",
  appId: "1:924625397908:web:811a31bbdf6a2de2316c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }