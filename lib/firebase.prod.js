import Firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmikO_pUyVgmlzSN1sDsWDLquBMqY8zcc',
  authDomain: 'bylt-basics.firebaseapp.com',
  projectId: 'bylt-basics',
  storageBucket: 'bylt-basics.appspot.com',
  messagingSenderId: '994366699602',
  appId: '1:994366699602:web:871f8ffbc35149ab71478b',
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
