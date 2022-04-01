import React from "react";
import Btn from "../../../btn/btn";
import {observer} from "mobx-react-lite";

const ItemAutoSettings = observer(({item}) => {

  const styleNameItem = item.params ? 'text_big' : 'text_small';
  const styleNotice = item.isNotice ? 'block_expanded' : 'block_none';

  return (
    <div className="itemAutoSettings">
      <div className="element">
        <div className="element__checkbox">
          <input type="checkbox" checked={item.isChecked} onChange={item.toggleCheck} id={item.name}/>
          <label htmlFor={item.name}></label>
        </div>
        <p className={`text ${styleNameItem} element__name`}>{item.name}</p>
        <Btn name='i' classBtn='element__btn' callback={item.toggleNotice}/>
      </div>

      <p className={`text text_small notice ${styleNotice}`}>{item.notice}</p>

      {item.params && item.params.length && <div className="params">
        {item.params.map((param) => {
          return (
            <div className="param" key={param.text}>
              <span className="text text_middle param__text">{param.text}</span>
              <input type="number"
                     value={item.isChecked ? param.paramCount : ''}
                     disabled={!item.isChecked}
                     onChange={(e) => param.setParamCount(e.target.value)}
                     className={`input param__count text_secondary text_big`}/>
              <span className="text text_middle ">ББ</span>
            </div>
          )
        })}
        <span className="shape params__shape"></span>
      </div>}
    </div>
  )
});

export default ItemAutoSettings;