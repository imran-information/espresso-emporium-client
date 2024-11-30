// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATxQ3lJSQXnwC2yfapWrRMspNOHohwmo4",
    authDomain: "espresso-emporium-client-a14df.firebaseapp.com",
    projectId: "espresso-emporium-client-a14df",
    storageBucket: "espresso-emporium-client-a14df.firebasestorage.app",
    messagingSenderId: "675431601242",
    appId: "1:675431601242:web:a6b83b017cca1c41bef463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
