import React from "react";
import styles from "./Login.module.scss";
import HomeHeader from "./HomeHeader";
import Decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.header__nav}>
      <HomeHeader />
      <div className={styles.login}>
        <div className={styles.login__header}>
          <h2>Zaloguj się</h2>
          <div className={styles.login__header__decoration_icon}>
            {" "}
            <img src={Decoration} height={33} />
          </div>
        </div>
        <div className={styles.login__form}>
          <form>
            <label>
              <div className={styles.form__data}>
                <div className={styles.form__box}>
                  <p className={styles.form_title}>Email</p>
                  <input
                    type="text"
                    name="name"
                    className={styles.form_placeholder}
                  />
                </div>
                <div className={styles.form__box}>
                  <p className={styles.form_title}> Hasło</p>
                  <input
                    className={styles.form_placeholder}
                    type="password"
                    name="name"
                  />
                </div>
              </div>
            </label>

          </form>
         
        </div>
        <div className={styles.form__btn}>
            <Link to="/rejestracja" className={styles.form__btn_link}>
          Załóż konto
        </Link>
              <button className={styles.form__btn_link}>Zaloguj się</button>
            </div>
      </div>
    </div>
  );
};

export default Login;
