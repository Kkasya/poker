import React from "react";
import chip from "../../../../assets/chip.png";
import {fee} from "../../../../common/constants";

const Bank = () => {

  return (
    <div className="bank">
      <div className="bank__chip">
        <img src={chip} alt="Chip icon" className="bank__icon"/>
        <div className="information">
          <div className="text text_middle information__text">5/10</div>
          <div className="text text_middle information__text">{fee.chipName}</div>
        </div>
      </div>

      <p className="text text_middle bank__sum">{fee.availableSum} </p>
    </div>
  )
};

export default Bank;