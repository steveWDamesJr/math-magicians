import React from 'react';

function Calculator() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-auto bg-white rounded-2xl shadow-xl">
        <div className="w-auto h-auto">
          <div className="pr-1 btn-zinc col-span-4 text-right ...">0</div>
          <div className="flex justify-between">
            <button type="button" className="btn-grey">AC</button>
            <div className="btn-grey">+/-</div>
            <div className="btn-grey">%</div>
            <div className="btn-orange">÷</div>
          </div>
          <div className="flex justify-between">
            <div className="btn-grey">7</div>
            <div className="btn-grey">8</div>
            <div className="btn-grey">9</div>
            <div className="btn-orange">x</div>
          </div>
          <div className="flex justify-between">
            <div className="btn-grey">4</div>
            <div className="btn-grey">5</div>
            <div className="btn-grey">6</div>
            <div className="btn-orange">-</div>
          </div>
          <div className="flex justify-between">
            <div className="btn-grey">1</div>
            <div className="btn-grey">2</div>
            <div className="btn-grey">3</div>
            <div className="btn-orange">-</div>
          </div>
          <div className="flex justify-between">
            <div className="w-64 btn-grey">0</div>
            <div className="w-32 btn-grey">•</div>
            <div className="w-32 btn-grey">=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
