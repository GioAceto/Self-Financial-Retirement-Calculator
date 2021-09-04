import React from 'react';
import { Line, Scatter } from 'react-chartjs-2';
import { Card, Button } from 'react-bootstrap'

export default function LineChart(props) {
  if (props.data.length === 0) {

    return (
      <>

      </>
    )
  }
  const labels = props.data.map(L => L.currentAge)
  const totalSavings = props.data.map(S => S.currentRetirementSavings)
  const totalContributed = props.data.map(TC => TC.totalAmountContributed)
  const constributionPercent = props.data.map(CP => CP.contributionPercentOfIncome)
  console.log(constributionPercent)
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Savings",
        data: totalSavings,
        backgroundColor: "#00ADEE",
        borderWidth: 5,
        borderColor: "#00ADEE",
        hoverBorderWidth: 20,
        point: false,
        pointStyle: 'line',
        pointHitRadius: 1000,
        stepped: false,
        fill: true,
        borderDash: [2000, 2200],
        elements: {
          point: {
            radius: 0
          }
        },

      }]

  };
  return (
    <div className="graph">
      <h1 className='report'>Your Retirement Savings</h1>
      <Line data={data} />
    </div>
  );
}
