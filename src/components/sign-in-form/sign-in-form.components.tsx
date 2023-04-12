import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { FormInput } from "../form-input/form-input.component";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button-component";
import { SignInContainer, Buttons } from "./sign-in-form";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  function handleChange({ target: { name, value } }: ChangeEvent<HTMLInputElement>) {
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password } = formFields;

    try {
      await dispatch(emailSignInStart(email, password));

      setFormFields(defaultFormFields);
    } catch (e) {
      console.error(e);
      alert(e);
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
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} handleClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </Buttons>
      </form>
    </SignInContainer>
  );
}
