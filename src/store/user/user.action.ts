import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { USER_ACTIONS_TYPE } from "./user.types";
import { UserData, AdditionalInformation } from "../../utils/firebase/firebase";

export type CheckUserSession = Action<USER_ACTIONS_TYPE.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<USER_ACTIONS_TYPE.SET_CURRENT_USER, UserData>;

export type GoogleSignInStart = Action<USER_ACTIONS_TYPE.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTIONS_TYPE.EMAIL_SIGN_IN_START, { email: string; password: string }>;

export type SignInSuccess = ActionWithPayload<USER_ACTIONS_TYPE.SIGN_IN_SUCCESS, { user: UserData }>;
export type SignInFailed = ActionWithPayload<USER_ACTIONS_TYPE.SIGN_IN_FAILURE, { error: Error }>;

export type SignUpStart = ActionWithPayload<USER_ACTIONS_TYPE.SIGN_UP_START, { email: string; password: string; dispayName: string }>;
export type SignUpSuccess = ActionWithPayload<
  USER_ACTIONS_TYPE.SIGN_UP_SUCCESS,
  { user: UserData; additionaDetails: AdditionalInformation }
>;
export type SignUpFailed = ActionWithPayload<USER_ACTIONS_TYPE.SIGN_UP_FAILED, Error>;

export type SignOutStart = Action<USER_ACTIONS_TYPE.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS>;
export type SignOutFailed = Action<USER_ACTIONS_TYPE.SIGN_OUT_FAILED>;

export const checkUserSession = () => withMatcher((): CheckUserSession => createAction(USER_ACTIONS_TYPE.CHECK_USER_SESSION));
export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => createAction(USER_ACTIONS_TYPE.SET_CURRENT_USER, user));

export const googleSignInStart = withMatcher(() => createAction(USER_ACTIONS_TYPE.GOOGLE_SIGN_IN_START));
export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => createAction(USER_ACTIONS_TYPE.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher((user: UserData): SignInSuccess => createAction(USER_ACTIONS_TYPE.SIGN_IN_SUCCESS, { user }));
export const signInFailed = withMatcher((error: Error): SignInFailed => createAction(USER_ACTIONS_TYPE.SIGN_IN_FAILURE, { error }));

export const signUpStart = withMatcher(
  (email: string, password: string, dispayName: string): SignUpStart =>
    createAction(USER_ACTIONS_TYPE.SIGN_UP_START, { email, password, dispayName })
);
export const signUpSuccess = withMatcher(
  (user: UserData, additionaDetails: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTIONS_TYPE.SIGN_UP_SUCCESS, { user, additionaDetails })
);
export const signUpFailed = withMatcher((error: Error): SignUpFailed => createAction(USER_ACTIONS_TYPE.SIGN_UP_FAILED, error));

export const signOutStart = withMatcher(() => createAction(USER_ACTIONS_TYPE.SIGN_OUT_START));

export const signOutSuccess = withMatcher(() => createAction(USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS));
export const signOutFailed = withMatcher(() => createAction(USER_ACTIONS_TYPE.SIGN_OUT_FAILED));
