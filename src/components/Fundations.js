import React from "react";
import styles from "./Fundations.module.scss";

const Fundations = () => {
  return (
    <div className={styles.fundations}>
      <p className={styles.fundations__text}>
      W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br></br>{" "}
        którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br></br>{" "}
        komu pomagają i czego potrzebują.
      </p>
    </div>
  );
};

export default Fundations;
