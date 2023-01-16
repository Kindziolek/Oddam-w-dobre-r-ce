import React from "react";
import styles from "./Contact.module.scss";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";

const Contact = () => {
  return (
    <div id="Contact" className={styles.contact}>
      <div className={styles.contact__background}>
        <div className={styles.contact__contener}>
          <div className={styles.contact__content}>
            <div className={styles.contact__box}>
              <div className={styles.contact__header}>
                <h2>Skontaktuj się z nami</h2>
                <div className={styles.contact__header__decoration_icon}>
                  {" "}
                  <img src={Decoration} height={33} />
                </div>
              </div>
              <div className={styles.form}>
                <div>
                  <form>
                    <label>
                      <div className={styles.form__container}>
                        <div className={styles.form__box}>
                          <p className={styles.form_title}>
                            Wpisz swoje imię
                          </p>
                          <input
                            type="text"
                            name="name"
                            placeholder="Krzysztof"
                            className={styles.form_placeholder}
                          />
                        </div>
                        <div className={styles.form__box}>
                          <p className={styles.form_title}>
                            {" "}
                            Wpisz swój email
                          </p>
                          <input
                            className={styles.form_placeholder}
                            type="text"
                            name="name"
                            placeholder="abc@xyz.pl"
                          />
                        </div>
                      </div>
                    </label>

                    <div className={styles.form_message}>
                      <p className={styles.form_title}>
                        Wpisz swoją wiadomość
                      </p>
                      <textarea
                        className={`${styles.form_message_text}
                    ${styles.form_placeholder}`}
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      ></textarea>
                    </div>
                    <div className={styles.form__box_btn}>
                      <input
                        className={styles.form_btn}
                        type="submit"
                        value="Wyślij"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer} r>
          <div className={styles.footer__icon_hiden}>
            <div className={styles.fb_icon}>
              {" "}
              <img src={Facebook} height={0} />
            </div>
            <div className={styles.insta_icon}>
              {" "}
              <img src={Instagram} height={0} />
            </div>
          </div>
          <p className={styles.footer__text}>
            Copyright by Coders Lab
          </p>
          <div className={styles.footer__icon}>
            <div className={styles.fb_icon}>
              {" "}
              <img src={Facebook} height={30} />
            </div>
            <div className={styles.insta_icon}>
              {" "}
              <img src={Instagram} height={30} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
