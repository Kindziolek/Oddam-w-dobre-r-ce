import React from "react";
import styles from "./HomeAboutUs.module.scss";
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import { Link } from "react-router-dom";

const HomeAboutUs = () => {
  return (
    <div id="AboutUs" className={styles.aboutUs}>
      <div className={styles.aboutUs__content}>
        <div className={styles.aboutUs__content_box}>
          <h2 className={styles.aboutUs__content_header}>O nas</h2>
          <div className={styles.aboutUs__content__decoration_icon}>
            {" "}
            <img src={Decoration} height={33} />
          </div>
          <p className={styles.aboutUs__content_text}>
            Nori grape silver beet broccoli kombu beet <br></br> greens fava bean potato
            quandong celery.<br></br> Bunya nuts black-eyed pea prairie turnip leek <br></br>
            lentil turnip greens parsnip.
          </p>
        </div>
        <div className={styles.aboutUs__content_signature}>
          {" "}
          <img src={Signature} height={149} />
        </div>
      </div>
      <div className={styles.aboutUs_image}></div>
    </div>
  );
};

export default HomeAboutUs;
