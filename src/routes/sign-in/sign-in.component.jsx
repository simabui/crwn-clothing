import React from "react";
import { signInWIthGooglePopup } from "../../utils/firebase/firebase";

export default function SignIn() {
  async function logGoogleUser() {
    const response = await signInWIthGooglePopup();
    console.log(response);
  }

  return (
    <>
      <h1>sign-in.component</h1>
      <button onClick={logGoogleUser}>Log In with Google</button>
    </>
  );
}
