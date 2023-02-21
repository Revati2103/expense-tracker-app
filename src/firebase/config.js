import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCLbcDqM-DBBgpN4BRSb3qABLvpMLKwWew",
    authDomain: "trackit-628fa.firebaseapp.com",
    projectId: "trackit-628fa",
    storageBucket: "trackit-628fa.appspot.com",
    messagingSenderId: "245181194116",
    appId: "1:245181194116:web:bb941da37cab766275c7d1"
  };

// init firebase

firebase.initializeApp(firebaseConfig);


//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export {projectFirestore, projectAuth} 
