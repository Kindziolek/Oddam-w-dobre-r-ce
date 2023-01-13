import React from "react";
import { Link } from "react-scroll";
import BackgroundImage from "../assets/Hero.png";

const Header = () => {
  return (
    <div className="header">
      <img src={BackgroundImage} className="header__background" />
      <div className="menu">
        <div className="menu__top">
          <Link to="/logowanie" className="login-btn">
            Zaloguj
          </Link>
          <Link to="/rejestracja" className="login-btn">
            Załóż konto
          </Link>
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
      </div>
    </div>
  );
};

export default Header;
