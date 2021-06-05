import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

// utilities used across our application authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompts: 'select_account' });

// function that checks if the user is registered in our database or not.
async function handleUserProfile({userAuth, additionalData}) {
  if (!userAuth) return null;
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

  // return userRef to set the redux store.
  return userRef;
}

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}

export { handleUserProfile, getCurrentUser };
