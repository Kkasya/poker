import React from "react";

const Btn = ({name, classBtn, callback, children}) => {
  const classStyle = `btn ${classBtn}`;

  return <button onClick={callback} className={classStyle} >{name} {children}</button>
};

export default Btn;