import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig} from './config';

firebase.initializeApp(firebaseConfig);

// utilities used across our application authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompts: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
