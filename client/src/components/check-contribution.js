import React, { useState, useEffect } from 'react'
import Card1 from './card1'

const CheckContribution = (props) => {
  if (props.contributionPercentOfIncome < 0.10) {
    return (
      <div><Card1 /></div>
    )
  }
  return (
    <div>
      <h1>This is one is good</h1>
    </div>
  )
}

export default CheckContribution

  // if contributionPercentOfIncome is less than 0.10 then display card with suggestion:
  // We recommend investing at least 10% for maximum savings potential

  // if contributionPercentOfIncome is greater than 0.10 then display card with check mark ✓:
  // Your contribution percent meets or exceeds our recommendation
  // - - - - - - - - - - - - - - - - - - - -

  // 
