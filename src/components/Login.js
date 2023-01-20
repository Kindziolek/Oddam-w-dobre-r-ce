import React, { useCallback, useState } from "react";
import styles from "./Login.module.scss";
import HomeHeader from "./HomeHeader";
import Decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const validators = {
email: (value) => /\S+@\S+\.\S+/.test(value),
password: (value) => value.lenght >= 6,
}

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const newIsValid = Object.fromEntries(
        Object.entries(form).map(([key, value]) => [
          key,
          validators[key](value),
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

  const onUpdate = useCallback((event) => {
    const { name, value } = event.currentTarget;

    setIsValid((values) => ({
      ...values,
      [name]: validators[name](value),
    }));

    setForm((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  }, []);

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
                     className={styles.form_placeholder}
                  />
                  <div className={styles.validate__error}>{!isValid.name && "Podany email jest nieprawidłowy!"}</div>
                </div>
                <div className={styles.form__box}>
                  <span className={styles.form_title}> Hasło</span>
                  <input
                    className={styles.form_placeholder}
                    type="password"
                    name="name"
                     value={form.password}
                     onChange={onUpdate}
                  />
                    <div className={styles.validate__error}>{!isValid.name && "Podane hasło jest za krótkie!"}</div>
                </div>
              </div>
            </label>
            <div className={styles.form__btn}>
            <Link to="/rejestracja" className={styles.form__btn_link}>
          Załóż konto
        </Link>
              <button className={styles.form__btn_link}>Zaloguj się</button>
            </div>
          </form>
         
        </div>

      </div>
    </div>
  );
};

export default Login;
