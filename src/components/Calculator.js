import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '0', next: null, operation: null };
  }

  handleClick = (e) => {
    const buttonContents = e.target.innerText;
    this.setState((prevState) => ({
      ...prevState,
      total: buttonContents,
    }));
    const result = calculate(this.state, buttonContents);
    this.setState(result);
  };

  render() {
    const { total } = this.state;
    const { next } = this.state;
    return (
      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="w-96 h-auto bg-white rounded-2xl shadow-xl">
          <div className="w-auto h-auto">
            <div className="pr-1 btn-zinc col-span-4 text-right ...">{ next || total }</div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>AC</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>+/-</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>%</button>
              <button type="button" className="btn-orange" onClick={(e) => { this.handleClick(e); }}>÷</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>7</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>8</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>9</button>
              <button type="button" className="btn-orange" onClick={(e) => { this.handleClick(e); }}>x</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>4</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>5</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>6</button>
              <button type="button" className="btn-orange" onClick={(e) => { this.handleClick(e); }}>-</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>1</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>2</button>
              <button type="button" className="btn-grey" onClick={(e) => { this.handleClick(e); }}>3</button>
              <button type="button" className="btn-orange" onClick={(e) => { this.handleClick(e); }}>+</button>
            </div>
            <div className="flex justify-between">
              <button type="button" className="w-64 btn-grey" onClick={(e) => { this.handleClick(e); }}>0</button>
              <button type="button" className="w-32 btn-grey" onClick={(e) => { this.handleClick(e); }}>•</button>
              <button type="button" className="w-32 btn-grey" onClick={(e) => { this.handleClick(e); }}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
