import React from "react";
import Fee from "./components/fee/fee";
import AutoSettings from "./components/autoSettings/autoSettings";
import Btn from "../btn/btn";
import {observer} from "mobx-react-lite";
import settingsStore from "../../store/settingsStore";

const Settings = observer(() => {

  const closeSettings = () => settingsStore.closeSettings();
  const openCashier = () => {};

  return (
    <div className="settings">
      <div className="settings__inner">
        <Fee />
        {settingsStore.isOpenAutoSettings && <span className="shape settings__shape"></span> }
        {settingsStore.isOpenAutoSettings && <AutoSettings/>}
      </div>
      <div className="settings__btns">
        <Btn name='Ок' classBtn='btn settings__btn' callback={closeSettings} />
        <Btn name='Cashier' classBtn='btn settings__btn' callback={openCashier} />
        <Btn name='Cancel' classBtn='btn settings__btn' callback={closeSettings} />
      </div>
    </div>
  )
});

export default Settings;