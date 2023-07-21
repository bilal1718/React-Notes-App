import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDfyTx619zzXydB__R4ed64nqH_aTAOMFU",
  authDomain: "react-notes-app-9663a.firebaseapp.com",
  projectId: "react-notes-app-9663a",
  storageBucket: "react-notes-app-9663a.appspot.com",
  messagingSenderId: "743445522377",
  appId: "1:743445522377:web:dc64ad375c7bf6c0d86a18"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "Notes")