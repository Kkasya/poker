import React from "react";

const Btn = ({name, classBtn, callback, children}) => {
  const classStyle = `btn ${classBtn} btn__anim`;

  return <button onClick={callback} className={classStyle}>{name} {children}</button>
};

export default Btn;