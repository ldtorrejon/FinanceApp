import { FC } from "react";

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
        Already have an account? <a href="/login">Login</a>
      </div>
    </form>
  );
};
