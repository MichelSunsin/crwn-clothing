import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCjqKZCtWBdUtPLI50lXK47sVS2fU-Utto',
  authDomain: 'crwn-clothing-db-44ec6.firebaseapp.com',
  projectId: 'crwn-clothing-db-44ec6',
  storageBucket: 'crwn-clothing-db-44ec6.appspot.com',
  messagingSenderId: '144617975201',
  appId: '1:144617975201:web:27b7d214cc8e6744252fe0',
  measurementId: 'G-5QN2V2C6NH',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
