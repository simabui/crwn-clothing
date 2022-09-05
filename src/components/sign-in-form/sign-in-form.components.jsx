import React, { useState, useContext } from "react";
import { signInWIthGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button-component";
import "./sign-in-form.scss";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  function handleChange({ target: { name, value } }) {
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formFields;

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);

      setFormFields(defaultFormFields);
      setCurrentUser(user);
    } catch (e) {
      console.error(e.message);
      alert(e.message);
    }
  }

  async function signInWithGoogle() {
    const response = await signInWIthGooglePopup();

    await createUserDocumentFromAuth(response.user);
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" handleClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
