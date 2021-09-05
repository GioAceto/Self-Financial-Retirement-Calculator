// let workingYears = (retirementAge - currentAge)
// let retirementYears = (lifeExpectancy - retirementAge)
// let returnFromInterest = currentRetirementSavings - totalAmountContributed

const twoDec = (number) => {
  return Math.trunc(parseFloat(number) * 100) / 100
}

const Calculation = (calculationProperties, currentYear) => {
  let { retirementAge, contributionPercentOfIncome, investmentAnnualReturn, lifeExpectancy,
    expectedAnnualIncomeIncreasePercent, newAnnualReturnPercentInRetirement, inflationRate,
    expenses } = calculationProperties
  let currentYearData = { ...currentYear }
  let workingSavingsArr = []
  // loop through for every working year
  for (let i = parseInt(currentYear.currentAge); i < parseInt(retirementAge); i++) {
    // For each working year iteration, push an object into the workingSavings array that contains a key
    // for every input. Each object represents a year.
    workingSavingsArr.push({ ...currentYearData });
    currentYearData.year++
    currentYearData.currentAge++
    currentYearData.currentRetirementSavings = twoDec((((parseFloat(currentYearData.currentRetirementSavings) + (parseFloat(currentYearData.currentSalary) * parseFloat(contributionPercentOfIncome / 100))) * parseFloat(investmentAnnualReturn))))
    currentYearData.currentSalary = twoDec(parseFloat((currentYearData.currentSalary * parseFloat(expectedAnnualIncomeIncreasePercent))))
    currentYearData.totalAmountContributed = twoDec(parseFloat(currentYearData.currentSalary * parseFloat(contributionPercentOfIncome / 100)))
    currentYearData.returnFromInterest = twoDec(parseFloat(currentYearData.currentRetirementSavings - parseFloat(currentYearData.totalAmountContributed)))
  }
  for (let j = parseInt(retirementAge) + 1; j <= parseInt(lifeExpectancy) + 1; j++) {
    workingSavingsArr.push({ ...currentYearData });
    currentYearData.year++
    currentYearData.currentAge++
    currentYearData.currentRetirementSavings = twoDec((parseFloat(currentYearData.currentRetirementSavings) * parseFloat(newAnnualReturnPercentInRetirement)) - parseFloat(expenses * 12))
    currentYearData.currentSalary = parseFloat(0)
    currentYearData.totalAmountContributed = parseFloat(0)
    currentYearData.returnFromInterest = twoDec(parseFloat(currentYearData.currentRetirementSavings - parseFloat(currentYearData.totalAmountContributed)))
  }
  return workingSavingsArr
};


// sample data

// [{
//   year: 2021
//   age: 30,
//   currentRetirementSavings: 0,
//   salary: 55000,
//   totalAmountContributed: 0,
//   returnFromInterest: 0
// },
// {
//   year: 2022,
//   age: 31,
//   currentRetirementSavings: 3038.75,
//   salary: 56100,
//   totalAmountContributed: 0,
//   returnFromInterest: 0
// }
// ]

export default Calculation;