import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button-component";
import "./sign-up-form.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUpForm() {
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
        const res = await createAuthUserWithEmailAndPassword(email, password);

        await createUserDocumentFromAuth(res.user, { displayName });
        setFormFields(defaultFormFields);

        alert(`Succeffuly registered ${displayName}`);
      } catch (e) {
        console.error(e.message);
        alert(e.message);
      }
    }
  }
  return (
    <div className="sign-up-container">
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
    </div>
  );
}
