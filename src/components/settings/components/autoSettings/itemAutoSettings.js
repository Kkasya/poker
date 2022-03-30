import React from "react";
import Btn from "../../../btn/btn";

const ItemAutoSettings = ({item}) => {

  return (
    <div className="itemAutoSettings">
      <div className="element">
        <input type="checkbox" checked={item.checked} onChange={item.toggleCheck} className="element__checkbox"/>
        <p className="element__name">{item.name}</p>
        <Btn name='i' classBtn='element__btn' callback={item.toggleNotice}/>
        <p className="element__notice">{item.notice}</p>
      </div>
      {item.params.length && <div className="params">
        {item.params.map((param) => {
          return <div className="param">
            {param.text}
            <input type="text" onChange={param.setParamCount} className="param__count"/> ББ
          </div>
        })}
      </div>}
    </div>
  )
};

export default ItemAutoSettings;