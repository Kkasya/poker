import React, {useEffect} from "react";
import {fee} from "../../../../common/constants";
import Btn from "../../../btn/btn";
import {observer} from "mobx-react-lite";
import feeStore from "../../../../store/feeStore";
import Slider from "./slider";

const Amount = observer(() => {

  const setMinBet = () => feeStore.setMinBet();
  const setMaxBet = () => feeStore.setMaxBet();
  const setBankBet = () => feeStore.setBankBet();
  const setHalfBankBet = () => feeStore.setHalfBankBet();

      const setBet = (number) =>  feeStore.setBet(number);

      const checkBetFromInput = (e) => {
        if (e.key === 'Enter' || e.type === 'blur') {
          if (feeStore.bet < feeStore.minBet) setBet(feeStore.minBet);
          else if (feeStore.bet > feeStore.maxBet) setBet(feeStore.maxBet);
        }
      }

      const valueSlider = {
        current: feeStore.bet,
        min: feeStore.minBet,
        max: feeStore.maxBet
      };

      useEffect(() => {
        setBet(feeStore.minBet);
      }, []);

  return (
    <div className="amount">
      <div className="amount__total">
        <input type="number"
               value={feeStore.bet}
               onChange={(e) => setBet(e.target.value)}
               onKeyDown={checkBetFromInput}
               onBlur={checkBetFromInput}
               className="input amount__input text_secondary text_big"/>
        <Slider value={valueSlider} changeValue={setBet}/>
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