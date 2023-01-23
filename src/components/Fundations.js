import React from "react";
import useNews, { FUNDATIONS } from "../hooks/useNews";
import styles from "./Fundations.module.scss";
import Pagination from "./Pagination";

const Fundations = () => {
  const { rows, pagination } = useNews(FUNDATIONS);
  const { currentPage, maxPage, setPage } = pagination;

  return (
    <div className={styles.fundations}>
      <p className={styles.fundations__text}>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br></br>{" "}
        którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br></br>{" "}
        komu pomagają i czego potrzebują.
      </p>
      {rows.map(({ title, items, description }, index) => {
        return (
          <div className={styles.news}>
            <div className={styles.news__content}>
              <div className={styles.news__box}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__description}>{description}</p>
              </div>

              <p className={styles.news__items}>{items}</p>
              </div>
            {rows.length - 1 !== index && (
              <div className={styles.news__line}></div>
            )}
          </div>
        );
      })}
      <Pagination
        currentPage={currentPage}
        maxPage={maxPage}
        setPage={setPage}
      />
    </div>
  );
};

export default Fundations;
