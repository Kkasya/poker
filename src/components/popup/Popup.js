import React from "react";

const Popup = ({children}) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        {children}
      </div>
    </div>
  );
}

export default Popup;