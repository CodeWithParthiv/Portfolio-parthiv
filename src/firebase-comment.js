import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6nXBIM5RnzejVUCIO3aHrIIExxxCE1IQ",
  authDomain: "portfolio-parthiv-9f466.firebaseapp.com",
  projectId: "portfolio-parthiv-9f466",
  storageBucket: "portfolio-parthiv-9f466.firebasestorage.app",
  messagingSenderId: "1041122357475",
  appId: "1:1041122357475:web:0f9dfa4a5d239d6d0555d6",
  measurementId: "G-8ZT4Z3S3L0"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };