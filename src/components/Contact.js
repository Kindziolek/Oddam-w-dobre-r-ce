import React from "react";
import styles from "./Contact.module.scss";
import Decoration from "../assets/Decoration.svg"

const Contact = () => {

    return (
  <div id="Contact" className={styles.contact}>
    <div className={styles.contact__content}>
    <div className={styles.contact__header}>
        <h2>Skontaktuj się z nami</h2>
        <div className={styles.contact__header__decoration_icon}>
          {" "}
          <img src={Decoration} height={33} />
        </div>
      </div>
    </div>
  </div>
    )
};

export default Contact;
