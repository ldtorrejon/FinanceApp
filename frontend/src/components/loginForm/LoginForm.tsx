import { FC } from "react";
import styles from "../../assets/scss/LoginForm.module.scss";

const LoginEntry: FC<{ entryName: string }> = ({ entryName }) => {
  return (
    <div className={styles.loginEntry}>
      <label>{entryName}</label>
      <input></input>
    </div>
  );
};

export const LoginForm: FC = () => {
  return (
    <form className={styles.loginForm}>
      <h2>Login</h2>
      <LoginEntry entryName="username" />
      <LoginEntry entryName="password" />
      <div>
        Don't have an account yet? <a href="/register">Register</a>
      </div>
      <button type="submit">login</button>
    </form>
  );
};
