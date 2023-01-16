import React from "react";
import styles from "./Register.module.scss";
import HomeHeader from "./HomeHeader";
import Decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
  <div className={styles.header__nav}>
    <HomeHeader />
    <div className={styles.register}>
      <div className={styles.register__header}>
        <h2>Załóż konto</h2>
        <div className={styles.register__header__decoration_icon}>
          {" "}
          <img src={Decoration} height={33} />
        </div>
      </div>
      <div className={styles.register__form}>
        <form>
          <label>
            <div className={styles.form__data}>
              <div className={styles.form__box}>
                <p className={styles.form_title}>Email</p>
                <input
                  type="email"
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
              <div className={styles.form__box}>
                <p className={styles.form_title}>Powtórz hasło</p>
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
        <Link to="/logowanie" className={styles.form__btn_link}>
          Zaloguj się
        </Link>
        <button className={styles.form__btn_link}>Załóż konto</button>
      </div>
    </div>
  </div>
)
};


export default Register;
