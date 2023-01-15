import React from "react";
import styles from "./Home.module.scss";
import HomeHeader from "./HomeHeader";
import HomeHeaderContent from "./HomeHeaderContent";
import HomeHeaderBackground from "./HomeBackground";
import Statistics from "./Statistics";
import SimpleSteps from "./SimpleSteps";
import HomeAboutUs from "./HomeAboutUs";



const Home = () => {
  return (
    <div>
      <div className={styles.header__container}>
        <HomeHeaderBackground />
        <div className={styles.header__nav}>
          <HomeHeader />
          <HomeHeaderContent />
        </div>
      </div>
      <Statistics />
      <SimpleSteps />
      <HomeAboutUs />
    </div>
  );
};

export default Home;
