import React from "react";
import useNews from "../hooks/useNews";
import styles from "./Fundations.module.scss";

const Fundations = () => {
  const { fundationsNews } = useNews();

  return (
    <div className={styles.fundations}>
      <p className={styles.fundations__text}>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br></br>{" "}
        którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br></br>{" "}
        komu pomagają i czego potrzebują.
      </p>
      {fundationsNews.map(({ title, items, description }) => {
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
            <div className={styles.news__content}>
              <div className={styles.news__box}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__items}>{items}</p>
              </div>
              <p className={styles.news__description}>{description}</p>
            </div>
            <div className={styles.news__line}></div>
            <div className={styles.news__content}>
              <div className={styles.news__box}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__items}>{items}</p>
              </div>
              <p className={styles.news__description}>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Fundations;
