import {makeAutoObservable} from "mobx";

const localSettings = JSON.parse(localStorage.getItem('autoSettings'));

class AutoSettingsStore {
  seatCount = localSettings && localSettings.seatCount || 2;
  purchaseCount = localSettings && localSettings.purchaseCount || 2;
  myCount = localSettings && localSettings.myCount || 2;

  isNoticeSeat = localSettings && localSettings.isNoticeSeat || false;
  isNoticePurchase = localSettings && localSettings.isNoticePurchase || false;
  isNoticeSave = localSettings && localSettings.isNoticeSave || false;

  isCheckedSeat = localSettings && localSettings.isCheckedSeat || false;
  isCheckedPurchase = localSettings && localSettings.isCheckedPurchase || false;
  isCheckedSave = localSettings && localSettings.isCheckedSave || false;

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
    if (this.isNoticePurchase) this.isNoticePurchase = false;
    this.isNoticeSave = !this.isNoticeSave;
  };

  toggleIsCheckedSeat = () => this.isCheckedSeat = !this.isCheckedSeat;
  toggleIsCheckedPurchase = () => this.isCheckedPurchase = !this.isCheckedPurchase;
  toggleIsCheckedSave = () => {
    this.isCheckedSave = !this.isCheckedSave;
    if (!this.isNoticeSave)
      localStorage.removeItem('autoSettings')
  }
}

export default new AutoSettingsStore();