import React, {useEffect} from "react";
import Popup from "../popup/Popup";
import Settings from "../settings/Settings";
import settingsStore from "../../store/settingsStore";
import {observer} from "mobx-react-lite";
import autoSettingsStore from "../../store/autoSettingsStore";

const App = observer(() => {

  useEffect(() => {
    settingsStore.setOpenSettings();
  }, []);

  window.addEventListener('beforeunload', (event) => {
    const autoSettings = {
      seatCount: autoSettingsStore.seatCount,
      purchaseCount: autoSettingsStore.purchaseCount,
      myCount: autoSettingsStore.myCount,
      isNoticeSeat: autoSettingsStore.isNoticeSeat,
      isNoticePurchase: autoSettingsStore.isNoticePurchase,
      isNoticeSave: autoSettingsStore.isNoticeSave,
      isCheckedSeat: autoSettingsStore.isCheckedSeat,
      isCheckedPurchase: autoSettingsStore.isCheckedPurchase,
      isCheckedSave: autoSettingsStore.isCheckedSave,
    };

    if (autoSettingsStore.isCheckedSave) {
      localStorage.setItem("autoSettings", JSON.stringify(autoSettings));
    }
  });

  return (
    <div className="app">
      <Popup>
        <Settings/>
      </Popup>
    </div>
  );
});

export default App;
