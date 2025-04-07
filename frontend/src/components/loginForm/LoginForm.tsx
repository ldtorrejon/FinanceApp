import { FC } from "react";
import styles from "../../assets/scss/LoginForm.module.scss";
import { Link } from "react-router";

export const FormEntry: FC<{
  labelText: string;
  inputType?: string;
  inputName: string;
}> = ({ labelText, inputType, inputName }) => {
  return (
    <div className={styles.formEntry}>
      <label style={{ fontSize: "20px" }}>{labelText}</label>
      <input
        name={inputName}
        className={styles.inputFormEntry}
        type={inputType}
      ></input>
    </div>
  );
};

export const LoginForm: FC = () => {
  return (
    <form className={styles.loginForm}>
      <h1 className={styles.loginFormTitle}>Login</h1>
      <FormEntry labelText="Username" inputName="username" />
      <FormEntry
        labelText="Password"
        inputType="password"
        inputName="password"
      />
      <button className={styles.loginButton} type="submit">
        Login
      </button>
      <div style={{ textAlign: "center", marginTop: "40px", fontSize: "20px" }}>
        Don't have an account yet?{" "}
        <Link className={styles.link} to="/register">
          Register
        </Link>
      </div>
    </form>
  );
};
