import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="w-96 h-auto bg-white rounded-2xl shadow-xl">
          <div className="w-auto h-auto">
            <div className="pr-1 btn-zinc col-span-4 text-right ...">0</div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey">AC</button>
              <button type="button" className="btn-grey">+/-</button>
              <button type="button" className="btn-grey">%</button>
              <button type="button" className="btn-orange">÷</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey">7</button>
              <button type="button" className="btn-grey">8</button>
              <button type="button" className="btn-grey">9</button>
              <button type="button" className="btn-orange">x</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey">4</button>
              <button type="button" className="btn-grey">5</button>
              <button type="button" className="btn-grey">6</button>
              <button type="button" className="btn-orange">-</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey">1</button>
              <button type="button" className="btn-grey">2</button>
              <button type="button" className="btn-grey">3</button>
              <button type="button" className="btn-orange">-</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="w-64 btn-grey">0</button>
              <button type="button" className="w-32 btn-grey">•</button>
              <button type="button" className="w-32 btn-grey">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
