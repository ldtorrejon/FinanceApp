import React from "react";
import styles from "../../assets/scss/Navbar.module.scss";
import { Link } from "react-router";
import piggy from "../../assets/icons/piggy.svg";
import home from "../../assets/icons/home.svg";
import profile from "../../assets/icons/profile.svg";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="finance">
        <img src={piggy} />
      </Link>
      <Link to="feed">
        <img src={home} />
      </Link>
      <Link to="profile">
        <img src={profile} />
      </Link>
    </div>
  );
};
