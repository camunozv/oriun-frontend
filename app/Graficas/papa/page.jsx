"use client"
import React from "react";
import { Chart } from 'react-google-charts';

function renderChart(call_field, dataList, dataListCallField, h_axis, title, category){
    /*
    Args:
    - call_field (string): Nombre Del campo del filtro de la convocatoria que se mostrará en la tabla
    - dataList (List of dict): Datos para llenar la tabla. Cada diccionario debe tener info. para los campos a visualizar
    - dataListCallField (string): Nombre Del campo del filtro de la convocatoria que se encuentra en los dataList a enviar
    - h_axis (string): Titulo del eje x
    - title (string): Titulo de la gráfica
    - category (string): Viene siendo la categoría del rango del eje y
     */

    var data = [
        [call_field, "min", "min", "max", "max", {type: 'string', role: 'tooltip'}]
    ]

    for (let i= 0; i < dataList.length; i++){
        data.push([
            dataList[i][dataListCallField],
            dataList[i]['min'],
            dataList[i]['min'],
            dataList[i]['max'],
            dataList[i]['max'],
            `${dataList[i][dataListCallField]}\n\nRango ${category}: ${dataList[i]['min']} - ${dataList[i]['max']}`,
        ])
    }

    const options = {
        title: title,
        legend: 'none',
        allowHtml: true,
        alternatingRowStyle: true,
        width: '100%',
        height: '100%',
        sort: 'enable',
        backgroundColor: '#f7f7f7',
        hAxis: {
            title: h_axis,
            scrollbar: 'true',
            titleTextStyle: {
                color: 'blue',
                fontSize: 16,
                bold: true,
                italic: false
            }
        },
        vAxis: {
            title: `Rango ${category}`,
            maxValue: 5,
            minValue: 0,
            titleTextStyle: {
                color: 'blue',
                fontSize: 16,
                bold: true,
                italic: false
            }
        },
        animation: {
            startup: true,
            duration: 1500,
            easing: 'out',
        },
        tooltip: {
            isHtml: true
        }
    };

    return [data, options]
}

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------

const dataList_univ_papa_post = [
    {'university': 'UNAL', 'min': 4.3, 'max': 4.9},
    {'university': 'UNIANDES', 'min': 3.8, 'max': 4.8},
];
const results_univ_papa_post = renderChart("Universidad", dataList_univ_papa_post, 'university', 'Universidades', 'Estadística: Universidades por PAPA estudiantes postulados', 'PAPA');

const dataList_univ_papa_win = [
    {'university': 'UNAL', 'min': 4.5, 'max': 4.9},
    {'university': 'UNIANDES', 'min': 4.3, 'max': 4.8},
];
const results_univ_papa_win = renderChart("Universidad", dataList_univ_papa_win, 'university', 'Universidades', 'Estadística: Universidades por PAPA estudiantes ganadores', 'PAPA');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_papa_post = [
    {'country': 'Mexico', 'min': 4.3, 'max': 4.9},
    {'country': 'Canadá', 'min': 3.8, 'max': 4.8},
    {'country': 'Francia', 'min': 4.3, 'max': 4.9},
];
const results_cou_papa_post = renderChart("País", dataList_cou_papa_post, 'country', 'Países', 'Estadística: Países por PAPA estudiantes postulados', 'PAPA');

