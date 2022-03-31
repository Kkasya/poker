import {makeAutoObservable} from "mobx";

class SettingsStore {
  isOpenAutoSettings = false;
  isOpenSettings = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpenAutoSettings = () => this.isOpenAutoSettings = !(this.isOpenAutoSettings);
  setOpenSettings = () => this.isOpenSettings = true;
  setCloseSettings = () => this.isOpenSettings = false;
}

export default new SettingsStore();