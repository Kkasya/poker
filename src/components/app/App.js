import React from "react";
import Popup from "../popup/Popup";
import Settings from "../settings/Settings";
import settingsStore from "../../store/settingsStore";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
    <div className="app">
      {settingsStore.isOpenSettings &&
      <Popup>
        <Settings/>
      </Popup>}
    </div>
  );
});

export default App;
