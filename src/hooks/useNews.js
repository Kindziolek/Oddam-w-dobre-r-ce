//zadeklaruj 3 zmienne, localNews, ..., fi

import news from "./news.json";

const FUNDATIONS = "fundations";
const ORGANIZATIONS = "organizations";
const LOCAL = "local";

export default () => {
  const fundationsNews = news.filter(({type}) => type === FUNDATIONS);
  const organizationsNews = news.filter(({type}) => type === ORGANIZATIONS);
  const localNews = news.filter(({type}) => type === LOCAL);

  return {
    fundationsNews, organizationsNews, localNews
  };
};

export { FUNDATIONS, ORGANIZATIONS, LOCAL };
