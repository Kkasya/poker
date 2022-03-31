import {makeAutoObservable} from "mobx";

class AutoSettingsStore {
  seatCount = 2;
  purchaseCount = 2;
  myCount = 2;

  isNoticeSeat = false;
  isNoticePurchase = false;
  isNoticeSave = false;

  isCheckedSeat = false;
  isCheckedPurchase = false;
  isCheckedSave = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSeatCount = (number) => this.seatCount = number;
  setPurchaseCount = (number) => this.purchaseCount = number;
  setMyCount = (number) => this.myCount = number;

  toggleIsNoticeSeat = () => {
    this.isNoticePurchase = false;
    this.isNoticeSave = false;
    this.isNoticeSeat = !this.isNoticeSeat;
  };

  toggleIsNoticePurchase = () => {
    this.isNoticeSeat = false;
    this.isNoticeSave = false;
    this.isNoticePurchase = !this.isNoticePurchase;
  };

  toggleIsNoticeSave = () => {
    this.isNoticeSeat = false;
    if(this.isNoticePurchase) this.isNoticePurchase = false;
    this.isNoticeSave = !this.isNoticeSave;
  };

  toggleIsCheckedSeat = () => this.isCheckedSeat = !this.isCheckedSeat;
  toggleIsCheckedPurchase = () => this.isCheckedPurchase = !this.isCheckedPurchase;
  toggleIsCheckedSave = () => this.isCheckedSave = !this.isCheckedSave;
}

export default new AutoSettingsStore();