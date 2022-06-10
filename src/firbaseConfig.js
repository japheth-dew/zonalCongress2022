import {initializeApp} from 'firebase/app'; 
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDbc823Rrz_cHnCu04GubwZ8S_8IEtrOzU",
  authDomain: "zonalcongress.firebaseapp.com",
  projectId: "zonalcongress",
  storageBucket: "zonalcongress.appspot.com",
  messagingSenderId: "664577766514",
  appId: "1:664577766514:web:2d5bdccb405bba7e747eeb",
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)