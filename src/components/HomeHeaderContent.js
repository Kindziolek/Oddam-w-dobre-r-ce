import React from "react";
import { Link } from "react-scroll";
import Decoration from "../assets/Decoration.svg";

const HomeHeaderContent = () => {
  return (
    <div className="header__content">
      <div>
        <h1 className="header__content-text">
          Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <div>
          {" "}
          <img src={Decoration} height={33} />
        </div>
      </div>
      <div className="header__content__bnt-box">
        <Link to="/logowanie" className="header__content-btn">
          ODDAJ RZECZY
        </Link>
        <Link to="/logowanie" className="header__content-btn">
          ZORGANIZUJ ZBIÓRKĘ
        </Link>
      </div>
    </div>
  );
};

export default HomeHeaderContent;
