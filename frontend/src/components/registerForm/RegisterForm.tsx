import { FC } from "react";
import { Link } from "react-router";
import styles from "../../assets/scss/RegisterForm.module.scss";
import { FormEntry } from "../loginForm/LoginForm";

export const RegisterForm: FC = () => {
  return (
    <form className={styles.registerForm}>
      <h1 className={styles.registerFormTitle}>Register</h1>
      <FormEntry labelName="Username" />
      <FormEntry labelName="Password" inputType="password" />
      <FormEntry labelName="Repeat password" inputType="password" />
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
