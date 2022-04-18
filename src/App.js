/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="flex justify-between items-center">
          <Navbar />
          <nav className="flex">
            <Link className="home" to="/">Home</Link>
            <Link className="calc" to="/calculator">Calculator</Link>
            <Link className="quote" to="/quote">Quote</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>

      </div>
    );
  }
}

export default App;
