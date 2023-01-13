import React from "react";
import Header from "./HomeHeader";
import HeaderContent from "./HomeHeaderContent";
import HeaderBackground from "./HomeBackground";

const Home = () => {
  return (
    <div className="header__container">
      <div>
        <HeaderBackground />
        <div className="header__">
          <Header />
          <HeaderContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
