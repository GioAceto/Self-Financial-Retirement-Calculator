import React, { useState, useEffect } from 'react';
import Calculation from '../utils/calculator'

const Calculator = (props) => {

  let defaultCalculationProperties = {
    retirementAge: 67,
    contributionPercentOfIncome: 0.05,
    investmentAnnualReturn: 1.105,
    lifeExpectancy: 90,
    expectedAnnualIncomeIncreasePercent: 1.02,
    newAnnualReturnPercentInRetirement: 1.025,
    inflationRate: 0.0181,
    withdrawalPercentOfRetirement: 0.04
  }

  let defaultCurrentYear = {
    year: new Date().getFullYear(),
    currentAge: 30,
    currentRetirementSavings: 0,
    currentSalary: 55000,
    totalAmountContributed: 0,
    returnFromInterest: 0
  }
  let setGraphData = props.setterFunction
  let [calculationProperties, setCalculationProperties] = useState(defaultCalculationProperties)
  let [currentYear, setCurrentYear] = useState(defaultCurrentYear)

  let [savingsData, setSavingsData] = useState([])

  useEffect(() => {

    const fullData = Calculation(calculationProperties, currentYear)
    setSavingsData(fullData)
    setGraphData(fullData)
    console.log(fullData)
  }, [calculationProperties, currentYear])

  return (
    <div>
      <h4>Current Age</h4>
      <input value={currentYear.currentAge} onChange={(event) => { setCurrentYear({ ...currentYear, currentAge: event.target.value }) }}></input>
      <h4>Current Salary</h4>
      <input value={currentYear.currentSalary} onChange={(event) => { setCurrentYear({ ...currentYear, currentSalary: event.target.value }) }}></input>
      <h4>Current Retirement Savings</h4>
      <input value={currentYear.currentRetirementSavings} onChange={(event) => { setCurrentYear({ ...currentYear, currentRetirementSavings: event.target.value }) }}></input>
      <h4>Expected Retirement Age</h4>
      <input value={calculationProperties.retirementAge} onChange={(event) => { setCalculationProperties({ ...calculationProperties, retirementAge: event.target.value }) }}></input>
      <h4>Life Expectancy</h4>
      <input value={calculationProperties.lifeExpectancy} onChange={(event) => { setCalculationProperties({ ...calculationProperties, lifeExpectancy: event.target.value }) }}></input>
      <button type="button" onClick={(event) => { }}>Calculate</button>

      <ul>
        {savingsData.map(year => (
          <li key={year.year}> {`Year: ${year.year} Age: ${year.currentAge} Savings: ${year.currentRetirementSavings} Contributions: ${year.totalAmountContributed} Total Return From Interest ${year.returnFromInterest}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default Calculator