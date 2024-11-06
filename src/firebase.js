import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCnN2KBDhgpVXOot9zsZubvlbN_aXXyLpI",
    authDomain: "project-11-226f7.firebaseapp.com",
    databaseURL: "https://project-11-226f7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-11-226f7",
    storageBucket: "project-11-226f7.firebasestorage.app",
    messagingSenderId: "4589284462",
    appId: "1:4589284462:web:b4833c742984dbdd8e0a7f",
    measurementId: "G-BSY7N6PLXQ"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };