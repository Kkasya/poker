import React from "react";
import {fee} from "../../../../common/variables";
import Btn from "../../../btn/btn";

const Amount = () => {

  const setMinAmount = () => {

  };

   const setMaxAmount = () => {

  };

   const setBankAmount = () => {

  };
   const setHalfBankAmount = () => {

  };



  return (
    <div className="amount">
      <div className="amount__total">
        <input type="amount__number"/>
        <div className="amount__scroll"></div>
      </div>
      <div className="amount__btns">
        <Btn name='Min' classBtn='amount__btn' callback={setMinAmount} />
        <Btn name='Max' classBtn='amount__btn' callback={setMaxAmount} />
        <Btn name='Bank' classBtn='amount__btn' callback={setBankAmount} />
        <Btn name='1/2 Bank' classBtn='amount__btn' callback={setHalfBankAmount} />
      </div>
      <p className="amount__warning"> {fee.warning} </p>
    </div>
  )
};

export default Amount;