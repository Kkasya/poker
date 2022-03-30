import React from "react";
import chip from "../../../../assets/chip.png";
import {fee} from "../../../../common/variables";

const Bank = () => {

  return (
    <div className="bank">
      <div className="bank__chip">
        <img src={chip} alt="Chip icon" className="bank__icon"/>
        <div className="information">
          <div className="information__number">5/10</div>
          <div className="information__name">{fee.chipName}</div>
        </div>
      </div>

      <p className="bank__sum">{fee.availableSum} </p>
    </div>
  )
};

export default Bank;