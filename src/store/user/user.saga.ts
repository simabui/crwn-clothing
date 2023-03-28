import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { User } from "firebase/auth";
import { USER_ACTIONS_TYPE } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signOutSuccess,
  signOutFailed,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWIthGooglePopup,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  AdditionalInformation,
} from "../../utils/firebase/firebase";

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);

    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    console.error(error);
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuth() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;

    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    console.error(e);
    yield* put(signInFailed(e as Error));
  }
}

export function* signInGoogle() {
  try {
    const { user } = yield* call(signInWIthGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (e) {
    console.error(e);
    yield* put(signInFailed(e as Error));
  }
}

export function* signInEmail({ payload: { email, password } }: EmailSignInStart) {
  try {
    const data = yield* call(signInAuthUserWithEmailAndPassword, email, password);

    if (data) {
      yield* call(getSnapshotFromUserAuth, data.user);
    }
  } catch (e) {
    console.error(e);
    yield* put(signInFailed(e as Error));
  }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const data = yield* call(createAuthUserWithEmailAndPassword, email, password);

    if (data) {
      yield* put(signUpSuccess(data.user, { displayName }));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (e) {
    yield* put(signOutFailed(e as Error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTIONS_TYPE.GOOGLE_SIGN_IN_START, signInGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTIONS_TYPE.CHECK_USER_SESSION, isUserAuth);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTIONS_TYPE.EMAIL_SIGN_IN_START, signInEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTIONS_TYPE.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTIONS_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTIONS_TYPE.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
