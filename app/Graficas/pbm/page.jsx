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
            maxValue: 100,
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

const dataList_univ_pbm_post = [
    {'university': 'UNAL', 'min': 45, 'max': 80},
    {'university': 'UNIANDES', 'min': 15, 'max': 90},
];
const results_univ_pbm_post = renderChart("Universidad", dataList_univ_pbm_post, 'university', 'Universidades', 'Estadística: Universidades por PBM estudiantes postulados', 'PBM');

const dataList_univ_pbm_win = [
    {'university': 'UNAL', 'min': 50, 'max': 70},
    {'university': 'UNIANDES', 'min': 40, 'max': 65},
];
const results_univ_pbm_win = renderChart("Universidad", dataList_univ_pbm_win, 'university', 'Universidades', 'Estadística: Universidades por PBM estudiantes ganadores', 'PBM');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_pbm_post = [
    {'country': 'Mexico', 'min': 45, 'max': 80},
    {'country': 'Canadá', 'min': 15, 'max': 90},
    {'country': 'Francia', 'min': 45, 'max': 80},
];
const results_cou_pbm_post = renderChart("País", dataList_cou_pbm_post, 'country', 'Países', 'Estadística: Países por PBM estudiantes postulados', 'PBM');

const dataList_cou_pbm_win = [
    {'country': 'Mexico', 'min': 50, 'max': 70},
    {'country': 'Canadá', 'min': 40, 'max': 65},
    {'country': 'Francia', 'min': 50, 'max': 70},
];
const results_cou_pbm_win = renderChart("País", dataList_cou_pbm_win, 'country', 'Países', 'Estadística: Países por PBM estudiantes ganadores', 'PBM');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_pbm_post = [
    {'region': 'Uniandes', 'min': 45, 'max': 80},
    {'region': 'Asia', 'min': 15, 'max': 90},
    {'region': 'Norteamérica', 'min': 45, 'max': 80},
    {'region': 'Europa', 'min': 15, 'max': 90},
    {'region': 'Nacional-Sigueme', 'min': 45, 'max': 80},
    {'region': 'Oceanía', 'min': 15, 'max': 90},
];
const results_reg_pbm_post = renderChart("Región", dataList_reg_pbm_post, 'region', 'Regiones', 'Estadística: Regiones por PBM estudiantes postulados', 'PBM');

const dataList_reg_pbm_win = [
    {'region': 'Uniandes', 'min': 50, 'max': 70},
    {'region': 'Asia', 'min': 40, 'max': 65},
    {'region': 'Norteamérica', 'min': 50, 'max': 70},
    {'region': 'Europa', 'min': 40, 'max': 65},
    {'region': 'Nacional-Sigueme', 'min': 50, 'max': 70},
    {'region': 'Oceanía', 'min': 40, 'max': 65},
];
const results_reg_pbm_win = renderChart("Región", dataList_reg_pbm_win, 'region', 'Regiones', 'Estadística: regiones por PBM estudiantes ganadores', 'PBM');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_pbm_post = [
    {'year': '2023', 'min': 45, 'max': 80},
    {'year': '2024', 'min': 15, 'max': 90},
];
const results_yea_pbm_post = renderChart("Año", dataList_yea_pbm_post, 'year', 'Años', 'Estadística: Años por PBM estudiantes postulados', 'PBM');

const dataList_yea_pbm_win = [
    {'year': '2023', 'min': 50, 'max': 70},
    {'year': '2024', 'min': 40, 'max': 65},
];
const results_yea_pbm_win = renderChart("Año", dataList_yea_pbm_win, 'year', 'Años', 'Estadística: Años por PBM estudiantes ganadores', 'PBM');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_pbm_post = [
    {'semester': '1', 'min': 45, 'max': 80},
    {'semester': '2', 'min': 15, 'max': 90},
];
const results_sem_pbm_post = renderChart("Semestre", dataList_sem_pbm_post, 'semester', 'Semestres', 'Estadística: Semestres por PBM estudiantes postulados', 'PBM');

const dataList_sem_pbm_win = [
    {'semester': '1', 'min': 50, 'max': 70},
    {'semester': '2', 'min': 40, 'max': 65},
];
const results_sem_pbm_win = renderChart("Semestre", dataList_sem_pbm_win, 'semester', 'Semestres', 'Estadística: Semestres por PBM estudiantes ganadores', 'PBM');

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
            <h2 style={mystyle0}><b>Estadísticas por PBM</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_univ_pbm_post[0]}
                                                 options={results_univ_pbm_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_univ_pbm_win[0]}
                                                 options={results_univ_pbm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_cou_pbm_post[0]}
                                                 options={results_cou_pbm_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_cou_pbm_win[0]}
                                                 options={results_cou_pbm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_reg_pbm_post[0]}
                                                 options={results_reg_pbm_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_reg_pbm_win[0]}
                                                 options={results_reg_pbm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_yea_pbm_post[0]}
                                                 options={results_yea_pbm_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_yea_pbm_win[0]}
                                                 options={results_yea_pbm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_sem_pbm_post[0]}
                                                 options={results_sem_pbm_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_sem_pbm_win[0]}
                                                 options={results_sem_pbm_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;