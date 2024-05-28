"use client";
import React from "react";
import { Chart } from "react-google-charts";

function TableChart({my_data, my_title}) {
  

  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };


  return (
    <>
      <Chart
        chartType="Table"
        width="100%"
        height="400px"
        data={my_data}
        options={options}
        className="font-bold bg-blue"
      />
    </>
  );
}

export default TableChart;