const dataList_cou_papa_win = [
    {'country': 'Mexico', 'min': 4.5, 'max': 4.9},
    {'country': 'Canadá', 'min': 4.3, 'max': 4.8},
    {'country': 'Francia', 'min': 4.5, 'max': 4.9},
];
const results_cou_papa_win = renderChart("País", dataList_cou_papa_win, 'country', 'Países', 'Estadística: Países por PAPA estudiantes ganadores', 'PAPA');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_papa_post = [
    {'region': 'Uniandes', 'min': 4.3, 'max': 4.9},
    {'region': 'Asia', 'min': 3.8, 'max': 4.8},
    {'region': 'Norteamérica', 'min': 4.3, 'max': 4.9},
    {'region': 'Europa', 'min': 3.8, 'max': 4.8},
    {'region': 'Nacional-Sigueme', 'min': 4.3, 'max': 4.9},
    {'region': 'Oceanía', 'min': 3.8, 'max': 4.8},
];
const results_reg_papa_post = renderChart("Región", dataList_reg_papa_post, 'region', 'Regiones', 'Estadística: Regiones por PAPA estudiantes postulados', 'PAPA');

const dataList_reg_papa_win = [
    {'region': 'Uniandes', 'min': 4.5, 'max': 4.9},
    {'region': 'Asia', 'min': 4.3, 'max': 4.8},
    {'region': 'Norteamérica', 'min': 4.5, 'max': 4.9},
    {'region': 'Europa', 'min': 4.3, 'max': 4.8},
    {'region': 'Nacional-Sigueme', 'min': 4.5, 'max': 4.9},
    {'region': 'Oceanía', 'min': 4.3, 'max': 4.8},
];
const results_reg_papa_win = renderChart("Región", dataList_reg_papa_win, 'region', 'Regiones', 'Estadística: regiones por PAPA estudiantes ganadores', 'PAPA');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_papa_post = [
    {'year': '2023', 'min': 4.3, 'max': 4.9},
    {'year': '2024', 'min': 3.8, 'max': 4.8},
];
const results_yea_papa_post = renderChart("Año", dataList_yea_papa_post, 'year', 'Años', 'Estadística: Años por PAPA estudiantes postulados', 'PAPA');

const dataList_yea_papa_win = [
    {'year': '2023', 'min': 4.5, 'max': 4.9},
    {'year': '2024', 'min': 4.3, 'max': 4.8},
];
const results_yea_papa_win = renderChart("Año", dataList_yea_papa_win, 'year', 'Años', 'Estadística: Años por PAPA estudiantes ganadores', 'PAPA');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_papa_post = [
    {'semester': '1', 'min': 4.3, 'max': 4.9},
    {'semester': '2', 'min': 3.8, 'max': 4.8},
];
const results_sem_papa_post = renderChart("Semestre", dataList_sem_papa_post, 'semester', 'Semestres', 'Estadística: Semestres por PAPA estudiantes postulados', 'PAPA');

const dataList_sem_papa_win = [
    {'semester': '1', 'min': 4.5, 'max': 4.9},
    {'semester': '2', 'min': 4.3, 'max': 4.8},
];
const results_sem_papa_win = renderChart("Semestre", dataList_sem_papa_win, 'semester', 'Semestres', 'Estadística: Semestres por PAPA estudiantes ganadores', 'PAPA');

//---------------------------------------------------------
//---------------------------------------------------------

function App() {
    const mystyle0 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        margin: "0 auto",
    };
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        margin: "0 auto",
        width: "80%",
    };
    const CandlestickChartStyle = {
        width: "80%",
        height: "550px",
        margin: "0 auto"
    }
    return (
        <div className="py-10">
            <h2 style={mystyle0}><b>Estadísticas por PAPA</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_univ_papa_post[0]}
                                                      options={results_univ_papa_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_univ_papa_win[0]}
                                                      options={results_univ_papa_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_cou_papa_post[0]}
                                                      options={results_cou_papa_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_cou_papa_win[0]}
                                                      options={results_cou_papa_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_reg_papa_post[0]}
                                                      options={results_reg_papa_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_reg_papa_win[0]}
                                                      options={results_reg_papa_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_yea_papa_post[0]}
                                                      options={results_yea_papa_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_yea_papa_win[0]}
                                                      options={results_yea_papa_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_sem_papa_post[0]}
                                                      options={results_sem_papa_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_sem_papa_win[0]}
                                                      options={results_sem_papa_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;