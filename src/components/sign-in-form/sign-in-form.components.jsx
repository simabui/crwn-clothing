import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button-component";
import { SignInContainer, Buttons } from "./sign-in-form.jsx";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  function handleChange({ target: { name, value } }) {
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formFields;

    try {
      await dispatch(emailSignInStart(email, password));

      setFormFields(defaultFormFields);
    } catch (e) {
      console.error(e.message);
      alert(e.message);
    }
  }

  async function signInWithGoogle() {
    dispatch(googleSignInStart());
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

        <Buttons>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" handleClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </Buttons>
      </form>
    </SignInContainer>
  );
}
