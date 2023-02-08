// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBlxhqGg3HNlLm2NuXHb8tFDZhKcMgUR4s",
    authDomain: "clone-1f7fc.firebaseapp.com",
    projectId: "clone-1f7fc",
    storageBucket: "clone-1f7fc.appspot.com",
    messagingSenderId: "295827600036",
    appId: "1:295827600036:web:50a6351fb7017bdf3bec31",
    measurementId: "G-LZX8M20NCJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // realtime database in firebase
const auth = firebase.auth();

export{ db, auth };

//THIS CODE IS STANDARD FOR FIREBASE AUTHORIZATION