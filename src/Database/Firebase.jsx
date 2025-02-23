// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmLlHeOgH573DVu_jaUHUyt1sGrQL97gc",
  authDomain: "lavanya-608c2.firebaseapp.com",
  projectId: "lavanya-608c2",
  storageBucket: "lavanya-608c2.appspot.com", // Fix typo in storageBucket
  messagingSenderId: "600900008122",
  appId: "1:600900008122:web:7a34ecb32ceca127e36a83",
  measurementId: "G-FYKK0SW1C7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
