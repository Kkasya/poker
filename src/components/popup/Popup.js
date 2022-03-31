import React from "react";
import settingsStore from "../../store/settingsStore";
import {observer} from "mobx-react-lite";

const Popup = observer(({children}) => {
  const stylePopup = settingsStore.isOpenSettings ? 'block_visible' : 'block_hidden';

  return (
    <div className="popup">
      <div className={`popup__inner ${stylePopup}`}>
        {children}
      </div>
    </div>
  );
});

export default Popup;