import React from "react";
import useNews, { LOCAL } from "../hooks/useNews";
import styles from "./Local.module.scss";
import News from "./News";
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
export default Local;
