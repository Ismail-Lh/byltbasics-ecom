import { initializeApp, getApp, getApps } from 'firebase/app';

import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmikO_pUyVgmlzSN1sDsWDLquBMqY8zcc',
  authDomain: 'bylt-basics.firebaseapp.com',
  projectId: 'bylt-basics',
  storageBucket: 'bylt-basics.appspot.com',
  messagingSenderId: '994366699602',
  appId: '1:994366699602:web:871f8ffbc35149ab71478b',
};

// Initialize fire
export const firebase = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const db = getFirestore();

export const auth = getAuth();
