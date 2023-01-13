import React from "react";
import Decoration from "../assets/Decoration.svg";
import Item from "../assets/Item.png";
import Order from "../assets/Order.png";
import Decide from "../assets/Decide.png";
import Pack from "../assets/Pack.png";
import styles from "./SimpleSteps.module.scss";

const SimpleSteps = () => {
  return (
    <div className={styles.simpleSteps}>
      <div className={styles.simpleSteps__header}>
        <h2 className={styles.simpleSteps_title}>Wystarczą 4 proste kroki</h2>
        <div className={styles.select_icon}>
          {" "}
          <img src={Decoration} height={33} />
        </div>
      </div>

      <div className={styles.simpleSteps__container}>
        <div className={styles.simpleSteps__container_content}>
          <div className={styles.simpleSteps__box}>
            <div className={styles.item_icon}>
              {" "}
              <img src={Item} height={83} />
              </div>
              <p className={styles.simpleSteps__box_title}>Wybierz rzeczy</p>
              <span className={styles.simpleSteps__box_line}></span>
              <p className={styles.simpleSteps__box_text}>
                ubrania, zabawki, 
                <br></br>
                sprzęt i inne
              </p>

          </div>

          <div className={styles.simpleSteps__box}>
            <div className={styles.pack_icon}>
              {" "}
              <img src={Pack} height={83} />
              </div>
              <p className={styles.simpleSteps__box_title}>Spakuj je</p>
              <span className={styles.simpleSteps__box_line}></span>
              <p className={styles.simpleSteps__box_text}>
                skorzystaj z
                <br></br>
                 worków na śmieci
              </p>

          </div>

          <div className={styles.simpleSteps__box}>
            <div className={styles.decide_icon}>
              {" "}
              <img src={Decide} height={83} />
              </div>
              <p className={styles.simpleSteps__box_title}>
                Zdecyduj komu 
                <br></br>
                chcesz pomóc
              </p>
              <span className={styles.simpleSteps__box_line}></span>
              <p className={styles.simpleSteps__box_text}>
                wybierz zaufane
                <br></br>
                 miejsce
              </p>

          </div>

          <div className={styles.simpleSteps__box}>
            <div className={styles.order_icon}>
              {" "}
              <img src={Order} height={83} />
              </div>
              <p className={styles.simpleSteps__box_title}>Zamów kuriera</p>
              <span className={styles.simpleSteps__box_line}></span>
              <p className={styles.simpleSteps__box_text}>
                kurier przyjedzie 
                <br></br>
                w dogodnym terminie
              </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
