import {makeAutoObservable} from "mobx";

class SettingsStore {
  isOpenAutoSettings = false;
  isOpenSettings = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpenAutoSettings = () => this.isOpenAutoSettings = !(this.isOpenAutoSettings);
  closeSettings = () => this.isOpenSettings = false;

}

export default new SettingsStore();