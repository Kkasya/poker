import React from "react";
import Btn from "../../../btn/btn";

const ItemAutoSettings = ({item}) => {

  const styleNameItem = item.params ? 'text_big' : 'text_small';

  return (
    <div className="itemAutoSettings">
      <div className="element">
        <div className="element__checkbox">
          <input type="checkbox" checked={item.checked} onChange={item.toggleCheck} id="checkbox"/>
          <label htmlFor="checkbox"></label>
        </div>
        <p className={`text ${styleNameItem} element__name`}>{item.name}</p>
        <Btn name='i' classBtn='element__btn' callback={item.toggleNotice}/>
      </div>

      <p className="text text_small notice">{item.notice}</p>

      {item.params && item.params.length && <div className="params">
        {item.params.map((param) => {
          return <div className="param">
            <span className="text text_middle param__text">{param.text}</span>
            <input type="number" onChange={param.setParamCount} className="text text_big input param__count"/>
            <span className="text text_middle ">ББ</span>
          </div>
        })}
        <span className="shape params__shape"></span>
      </div>}
    </div>
  )
};

export default ItemAutoSettings;