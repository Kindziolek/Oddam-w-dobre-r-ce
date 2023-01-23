import React, { useCallback, useState } from "react";
import styles from "./ContactForm.module.scss";

const validators = {
  name: (value) => value.length && value.split(" ").length === 1,
  email: (value) => /\S+@\S+\.\S+/.test(value),
  message: (value) => value.length >= 120,
};

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    message: true,
  });

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const newIsValid = Object.fromEntries(
        Object.entries(form).map(([key, value]) => [
          key,
          validators[key](value),
        ])
      );

      setIsValid(newIsValid);
      setIsSuccess(false);

      if (Object.values(newIsValid).some((value) => value !== true)) {
        return;
      }

      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "post",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify(form),
        }
      ).catch((error) => alert("błąd połączenia"));

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("błąd api");
      }
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
    
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.succsess__text}>{isSuccess && "Wiadomość została wysłana! Wkrótce się skontaktujemy."}</div>
      <div className={styles.form__container}> 
        <label className={styles.form__box}>
          <span className={styles.form_title}>Wpisz swoje imię</span>

          <input
            name="name"
            value={form.name}
            onChange={onUpdate}
            placeholder="Krzysztof"
            className={`${styles.form_placeholder} ${
              !isValid.name &&
              styles.form_placeholder__validate__error_border
            }`}
          />
          <div className={styles.form_placeholder__validate__error}>
            {!isValid.name && "Podane imię jest nieprawidłowe!"}
          </div>
        </label>
        <label className={styles.form__box}>
          <span className={styles.form_title}>Wpisz swój email</span>

          <input
            name="email"
            type="text"
            value={form.email}
            onChange={onUpdate}
            placeholder="abc@xyz.pl"
            className={`${styles.form_placeholder} ${
              !isValid.email &&
              styles.form_placeholder__validate__error_border
            }`}
          />
          <div className={styles.form_placeholder__validate__error}>
            {!isValid.email && "Podany email jest nieprawidłowy!"}
          </div>
        </label>
      </div>
      <label className={styles.form_message}>
        <span className={styles.form_title}>Wpisz swoją wiadomość</span>
        <textarea
          name="message"
          value={form.message}
          onChange={onUpdate}
          className={`${styles.form_message_text}
          ${styles.form_placeholder} ${
            !isValid.message && styles.form_placeholder__validate__error_border
          }`}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <div className={styles.form_placeholder__validate__error}>
          {!isValid.message && "Wiadomość musi mieć conajmniej 120 znaków!"}
        </div>
      </label>
      <div className={styles.form__box_btn}>
        <button className={styles.form_btn}>Wyślij</button>
      </div>
    </form>
  );
};

export default Contact;
