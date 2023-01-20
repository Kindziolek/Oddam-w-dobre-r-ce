import style from "./Pagination.module.scss";

export default ({ currentPage, maxPage, setPage }) => {
  if (maxPage === 1) {
    return null;
  }
  return (
    <div >
      {" "}
      <ul className={style.pagination__box}>
        {new Array(maxPage).fill(null).map((el, i) => (
          <button className={style.pagination__btn} onClick={() => setPage(i)}>
            {i + 1}
          </button>
        ))}
      </ul>
    </div>
  );
};
