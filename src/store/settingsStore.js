import {makeAutoObservable} from "mobx";

class SettingsStore {
  isOpenAutoSettings = false;
  isOpenSettings = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpenAutoSettings = () => this.isOpenAutoSettings = !(this.isOpenAutoSettings);
  setIsOpenSettings = () => this.isOpenSettings = !(this.isOpenSettings);
}

export default new SettingsStore();