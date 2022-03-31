import {makeAutoObservable} from "mobx";

class FeeStore {
  bank = 2609;
  bet = 0;
  lastAmount = 12800;
  minBet = 1000;
  maxBet = 30000;

  constructor() {
    makeAutoObservable(this);
  }

  setBet = (number) => this.bet = number;

  setMinBet = () => this.bet = this.minBet;
  setMaxBet = () => this.bet = this.maxBet;
  setBankBet = () => this.bet = this.bank;
  setHalfBankBet = () => this.bet = this.bank / 2;

  get isNotice() {
    return (this.bet < this.lastAmount);
  };
}

export default new FeeStore();