import React, {useEffect} from "react";
import Popup from "../popup/Popup";
import Settings from "../settings/Settings";
import settingsStore from "../../store/settingsStore";
import {observer} from "mobx-react-lite";

const App = observer(() => {

  useEffect(() => {
    console.log(settingsStore.isOpenSettings)
   settingsStore.setIsOpenSettings();
  }, []);

  return (
    <div className="app">
      <Popup>
        <Settings/>
      </Popup>
    </div>
  );
});

export default App;
