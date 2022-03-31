import React from "react";
import ItemAutoSettings from "./itemAutoSettings";
import {purchase, save, seat} from "../../../../common/constants";

const AutoSettings = () => {

  const toggleCheck = () => {

  };

const toggleNotice = () => {

  };

const setParamCount = () => {

  };

  const purchaseSettings = {...purchase, checked: false, toggleCheck: toggleCheck, toggleNotice: toggleNotice, setParamCount: setParamCount};
  const seatSettings = {...seat, checked: true, toggleCheck: toggleCheck, toggleNotice: toggleNotice, setParamCount: setParamCount};
  const saveSettings = {...save, checked: true, toggleCheck: toggleCheck, toggleNotice: toggleNotice};

  return (
    <div className="autoSettings">
      <ItemAutoSettings item={seatSettings} />
      <ItemAutoSettings item={purchaseSettings} />
      <ItemAutoSettings item={saveSettings} />
    </div>
  )
};

export default AutoSettings;