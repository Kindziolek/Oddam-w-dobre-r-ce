import React from "react";
import styles from "./Contact.module.scss";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import ContactForm from "./ContactForm";

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
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
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
          <p className={styles.footer__text}>Copyright by Coders Lab</p>
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
