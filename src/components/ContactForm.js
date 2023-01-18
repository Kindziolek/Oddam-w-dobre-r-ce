import React, { useCallback, useState } from "react";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import styles from "./ContactForm.module.scss";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
  });

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      console.log(form);
    },
    [form]
  );

  const onUpdate = useCallback((event) => {
    const { name, value } = event.currentTarget;
    setForm((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.form__container}>
        <label className={styles.form__box}>
          <span className={styles.form_title}>Nazwa rośliny</span>

          <input
            name="name"
            value={form.name}
            onChange={onUpdate}
            required
            placeholder="Krzysztof"
            className={styles.form_placeholder}
          />
        </label>
        <label className={styles.form__box}>
          <span className={styles.form_title}>Nazwa rośliny</span>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onUpdate}
            required
            placeholder="abc@xyz.pl"
            className={styles.form_placeholder}
          />
        </label>
      </div>
      <label className={styles.form_message}>
        <span className={styles.form_title}>Moje obserwacje</span>
        <textarea
          name="content"
          value={form.observations}
          onChange={onUpdate}
          className={`${styles.form_message_text}
          ${styles.form_placeholder}`}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </label>
        <div className={styles.form__box_btn}>
      <button className={styles.form_btn}>Zapisz</button>
      </div>
    </form>
  );
};

export default Contact;
