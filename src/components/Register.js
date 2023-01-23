import React, { useCallback, useState } from "react";
import styles from "./Register.module.scss";
import HomeHeader from "./HomeHeader";
import Decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const validators = {
  email: (value) => /\S+@\S+\.\S+/.test(value),
  password: (value, { confirmPassword }) => {
    return value.length > 6 && value === confirmPassword;
  },
  confirmPassword: (value, { password }) => {
    return value.length > 6 && value === password;
  },
};

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
    confirmPassword: true,
  });

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const newIsValid = Object.fromEntries(
        Object.entries(form).map(([key, value]) => [
          key,
          validators[key](value, form),
        ])
      );

      setIsValid(newIsValid);

      if (Object.values(newIsValid).some((value) => value !== true)) {
        alert("nie wysyła danych");
      }

      console.log(form);
    },
    [form, isValid]
  );

  const onUpdate = useCallback(
    (event) => {
      const { name, value } = event.currentTarget;

      setIsValid((values) => ({
        ...values,
        [name]: validators[name](value, form),
      }));

      setForm((formValues) => ({
        ...formValues,
        [name]: value,
      }));
    },
    [form]
  );

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
          <form onSubmit={onSubmit}>
            <label>
              <div className={styles.form__data}>
                <div className={styles.form__box}>
                  <span className={styles.form_title}>Email</span>
                  <input
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={onUpdate}
                    className={`${styles.form_placeholder} ${
                      !isValid.email &&
                      styles.form_placeholder__validate__error_border
                    }`}
                  />
                  <div className={styles.form_placeholder__validate__error}>
                    {!isValid.email && "Podany email jest nieprawidłowy!"}
                  </div>
                </div>
                <div className={styles.form__box}>
                  <span className={styles.form_title}> Hasło</span>
                  <input
                    className={`${styles.form_placeholder} ${
                      !isValid.password &&
                      styles.form_placeholder__validate__error_border
                    }`}
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onUpdate}
                  />
                  <div className={styles.form_placeholder__validate__error}>
                    {!isValid.password && "Podane hasło jest za krótkie!"}
                  </div>
                </div>
                <div className={styles.form__box}>
                  <span className={styles.form_title}> Powtórz hasło</span>
                  <input
                    className={`${styles.form_placeholder} ${
                      !isValid.confirmPassword &&
                      styles.form_placeholder__validate__error_border
                    }`}
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={onUpdate}
                  />
                  <div className={styles.form_placeholder__validate__error}>
                    {!isValid.confirmPassword && "Podane hasła różnią się!"}
                  </div>
                </div>
              </div>
            </label>
            <div className={styles.form__btn}>
              <Link to="/logowanie" className={styles.form__btn_link}>
                Zaloguj się
              </Link>
              <button className={styles.form__btn_link}>Załóż konto</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
