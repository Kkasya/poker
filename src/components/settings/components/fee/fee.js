import React from "react";
import Bank from "./bank";
import Amount from "./amount";
import {fee} from "../../../../common/constants";
import Btn from "../../../btn/btn";
import settingsStore from "../../../../store/settingsStore";

const Fee = () => {

  const toggleAutoSettings = () => settingsStore.setIsOpenAutoSettings();

  return (
    <div className="fee">
      <h3 className="text text_big fee__headline">{fee.headline}</h3>
      <Bank/>
      <Amount/>
      <Btn name={fee.nameExtraBtn} classBtn='extra__btn' callback={toggleAutoSettings}>
        <span className="arrow"></span>
        <span className="arrow arrow_next"></span>
      </Btn>
    </div>
  )
};

export default Fee;