import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleClick = (e) => {
    const buttonContents = e.target.innerText;
    setState((prevState) => ({
      ...prevState,
      total: buttonContents,
    }));
    const result = calculate(state, buttonContents);
    setState(result);
  };

  const { total } = state;
  const { next } = state;
  const onClick = (e) => { handleClick(e); };

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-auto bg-white rounded-2xl shadow-xl">
        <div className="w-auto h-auto">
          <div className="pr-1 btn-zinc col-span-4 text-right ...">{ next || total }</div>
          <div className="flex justify-between">
            <button type="button" className="btn-grey" onClick={onClick}>AC</button>
            <button type="button" className="btn-grey" onClick={onClick}>+/-</button>
            <button type="button" className="btn-grey" onClick={onClick}>%</button>
            <button type="button" className="btn-orange" onClick={onClick}>÷</button>
          </div>
          <div className="flex justify-between">
            <button type="button" className="btn-grey" onClick={onClick}>7</button>
            <button type="button" className="btn-grey" onClick={onClick}>8</button>
            <button type="button" className="btn-grey" onClick={onClick}>9</button>
            <button type="button" className="btn-orange" onClick={onClick}>x</button>
          </div>
          <div className="flex justify-between">
            <button type="button" className="btn-grey" onClick={onClick}>4</button>
            <button type="button" className="btn-grey" onClick={onClick}>5</button>
            <button type="button" className="btn-grey" onClick={onClick}>6</button>
            <button type="button" className="btn-orange" onClick={onClick}>-</button>
          </div>
          <div className="flex justify-between">
            <button type="button" className="btn-grey" onClick={onClick}>1</button>
            <button type="button" className="btn-grey" onClick={onClick}>2</button>
            <button type="button" className="btn-grey" onClick={onClick}>3</button>
            <button type="button" className="btn-orange" onClick={onClick}>+</button>
          </div>
          <div className="flex justify-between">
            <button type="button" className="w-64 btn-grey" onClick={onClick}>0</button>
            <button type="button" className="w-32 btn-grey" onClick={onClick}>•</button>
            <button type="button" className="w-32 btn-grey" onClick={onClick}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
