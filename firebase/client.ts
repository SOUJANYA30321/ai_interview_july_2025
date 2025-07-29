import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKhg8_1POEy56sfqon3OoBx7V5EyasCtE",
    authDomain: "prepwisejuly-2025.firebaseapp.com",
    projectId: "prepwisejuly-2025",
    storageBucket: "prepwisejuly-2025.firebasestorage.app",
    messagingSenderId: "314407596013",
    appId: "1:314407596013:web:50aca6c0cbaa0b523501e4",
    measurementId: "G-LPBZKNDCSE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);