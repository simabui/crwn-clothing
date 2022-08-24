import React from "react";
import { signInWIthGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

export default function SignIn() {
  async function logGoogleUser() {
    const response = await signInWIthGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(response.user);
  }

  return (
    <>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Log In with Google</button>
    </>
  );
}
