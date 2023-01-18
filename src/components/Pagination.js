export default ({ currentPage, maxPage, setPage }) => {
  if (maxPage === 1) {
    return null;
  }


  return (
    <ul>
      {new Array(maxPage).fill(null).map((el, i) => (
        <button onClick={() => setPage(i)}>{i + 1}</button>
      ))}
    </ul>
  );
};
