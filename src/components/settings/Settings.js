import React from "react";
import Fee from "./components/fee/fee";
import AutoSettings from "./components/autoSettings/autoSettings";
import Btn from "../btn/btn";

const Settings = () => {

  const closeSettings = () => {

  };

  const openCashier = () => {

  };

  return (
    <div className="settings">
      <Fee />
      <AutoSettings />
      <div className="btn settings__btns">
        <Btn name='Ок' classBtn='settings__btn' callback={closeSettings} />
        <Btn name='Cashier' classBtn='settings__btn' callback={openCashier} />
        <Btn name='Cancel' classBtn='settings__btn' callback={closeSettings} />
      </div>
    </div>
  );
}

export default Settings;