import React from "react";
import styles from "./News.module.scss";




const News = ({ title, items, description }) => {


  return (
  <div className={styles.news}>
    <div className={styles.news__content}>
      <div className={styles.news__box}>
        <p className={styles.news__title}>{title}</p>
        <p className={styles.news__description}>{description}</p>
      </div>
      <p className={styles.news__items}>{items}</p>
    </div>
    <div className={styles.news__line}></div>
  </div>

  )
};

export default News;