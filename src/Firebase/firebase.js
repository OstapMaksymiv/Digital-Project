import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD7K522a1TL2SXCV546yTLkb0b3VuHUxbk",
  authDomain: "building-project-e0b76.firebaseapp.com",
  projectId: "building-project-e0b76",
  storageBucket: "building-project-e0b76.appspot.com",
  messagingSenderId: "156936273295",
  appId: "1:156936273295:web:0112666ed033e83777dffa",
  measurementId: "G-NZXSQVZTRH"
};

export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const txtDB = getFirestore(app)
export {storage , txtDB};