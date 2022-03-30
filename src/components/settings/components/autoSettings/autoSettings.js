import React from "react";
import ItemAutoSettings from "./itemAutoSettings";
import {purchase} from "../../../../common/variables";

const AutoSettings = () => {

  const toggleCheck = () => {

  };

const toggleNotice = () => {

  };

const setParamCount = () => {

  };

  const purchaseSettings = {...purchase, checked: true, toggleCheck: toggleCheck, toggleNotice: toggleNotice, setParamCount: setParamCount};
  const seatSettings = {...purchase, checked: true, toggleCheck: toggleCheck, toggleNotice: toggleNotice, setParamCount: setParamCount};
  const saveSettings = {...purchase, checked: true, toggleCheck: toggleCheck, toggleNotice: toggleNotice};

  return (
    <div className="autoSettings">
      <ItemAutoSettings item={seatSettings} />
      <ItemAutoSettings item={purchaseSettings} />
      <ItemAutoSettings item={saveSettings} />
    </div>
  )
};

export default AutoSettings;