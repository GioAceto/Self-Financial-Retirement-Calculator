import React, { useState, useEffect } from 'react';
import Calculation from '../utils/calculator'
import CheckContribution from './check-contribution'

const Calculator = (props) => {

  let defaultCalculationProperties = {
    retirementAge: 67,
    contributionPercentOfIncome: 0.10,
    investmentAnnualReturn: 1.105,
    lifeExpectancy: 90,
    expectedAnnualIncomeIncreasePercent: 1.02,
    newAnnualReturnPercentInRetirement: 1.025,
    inflationRate: 0.0181,
    expenses: 3800
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
  let setCheckCont = props.setCheckCont
  let [calculationProperties, setCalculationProperties] = useState(defaultCalculationProperties)
  let [currentYear, setCurrentYear] = useState(defaultCurrentYear)

  let [savingsData, setSavingsData] = useState([])

  const calculate = () => {
    const fullData = Calculation(calculationProperties, currentYear)
    setSavingsData(fullData)
    setGraphData(fullData)
    setCheckCont(calculationProperties.contributionPercentOfIncome)
    console.log(fullData)
  }


  return (
    <div className="container">
      <h2>Are you meeting your retirement goals?</h2>
      <div className="input-container">
        <div className="input-container-left">
          <h4>Current Age</h4>
          <input value={currentYear.currentAge} onChange={(event) => { setCurrentYear({ ...currentYear, currentAge: event.target.value }) }}></input>
          <h4>Current Salary</h4>
          <input value={currentYear.currentSalary} onChange={(event) => { setCurrentYear({ ...currentYear, currentSalary: event.target.value }) }}></input>
          <h4>Contribution Percent of Income</h4>
          <input value={calculationProperties.contributionPercentOfIncome} onChange={(event) => { setCalculationProperties({ ...calculationProperties, contributionPercentOfIncome: event.target.value }) }}></input>
          <h4>Current Retirement Savings</h4>
          <input value={currentYear.currentRetirementSavings} onChange={(event) => { setCurrentYear({ ...currentYear, currentRetirementSavings: event.target.value }) }}></input>
        </div>
        <div className="input-container-right">
          <h4>Expected Retirement Age</h4>
          <input value={calculationProperties.retirementAge} onChange={(event) => { setCalculationProperties({ ...calculationProperties, retirementAge: event.target.value }) }}></input>
          <h4>Life Expectancy</h4>
          <input value={calculationProperties.lifeExpectancy} onChange={(event) => { setCalculationProperties({ ...calculationProperties, lifeExpectancy: event.target.value }) }}></input>
          <h4>Expected Monthly Expenses in Retirement</h4>
          <input value={calculationProperties.expenses} onChange={(event) => { setCalculationProperties({ ...calculationProperties, expenses: event.target.value }) }}></input>
          <button type="button" onClick={calculate}>Calculate</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator