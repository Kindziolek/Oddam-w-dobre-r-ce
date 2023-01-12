import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (

    <div>
        <div>
            <Link to="/logowanie">
                <button>Zaloguj</button>
            </Link>
            <Link to="/rejestracja">
                <button>Załóż konto</button>
            </Link>
        </div>
        <div>
            <nav>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Funadacja i organizacje</li>
                <li>Kontakt</li>
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
