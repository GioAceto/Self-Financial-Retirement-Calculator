import './styles/styles.scss';
import Calculator from './components/calculator'

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LineChart from './components/LineChart';

function App() {
  let [graphData, setGraphData] = useState([])

  return (
    <>
      <Navbar />
      <div className="top-container">
        <div className="top-container-box">
          <div className="calc-container">
            <Calculator setterFunction={setGraphData} />
          </div>
          <div className="right-container">
            <div className="graph-container">
              <LineChart className="line" data={graphData} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
