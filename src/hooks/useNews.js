//zadeklaruj 3 zmienne, localNews, ..., fi

import { useState } from "react";
import news from "./news.json";

const FUNDATIONS = "fundations";
const ORGANIZATIONS = "organizations";
const LOCAL = "local";

export default (targetType) => {
  const [page, setPage] = useState(0);
  const rows = news.filter(({ type }) => type === targetType);

  const rowsPerPage = 3;

  const pagination = {
    rowsPerPage,
    currentPage: page,
    maxPage: Math.ceil(rows.length / rowsPerPage),
    setPage,
  };

  return {
    rows: rows.filter((_, i) => i >= page && i < page + rowsPerPage),
    pagination,
  };
};

export { FUNDATIONS, ORGANIZATIONS, LOCAL };
