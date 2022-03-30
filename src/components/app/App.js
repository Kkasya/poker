import React from "react";
import Popup from "../popup/Popup";
import Settings from "../settings/Settings";

const App = () => {
  return (
    <div className="app">
      <Popup>
        <Settings />
      </Popup>
    </div>
  );
}

export default App;
