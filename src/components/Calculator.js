import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleClick = (e) => {
    const buttonContents = e.target.textContent;
    setState((prevState) => ({
      ...prevState,
      total: buttonContents,
    }));
    const result = calculate(state, buttonContents);
    setState(result);
  };

  const { total, next, operation } = state;
  const onClick = (e) => { handleClick(e); };

  return (
    <main className=" w-screen h-screen flex justify-between">
      <h2>Let&apos;s do some math!</h2>
      <div className="cal-container flex">
        <div className="calculator">
          <div className="w-96 h-auto bg-white rounded-2xl shadow-xl">
            <div className="w-auto h-auto">
              <div className="pr-1 btn-zinc col-span-4 text-right cal-screen" data-testid="cal-screen-out">{total || next ? `${total || ''} ${operation || ''} ${next || ''}` : 0}</div>
              <div className="flex justify-between">
                <button type="button" className="btn-grey" key="first" onClick={onClick}>AC</button>
                <button type="button" className="btn-grey" key="second" onClick={onClick}>+/-</button>
                <button type="button" className="btn-grey" key="third" onClick={onClick}>%</button>
                <button type="button" className="btn-orange" key="fourth" onClick={onClick}>÷</button>
              </div>
              <div className="flex justify-between">
                <button type="button" className="btn-grey" key="fifth" onClick={onClick}>7</button>
                <button type="button" className="btn-grey" key="sixth" onClick={onClick}>8</button>
                <button type="button" className="btn-grey" key="seventh" onClick={onClick}>9</button>
                <button type="button" className="btn-orange" key="eight" onClick={onClick}>x</button>
              </div>
              <div className="flex justify-between">
                <button type="button" className="btn-grey" key="ninth" onClick={onClick}>4</button>
                <button type="button" className="btn-grey" key="tenth" onClick={onClick}>5</button>
                <button type="button" className="btn-grey" key="eleventh" onClick={onClick}>6</button>
                <button type="button" className="btn-orange" key="twelfth" onClick={onClick}>-</button>
              </div>
              <div className="flex justify-between">
                <button type="button" className="btn-grey" key="thirteenth" onClick={onClick}>1</button>
                <button type="button" className="btn-grey" key="fourteenth" onClick={onClick}>2</button>
                <button type="button" className="btn-grey" key="sixteenth" onClick={onClick}>3</button>
                <button type="button" className="btn-orange" key="first" onClick={onClick}>+</button>
              </div>
              <div className="flex justify-between last">
                <button type="button" className="w-64 zero" key="seventeenth" onClick={onClick}>0</button>
                <button type="button" className="w-32 btn-grey point" key="eighteenth" onClick={onClick}>.</button>
                <button type="button" className="w-32 btn-grey equals" key="nineteenth" onClick={onClick}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
