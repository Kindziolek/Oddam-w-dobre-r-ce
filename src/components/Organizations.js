import React from "react";
import useNews, { ORGANIZATIONS } from "../hooks/useNews";
import styles from "./Organizations.module.scss";
import Pagination from "./Pagination";
import News from "./News";

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

export default Organizations;
