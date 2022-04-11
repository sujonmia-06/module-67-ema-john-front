// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBF770poTrbKuCccwZ9_mjvf7FD_KzUzo",
    authDomain: "ema-john-simple-95c52.firebaseapp.com",
    projectId: "ema-john-simple-95c52",
    storageBucket: "ema-john-simple-95c52.appspot.com",
    messagingSenderId: "909549876277",
    appId: "1:909549876277:web:69d66d924ecb3ba3f7ed7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;