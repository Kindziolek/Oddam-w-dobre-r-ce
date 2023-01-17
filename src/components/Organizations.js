import React from "react";
import useNews, { ORGANIZATIONS } from "../hooks/useNews";
import styles from "./Organizations.module.scss";
import Pagination from "./Pagination";

const Organizations = () => {
  const { rows, pagination } = useNews(ORGANIZATIONS);
  const { currentPage, maxPage, setPage } = pagination;

  return (
    <div className={styles.organizations}>
      <p className={styles.organizations_text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>{" "}
        do eiusmod tempor incididunt ut labore et dolore magna <br></br> aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation.{" "}
      </p>

      {rows.map(({ title, items, description }) => {
        return (
          <div className={styles.news}>
            <div className={styles.news__content}>
              <div className={styles.news__box}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__description}>{description}</p>
              </div>

              <p className={styles.news__items}>{items}</p>
            </div>
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

export default Organizations;
