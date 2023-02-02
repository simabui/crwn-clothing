import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button-component";
import { SignUpContainer } from "./sign-up-form.jsx";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  function handleChange({ target: { name, value } }) {
    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password, confirmPassword, displayName } = formFields;

    if (password === confirmPassword) {
      try {
        dispatch(signUpStart(email, password, displayName));
        setFormFields(defaultFormFields);
      } catch (e) {
        console.error(e.message);
        alert(e.message);
      }
    }
  }
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />

        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

        <FormInput
          label="confirmPassword"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Submit</Button>
      </form>
    </SignUpContainer>
  );
}
