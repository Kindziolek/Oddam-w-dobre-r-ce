import React from "react";
import styles from "./Logout.module.scss";
import HomeHeader from "./HomeHeader";
import Decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className={styles.header__nav}>
      <HomeHeader />
      <div className={styles.logout}>
        <div className={styles.logout__header}>
          <h2>Wylogowanie nastąpiło pomyślnie!</h2>
          <div className={styles.logout__header__decoration_icon}>
            {" "}
            <img src={Decoration} height={33} />
          </div>
        </div>

        <div className={styles.logout__btn}>
          <Link to="/" className={styles.logout__btn_link}>
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
