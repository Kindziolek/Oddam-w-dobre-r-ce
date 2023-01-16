import React from "react";
import styles from "./Contact.module.scss";
import Decoration from "../assets/Decoration.svg";

const Contact = () => {
  return (
    <div id="Contact" className={styles.contact}>
      <div className={styles.contact__background}>
        <div className={styles.contact__content}>
          <div className={styles.contact__box}>
            <div className={styles.contact__header}>
              <h2>Skontaktuj się z nami</h2>
              <div className={styles.contact__header__decoration_icon}>
                {" "}
                <img src={Decoration} height={33} />
              </div>
            </div>
            <div className={styles.contact__form}>
              <div>
                <form>
                  <label>
                    <div className={styles.contact__form__container}>
                      <div className={styles.contact__form__box}>
                        <p className={styles.contact__form_title}>
                          Wpisz swoje imię
                        </p>
                        <input
                          type="text"
                          name="name"
                          placeholder="Krzysztof"
                          className={styles.contact__form_placeholder}
                        />
                      </div>
                      <div className={styles.contact__form__box}>
                        <p className={styles.contact__form_title}>
                          {" "}
                          Wpisz swój email
                        </p>
                        <input
                                  className={styles.contact__form_placeholder}
                          type="text"
                          name="name"
                          placeholder="abc@xyz.pl"
                
                        />
                      </div>
                    </div>
                  </label>
               
                  <div className={styles.contact__form_message}>
                  <p className={styles.contact__form_title}>
                    Wpisz swoją wiadomość
                  </p>
                  <textarea className={`${styles.contact__form_message_text}
                    ${styles.contact__form_placeholder}`}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  ></textarea>
                  </div>
                  <div className={styles.contact__form__box_btn} >
                  <input className={styles.contact__form_btn} type="submit" value="Wyślij" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
