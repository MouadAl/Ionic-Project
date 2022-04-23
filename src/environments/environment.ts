import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

export const environment = {
  production: false,
  firebaseConfig : {
  apiKey: "AIzaSyCXSCZJM1Gkwo7jGF6MlGUja6gW_2vQ1XI",
  authDomain: "ionic-project-8b049.firebaseapp.com",
  projectId: "ionic-project-8b049",
  storageBucket: "ionic-project-8b049.appspot.com",
  messagingSenderId: "214927334032",
  appId: "1:214927334032:web:c3a9394a25aaf76a7c5615"
  }
};

const app = initializeApp(environment.firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();
