import React from "react";
import { Link } from "react-scroll";
import Decoration from "../assets/Decoration.svg";

const HomeHeaderContent = () => {
  return (
    <div className="header__content">
      <div>
        <h1 className="header__content-text">
          Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <div className="header__content-image">
          {" "}
          <img src={Decoration} height={33} />
        </div>
      </div>
      <div className="header__content__btn-box">
        <Link to="/logowanie" className="header__content-btn">
          ODDAJ
          <br></br>
          RZECZY
        </Link>
        <Link to="/logowanie" className="header__content-btn">
          ZORGANIZUJ ZBIÓRKĘ
        </Link>
      </div>
    </div>
  );
};

export default HomeHeaderContent;
