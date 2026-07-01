import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9qeU8nNWLWaR_NO56dpvuGxKvC6DWnEo",
    authDomain: "qlnhansu123go.firebaseapp.com",
    projectId: "qlnhansu123go",
    storageBucket: "qlnhansu123go.firebasestorage.app",
    messagingSenderId: "1077518563443",
    appId: "1:1077518563443:web:a7b3adc2ef62438e8b1206",
    measurementId: "G-3Q6L1TN3TE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
    try {
        console.log("Fetching drivers...");
        const snapshot = await getDocs(collection(db, "drivers"));
        console.log("Success! Found", snapshot.docs.length, "drivers.");
    } catch (error) {
        console.error("Firebase Error:", error.message);
    }
}

test();
