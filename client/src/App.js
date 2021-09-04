import './App.css';
import './styles/styles.scss';
import Calculator from './components/calculator'
import CheckContribution from './components/check-contribution';
import Card1 from './components/card1'
import Card2 from './components/card2'
import Card3 from './components/card3'

import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import LineChart from './components/LineChart';

function App() {
  let [graphData, setGraphData] = useState([])
  let [checkCont, setCheckCont] = useState(0)

  return (
    <>
      <Navbar />
      <div className="top-container">
        <div className="calc-container">
          <Calculator setterFunction={setGraphData} setCheckCont={setCheckCont} />
        </div>
        <div className="right-container">
          <div className="graph-container">
            <LineChart className="line" data={graphData} />
          </div>
          {checkCont !== 0 &&
            <div className="card-container">
              <Card1 className="card" contributionPercentOfIncome={checkCont} />
              <Card2 className="card" />
              <Card3 className="card" />
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
