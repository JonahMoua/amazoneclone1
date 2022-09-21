import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbFOZtFF0W5SWrA1fwphMLA8d9hTxcPGo",
  authDomain: "clone-16516.firebaseapp.com",
  projectId: "clone-16516",
  storageBucket: "clone-16516.appspot.com",
  messagingSenderId: "54703709196",
  appId: "1:54703709196:web:108965acbb5ad9ab90e229",
  measurementId: "G-YFLRB7M7EE"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };