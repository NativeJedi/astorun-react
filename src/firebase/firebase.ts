import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALqvL8mYAbUacQA6x4pLwC4Sbz6Cx1KOE',
  authDomain: 'astorun-fb320.firebaseapp.com',
  databaseURL: 'https://astorun-fb320.firebaseio.com',
  projectId: 'astorun-fb320',
  storageBucket: 'astorun-fb320.appspot.com',
  messagingSenderId: '921386947159',
  appId: '1:921386947159:web:6eda4c1652f3315acb0912',
  measurementId: 'G-SJCQMG92P5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const firestore = firebase.firestore();
