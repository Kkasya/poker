import React from "react";
import {fee} from "../../../../common/constants";
import Btn from "../../../btn/btn";
import {observer} from "mobx-react-lite";
import feeStore from "../../../../store/feeStore";

const Amount = observer(() => {

  const setMinBet = () => feeStore.setMinBet();
  const setMaxBet = () => feeStore.setMaxBet();
  const setBankBet = () => feeStore.setBankBet();
  const setHalfBankBet = () => feeStore.setHalfBankBet();

      const setBet = (number) =>  feeStore.setBet(number);

  return (
    <div className="amount">
      <div className="amount__total">
        <input type="number" value={feeStore.bet} onChange={(e) => setBet(e.target.value)} className="input amount__input text_secondary text_big"/>
        <div className="amount__scroll"></div>
      </div>
      <div className="amount__btns">
        <Btn name='Min' classBtn='amount__btn' callback={setMinBet} />
        <Btn name='Max' classBtn='amount__btn' callback={setMaxBet} />
        <Btn name='Bank' classBtn='amount__btn' callback={setBankBet} />
        <Btn name='1/2 Bank' classBtn='amount__btn' callback={setHalfBankBet} />
      </div>
      {feeStore.isNotice && <p className="amount__warning text text_small"> {fee.warning} </p>}
    </div>
  )
});

export default Amount;