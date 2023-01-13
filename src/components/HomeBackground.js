import React from "react";
import BackgroundImage from "../assets/Hero.png";

const HomeHeaderBackground = () => {
    return (<div className="header">
    <img src={BackgroundImage} className="header__background" />
    </div>
    )
}


export default HomeHeaderBackground;