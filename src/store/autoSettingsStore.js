import {makeAutoObservable} from "mobx";
import {defaultSettings} from "../common/constants";

const localSettings = JSON.parse(localStorage.getItem('autoSettings'));
const currentSettings = localSettings || defaultSettings;

class AutoSettingsStore {
  seatCount = currentSettings.seatCount;
  purchaseCount = currentSettings.purchaseCount;
  myCount = currentSettings.myCount;

  isNoticeSeat = currentSettings.isNoticeSeat;
  isNoticePurchase = currentSettings.isNoticePurchase;
  isNoticeSave = currentSettings.isNoticeSave;

  isCheckedSeat = currentSettings.isCheckedSeat;
  isCheckedPurchase = currentSettings.isCheckedPurchase;
  isCheckedSave = currentSettings.isCheckedSave;

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