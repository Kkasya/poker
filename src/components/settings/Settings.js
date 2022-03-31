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
      <div className="settings__inner">
        <Fee />
        <span className="shape settings__shape"></span>
        <AutoSettings />
      </div>
      <div className="settings__btns">
        <Btn name='Ок' classBtn='btn settings__btn' callback={closeSettings} />
        <Btn name='Cashier' classBtn='btn settings__btn' callback={openCashier} />
        <Btn name='Cancel' classBtn='btn settings__btn' callback={closeSettings} />
      </div>
    </div>
  );
}

export default Settings;