import React from "react";
import StatisticsBackground from "../assets/3ColumnsBackground.png";
import styles from "./Statistics.module.scss";

const Statistics = () => {
  return (
    // <img src={StatisticsBackground} height={384}/>
    <div className={styles.statistics}>
      <div className={styles.statistics__container}>
        <div className={styles.statistics__box}>
          <p className={styles.statistics__number}>10</p>
          <p className={styles.statistics__header}>ODDANYCH WORKÓW</p>
          <p className={styles.statistics__text}>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className={styles.statistics__box}>
          <p className={styles.statistics__number}>5</p>
          <p className={styles.statistics__header}>WSPARTYCH ORGANIZACJI</p>
          <p className={styles.statistics__text}>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className={styles.statistics__box}>
          <p className={styles.statistics__number}>7</p>
          <p className={styles.statistics__header}>ZORGANIZOWANY ZBIÓREK</p>
          <p className={styles.statistics__text}>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
