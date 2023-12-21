import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA7-ihfMxaeBqSBNWNwHu2dIp8J119iiOg",
  authDomain: "insta-clone-e16b7.firebaseapp.com",
  projectId: "insta-clone-e16b7",
  storageBucket: "insta-clone-e16b7.appspot.com",
  messagingSenderId: "603836844541",
  appId: "1:603836844541:web:cae5019482be29590d7194",
  measurementId: "G-118F31MYLC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage}