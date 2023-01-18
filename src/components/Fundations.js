import React from "react";
import useNews, { FUNDATIONS } from "../hooks/useNews";
import styles from "./Fundations.module.scss";
import News from "./News";
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
      {rows.map(({ title, items, description }) => {
        return (
          <News  
          title={title}
          description={description}
          items={items}
          />
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
