import { FC } from "react";
import { Link } from "react-router";
import styles from "../../assets/scss/RegisterForm.module.scss";
import { FormEntry } from "../loginForm/LoginForm";
import {
  USERNAME_INVALID_LENGTH,
  USERNAME_NOT_PRESENT,
  USERNAME_WHITESPACES_ERROR,
} from "../../constants/text/en-us";

export const RegisterForm: FC = () => {
  return (
    <form
      action={(formData: FormData) => handleForm(formData)}
      className={styles.registerForm}
    >
      <h1 className={styles.registerFormTitle}>Register</h1>
      <FormEntry labelText="Username" inputName="username" />
      <FormEntry
        labelText="Password"
        inputType="password"
        inputName="password"
      />
      <FormEntry
        labelText="Repeat password"
        inputType="password"
        inputName="repeatPassword"
      />
      <button className={styles.registerButton}>Register</button>
      <div style={{ textAlign: "center", marginTop: "40px", fontSize: "20px" }}>
        Already have an account?{" "}
        <Link className={styles.link} to="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

const handleForm = (formData: FormData) => {
  const username = formData.get("username");
  // TODO Validate password and repeatPassword input field.
  // const password = formData.get("password");
  // const repeatPassword = formData.get("repeatPassword");
  const errors: Array<string> = [];

  if (username) {
    getUsernameErrors(username.toString()).map((error) => errors.push(error));
  } else {
    errors.push(USERNAME_NOT_PRESENT);
  }

  console.log(errors);
};

const getUsernameErrors = (username: string): Array<string> => {
  const errors: Array<string> = [];
  const containsWhitespaces = /\s+/;
  const isValidLength = /^.{2,20}$/;

  if (containsWhitespaces.test(username))
    errors.push(USERNAME_WHITESPACES_ERROR);

  if (!isValidLength.test(username)) errors.push(USERNAME_INVALID_LENGTH);

  return errors;
};
