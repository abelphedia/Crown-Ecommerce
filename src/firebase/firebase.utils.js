import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCG0aAy8s2EWl0TWsbfL7gQ1qTybn0JCno",
  authDomain: "crown-clothing-ecommerce-app.firebaseapp.com",
  projectId: "crown-clothing-ecommerce-app",
  storageBucket: "crown-clothing-ecommerce-app.appspot.com",
  messagingSenderId: "592858186093",
  appId: "1:592858186093:web:6eaf7f31a12eb4587b9a64",
  measurementId: "G-790XWJ8SB2"
};


firebase.initializeApp(firebaseConfig);

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