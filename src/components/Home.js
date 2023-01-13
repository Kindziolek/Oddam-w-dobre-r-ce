import React from "react";
import HomeHeader from "./HomeHeader";
import HomeHeaderContent from "./HomeHeaderContent";
import HomeHeaderBackground from "./HomeBackground";
import Statistics from "./Statistics";
import SimpleSteps from "./SimpleSteps";

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
      <Statistics />
      <SimpleSteps />
    </div>
  );
};

export default Home;
