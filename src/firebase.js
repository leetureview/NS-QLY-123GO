// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9qeU8nNWLWaR_NO56dpvuGxKvC6DWnEo",
    authDomain: "qlnhansu123go.firebaseapp.com",
    projectId: "qlnhansu123go",
    storageBucket: "qlnhansu123go.firebasestorage.app",
    messagingSenderId: "1077518563443",
    appId: "1:1077518563443:web:a7b3adc2ef62438e8b1206",
    measurementId: "G-3Q6L1TN3TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
