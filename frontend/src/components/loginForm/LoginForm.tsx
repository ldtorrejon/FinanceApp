import { FC } from "react";
import styles from "../../assets/scss/LoginForm.module.scss";
import { Link } from "react-router";

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
        Don't have an account yet? <Link to="/register">Register</Link>
      </div>
      <button type="submit">login</button>
    </form>
  );
};
