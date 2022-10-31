import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOFVL_Sp9gRwNO_Fl-vJSAjLGy2QyPfsY',
  authDomain: 'chat-app-c43cd.firebaseapp.com',
  projectId: 'chat-app-c43cd',
  storageBucket: 'chat-app-c43cd.appspot.com',
  messagingSenderId: '1032547361937',
  appId: '1:1032547361937:web:79d3fc4af0978af78e8b30',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
