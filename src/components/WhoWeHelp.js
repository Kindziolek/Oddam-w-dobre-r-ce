import React, { useState } from "react";
import styles from "./WhoWeHelp.module.scss";
import Decoration from "../assets/Decoration.svg";
import Organizations from "./Organizations";
import Local from "./Local";
import Fundations from "./Fundations";
import { FUNDATIONS, LOCAL, ORGANIZATIONS } from "../hooks/useNews";

const WhoWeHelp = () => {
  const [activeTab, setActiveTab] = useState(FUNDATIONS);
  return (
    <div id="WhoWeHelp" className={styles.whoWeHelp}>
      <div className={styles.whoWeHelp__header}>
        <h2>Komu pomagamy?</h2>
        <div className={styles.whoWeHelp__header__decoration_icon}>
          {" "}
          <img src={Decoration} height={33} />
        </div>
      </div>
      <div className={styles.whoWeHelp__menu}>
        <button
          type="button"
          className={styles.whoWeHelp__btn}
          onClick={() => setActiveTab(FUNDATIONS)}
        >
          Fundacjom
        </button>
        <button
          type="button"
          className={styles.whoWeHelp__btn}
          onClick={() => setActiveTab(ORGANIZATIONS)}
        >
          Organizacjom <br></br> pozarządowym
        </button>
        <button
          type="buttom"
          className={styles.whoWeHelp__btn}
          onClick={() => setActiveTab(LOCAL)}
        >
          Lokalnym <br></br> zbiórkom
        </button>
      </div>
      {activeTab === FUNDATIONS && (
        <div>
          <Fundations />
        </div>
      )}
      {activeTab === ORGANIZATIONS && (
        <div>
          <Organizations />
        </div>
      )}
      {activeTab === LOCAL && (
        <div>
          <Local />
        </div>
      )}
    </div>
  );
};

export default WhoWeHelp;
