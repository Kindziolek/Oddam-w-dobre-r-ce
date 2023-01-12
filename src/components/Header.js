import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header__container">
      <div className="login__box">
        <Link to="/logowanie" className="login-btn">Zaloguj</Link>
        <Link to="/rejestracja" className="login-btn">Załóż konto</Link>
      </div>
      <div>
        <nav className="nav">
          <li className="nav-item">Start</li>
          <li className="nav-item">O co chodzi?</li>
          <li className="nav-item">O nas</li>
          <li className="nav-item">Funadacja i organizacje</li>
          <li className="nav-item">Kontakt</li>
        </nav>
      </div>
      <div>
        <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
        <Link to="/logowanie">
          <button>ODDAJ RZECZY</button>
        </Link>
        <Link to="/logowanie">
          <button>ZORGANIZUJ ZBIÓRKĘ</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
