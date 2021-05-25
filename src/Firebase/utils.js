import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

// utilities used across our application authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompts: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

async function handleUserProfile(userAuth, additionalData) {
  if (!userAuth) return;
  const { uid } = userAuth;

  // return a reference document for a user from the database (get/set data) if user exists
  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  // if document does not exist
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();

    // try and insert a new user data into our database.
    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (error) {
      // console.log(error)
    }
  }

  // return userRef to set the localState of the application.
  return userRef;
}

export { handleUserProfile };
