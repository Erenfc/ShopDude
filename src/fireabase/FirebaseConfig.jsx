import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: "shopdudeweb.firebaseapp.com",
  projectId: "shopdudeweb",
  storageBucket: "shopdudeweb.appspot.com",
  messagingSenderId: "979945466640",
  appId: "1:979945466640:web:4539d03e6f7016da9e5395",
  measurementId: "G-YSEH5EGBTP"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}