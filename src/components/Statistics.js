import React from "react";
import StatisticsBackground from "../assets/3ColumnsBackground.png";

const Statistics = () => {
  return (
    // <img src={StatisticsBackground} height={384}/>
    <div className="statistics">
      <div className="statistics__container">
        <div className="statistics__box">
          <p className="statistics__number">10</p>
          <p className="statistics__header">ODDANYCH WORKÓW</p>
          <p className="statistics__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="statistics__box">
          <p className="statistics__number">5</p>
          <p className="statistics__header">WSPARTYCH ORGANIZACJI</p>
          <p className="statistics__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="statistics__box">
          <p className="statistics__number">7</p>
          <p className="statistics__header">ZORGANIZOWANY ZBIÓREK</p>
          <p className="statistics__text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
