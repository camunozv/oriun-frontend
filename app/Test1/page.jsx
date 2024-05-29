"use client"
import React from "react";
import { Chart } from 'react-google-charts';

const temperatureData = [
    ['Year', 'Highest Temperature'],
    [2017, 32],
    [2018, 35],
    [2019, 31],
    [2020, 37],
    [2021, 30]
];

const options = {
    title: 'Highest Temperature in last five years',
    backgroundColor: '#f7f7f7',
    hAxis: {
        title: 'Year',
    },
    vAxis: {
        title: 'Temperature °C',
    },
    colors: ['#007bff'],
    lineWidth: 2,
    pointSize: 6,
    animation: {
        startup: true,
        duration: 1000,
        easing: 'out',
    },
};

function App() {
    return (
        <div className="py-10">
            <h2><b>Estadística: Tabla de termperatura</b></h2>
            <br />
            <div id='columnChart'><Chart chartType="ColumnChart" data={temperatureData} options={options}/></div>
        </div>
    )
}

export default App;