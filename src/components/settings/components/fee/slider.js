import React from "react";
import {observer} from "mobx-react-lite";

const Slider = observer(({value, changeValue}) => {

  const setValue = (number) => {
    const newValue = Number(value.current) + number;
    if (newValue > value.min && newValue < value.max) changeValue(newValue);
  };

  return (
    <>
      <span className="control"
            onClick={() => setValue(-1)}>
      </span>
      <input type="range"
             id="slider"
             value={value.current}
             onChange={(event) => changeValue(event.target.value)}
             min={value.min}
             max={value.max}
             className="slider"/>
      <span className="control control_extra"
            onClick={() => setValue(1)}>
      </span>
    </>
  )
});

export default Slider;