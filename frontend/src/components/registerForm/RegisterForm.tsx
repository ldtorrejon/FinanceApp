import { FC } from "react";
import { Link } from "react-router";

const RegisterEntry: FC<{ entryName: string }> = ({ entryName }) => {
  return (
    <div>
      <label>{entryName}</label>
      <input></input>
    </div>
  );
};

export const RegisterForm: FC = () => {
  return (
    <form>
      <h2>Register</h2>
      <RegisterEntry entryName="username" />
      <RegisterEntry entryName="password" />
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </form>
  );
};
