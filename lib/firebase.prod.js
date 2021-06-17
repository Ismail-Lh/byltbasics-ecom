import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyCmikO_pUyVgmlzSN1sDsWDLquBMqY8zcc',
  authDomain: 'bylt-basics.firebaseapp.com',
  projectId: 'bylt-basics',
  storageBucket: 'bylt-basics.appspot.com',
  messagingSenderId: '994366699602',
  appId: '1:994366699602:web:871f8ffbc35149ab71478b',
};

// Initialize fire
export const firebase = !Firebase.apps.length
  ? Firebase.initializeApp(config)
  : Firebase.app();

export const auth = firebase.auth();
