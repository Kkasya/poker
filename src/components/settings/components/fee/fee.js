import React from "react";
import Bank from "./bank";
import Amount from "./amount";
import {fee} from "../../../../common/variables";
import Btn from "../../../btn/btn";

const Fee = () => {

  const toggleAutoSettings = () => {

  };

  return (
    <div className="fee">
      <h3 className="headline fee__headline">{fee.headline}</h3>
      <Bank />
      <Amount />
      <Btn name={fee.nameExtraBtn} classBtn='extra__btn' callback={toggleAutoSettings}>
        <span className="arrow"></span>
      </Btn>
    </div>
  )
};

export default Fee;