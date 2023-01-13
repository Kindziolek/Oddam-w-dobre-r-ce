import React from "react";
import Decoration from "../assets/Decoration.svg";
import Item from "../assets/Item.png";
import Order from "../assets/Order.png";
import Decide from "../assets/Decide.png";
import Pack from "../assets/Pack.png";

const SimpleSteps = () => {
  return (
    <div className="simpleSteps">
      <div className="simpleSteps__header">
        <h2 className="simpleSteps__title">Wystarczą 4 proste kroki</h2>
        <div className="select-icon">
          {" "}
          <img src={Decoration} height={83} />
        </div>

        <div className="simpleSteps__container">
          <div className="simpleSteps__box">
            <div className="item-icon">
              {" "}
              <img src={Item} height={83} />
              <p className="simpleSteps__box-title">Wybierz rzeczy</p>
              <span className="simpleSteps__box-line"></span>
              <p className="simpleSteps__box-text">ubrania, zabawki, sprzęt i inne</p>
            </div>
          </div>
        </div>
        <div className="simpleSteps__container">
          <div className="simpleSteps__box">
            <div className="pack-icon">
              {" "}
              <img src={Pack} height={83} />
              <p className="simpleSteps__box-title">Spakuj je</p>
              <span className="simpleSteps__box-line"></span>
              <p className="simpleSteps__box-text">skorzystaj z worków na śmieci</p>
            </div>
          </div>
        </div>
        <div className="simpleSteps__container">
          <div className="simpleSteps__box">
            <div className="decide-icon">
              {" "}
              <img src={Decide} height={83} />
              <p className="simpleSteps__box-title">Zdecyduj komu chcesz pomóc</p>
              <span className="simpleSteps__box-line"></span>
              <p className="simpleSteps__box-text">wybierz zaufane miejsce</p>
            </div>
          </div>
        </div>
        <div className="simpleSteps__container">
          <div className="simpleSteps__box">
            <div className="order-icon">
              {" "}
              <img src={Order} height={83} />
              <p className="simpleSteps__box-title">Zamów kuriera</p>
              <span className="simpleSteps__box-line"></span>
              <p className="simpleSteps__box-text">kurier przyjedzie w dogodnym terminie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
