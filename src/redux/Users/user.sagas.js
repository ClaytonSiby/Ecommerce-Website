import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import {
  auth, handleUserProfile, getCurrentUser, GoogleProvider,
} from '../../Firebase/utils';
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, userError } from './user.actions';

export function* getSnapShotFromUserAuth(user) {
  try {
    const userRef = yield call(handleUserProfile, { userAuth: { user } });
    const snapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      }),
    );
  } catch (error) {
    // console.log(error)
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    // try to signin with provided email and password
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    // if user is recognised, restore the redux store with the user's information
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    // if user doesn't exist return
    if (!userAuth) return;

    // if user is recognised, restore the redux store with the user's information
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    //   console.log(error);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    // subscribe to the store.

    yield put(signOutUserSuccess());
  } catch (error) {
    // console.log(error);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
  payload: {
    displayName,
    email,
    password,
    confirmPassword,
  },
}) {
  if (password !== confirmPassword) {
    const err = ['Password Don\'t match'];
    yield put(
      userError(err),
    );
    return;
  }

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = { displayName };
    yield getSnapShotFromUserAuth(user, additionalData);
  } catch (err) {
    console.log(err);
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export default function* userSagas() {
  // call the email start function
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
  ]);
}
