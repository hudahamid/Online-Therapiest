// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoy-lKZHKk-nAIYb3c3EDxLZ9hsGwOSLk",
  authDomain: "online-therapy1.firebaseapp.com",
  projectId: "online-therapy1",
  storageBucket: "online-therapy1.appspot.com",
  messagingSenderId: "777594180613",
  appId: "1:777594180613:web:91e1c481677dd03211386c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;