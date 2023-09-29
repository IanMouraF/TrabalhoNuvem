// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBp9xsaRvnhmE5sDuEviUR9nqGHxXAQFhY",
    authDomain: "trabalhonuvem-3a428.firebaseapp.com",
    projectId: "trabalhonuvem-3a428",
    storageBucket: "trabalhonuvem-3a428.appspot.com",
    messagingSenderId: "663724195803",
    appId: "1:663724195803:web:553e3b85d9b7a8ddf5b1fe",
    measurementId: "G-1JGR6WB7PL",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export { firestore };

export const auth = getAuth(app);

