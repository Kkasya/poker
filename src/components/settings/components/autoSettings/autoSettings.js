import React from "react";
import ItemAutoSettings from "./itemAutoSettings";
import {purchase, save, seat} from "../../../../common/constants";
import autoSettingsStore from "../../../../store/autoSettingsStore";
import {observer} from "mobx-react-lite";

const AutoSettings = observer(() => {

  const seatSettings = {
    ...seat,
    isChecked: autoSettingsStore.isCheckedSeat,
    toggleCheck: autoSettingsStore.toggleIsCheckedSeat,
    isNotice: autoSettingsStore.isNoticeSeat,
    toggleNotice: autoSettingsStore.toggleIsNoticeSeat,
    params: [
      {
        paramCount: autoSettingsStore.seatCount,
        setParamCount: autoSettingsStore.setSeatCount,
        text: seat.text,
      }
    ],
  };

  const purchaseSettings = {
    ...purchase,
    isChecked: autoSettingsStore.isCheckedPurchase,
    toggleCheck: autoSettingsStore.toggleIsCheckedPurchase,
    isNotice: autoSettingsStore.isNoticePurchase,
    toggleNotice: autoSettingsStore.toggleIsNoticePurchase,
    params: [
      {
        paramCount: autoSettingsStore.myCount,
        setParamCount: autoSettingsStore.setMyCount,
        text: purchase.textMyCount,
      },
      {
        paramCount: autoSettingsStore.purchaseCount,
        setParamCount: autoSettingsStore.setPurchaseCount,
        text: purchase.textCount
      }
    ]
  };

  const saveSettings = {
    ...save,
    isChecked: autoSettingsStore.isCheckedSave,
    toggleCheck: autoSettingsStore.toggleIsCheckedSave,
    isNotice: autoSettingsStore.isNoticeSave
  };

  return (
    <div className="autoSettings">
      <ItemAutoSettings item={seatSettings}/>
      <ItemAutoSettings item={purchaseSettings}/>
      <ItemAutoSettings item={saveSettings}/>
    </div>
  )
});

export default AutoSettings;