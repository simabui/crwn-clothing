import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";
import { AuthenticationContainer } from "./authentication.styles.jsx";

export default function SignIn() {
  useEffect(() => {
    async function getRedirect(auth) {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    }

    getRedirect(auth);
  }, []);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
