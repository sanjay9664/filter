import React from "react";
// import Chart from "./Chart/chart";
import Chart from "../Chart/Chart";

const ExpencesChart = (props) => {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sap", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const expenc of props.expencs) {
    const expenceMonth = expenc.date.getMonth();
    chartDataPoints[expenceMonth].value += expenc.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpencesChart;
