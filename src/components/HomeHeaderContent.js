import React from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/Decoration.svg";
import styles from "./HomeHeaderContent.module.scss";

const HomeHeaderContent = () => {
  return (
    <div className={styles.header__content}>
      <div>
        <h1 className={styles.header__content_text}>
          Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <div className={styles.header__content_image}>
          {" "}
          <img src={Decoration} height={33} />
        </div>
      </div>
      <div className={styles.header__content__box}>
        <Link to="/logowanie" className={styles.header__content__box_link}>
          ODDAJ
          <br></br>
          RZECZY
        </Link>
        <Link to="/logowanie" className={styles.header__content__box_link}>
          ZORGANIZUJ ZBIÓRKĘ
        </Link>
      </div>
    </div>
  );
};

export default HomeHeaderContent;
