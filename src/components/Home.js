import React from "react";
import HomeHeader from "./HomeHeader";
import HomeHeaderContent from "./HomeHeaderContent";
import HomeHeaderBackground from "./HomeBackground";

const Home = () => {
  return (
    <div>
      <div className="header__container">
        <HomeHeaderBackground />
        <div className="header__nav">
          <HomeHeader />
          <HomeHeaderContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
