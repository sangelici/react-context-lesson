import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsYmlXK2-GicYhV0fn9ly8h4frHErJjL4",
  authDomain: "thrown-db.firebaseapp.com",
  databaseURL: "https://thrown-db.firebaseio.com",
  projectId: "thrown-db",
  storageBucket: "thrown-db.appspot.com",
  messagingSenderId: "195635582445",
  appId: "1:195635582445:web:0d97b30a38f5b2bfed43e4",
  measurementId: "G-7LLWJ6K04D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
