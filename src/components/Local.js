import React from "react";
import useNews, { LOCAL } from "../hooks/useNews";
import styles from "./Local.module.scss";
import Pagination from "./Pagination";

const Local = () => {
  const { rows, pagination } = useNews(LOCAL);
  const { currentPage, maxPage, setPage } = pagination;

  return (
    <div className={styles.local}>
      <p className={styles.local__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>{" "}
        do eiusmod tempor incididunt ut labore et dolore magna <br></br> aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation.{" "}
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
export default Local;
