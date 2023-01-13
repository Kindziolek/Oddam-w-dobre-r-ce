import React from "react";
import BackgroundImage from "../assets/Hero.png";
import styles from "./HomeBackground.module.scss";

const HomeHeaderBackground = () => {
  return (
    <div className={styles.header}>
      <img src={BackgroundImage} className={styles.header__background} />
    </div>
  );
};

export default HomeHeaderBackground;
