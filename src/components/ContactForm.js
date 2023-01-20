import React, { useCallback, useState } from "react";
import styles from "./ContactForm.module.scss";

const validators = {
  name: (value) => value.length && value.split(" ").length === 1,
  email: (value) => /\S+@\S+\.\S+/.test(value),
  content: (value) => value.length >= 120,
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    content: true,
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
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.form__container}>
        <label className={styles.form__box}>
          <span className={styles.form_title}>Wpisz swoje imię</span>

          <input
            name="name"
            value={form.name}
            onChange={onUpdate}
            placeholder="Krzysztof"
            className={styles.form_placeholder}
          />
          {!isValid.name && "Podane imię jest nieprawidłowe!"}
        </label>
        <label className={styles.form__box}>
          <span className={styles.form_title}>Wpisz swój email</span>

          <input
            name="email"
            type="text"
            value={form.email}
            onChange={onUpdate}
            placeholder="abc@xyz.pl"
            className={styles.form_placeholder}
          />
          {!isValid.email && "Podany email jest nieprawidłowy!"}
        </label>
      </div>
      <label className={styles.form_message}>
        <span className={styles.form_title}>Wpisz swoją wiadomość</span>
        <textarea
          name="content"
          value={form.content}
          onChange={onUpdate}
          className={`${styles.form_message_text}
          ${styles.form_placeholder}`}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        {!isValid.content && "Wiadomość musi mieć conajmniej 120 znaków"}
      </label>
      <div className={styles.form__box_btn}>
        <button className={styles.form_btn}>Wyślij</button>
      </div>
    </form>
  );
};

export default Contact;
