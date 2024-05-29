"use client"
import React from "react";
import { Chart } from 'react-google-charts';

function renderChart(call_field, dataList, dataListCallField, h_axis, title){
    /*
    Args:
    - call_field (string): Nombre Del campo del filtro de la convocatoria que se mostrará en la tabla
    - dataList (List of dict): Datos para llenar la tabla. Cada diccionario debe tener info. para los campos a visualizar
    - dataListCallField (string): Nombre Del campo del filtro de la convocatoria que se encuentra en los dataList a enviar
    - h_axis (string): Titulo del eje x
    - title (string): Titulo de la gráfica
     */
    const data =  [
        [call_field, 'Ninguna', 'Indígena', 'Afrocolombiana', 'ROM o Gitana']
    ];

    for (let i = 0; i < dataList.length; i++) {
        const row = [
            dataList[i][dataListCallField],
            dataList[i]['Ninguna'],
            dataList[i]['Indígena'],
            dataList[i]['Afrocolombiana'],
            dataList[i]['Rom o gitana']
        ];
        data.push(row);
    }

    const options = {
        title: title,
        allowHtml: true,
        alternatingRowStyle: true,
        width: '100%',
        height: '100%',
        sort: 'enable',
        backgroundColor: '#f7f7f7',
        hAxis: {
            title: h_axis,
            scrollbar: 'true'
        },
        vAxis: {
            title: 'Número Estudiantes',
        },
        animation: {
            startup: true,
            duration: 1500,
            easing: 'out',
        },
    };

    return [data, options]
}

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------

const dataList_univ_eth_post = [
    {'university': 'UNAL', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
    {'university': 'UNIANDES', 'Ninguna': 70, 'Indígena': 70, 'Afrocolombiana': 100, 'Rom o gitana': 70},
];
const results_univ_eth_post = renderChart("Universidad", dataList_univ_eth_post, 'university', 'Universidades', 'Estadística: Universidades por etnia estudiantes postulados');

const dataList_univ_eth_win = [
    {'university': 'UNAL', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
    {'university': 'UNIANDES', 'Ninguna': 30, 'Indígena': 20, 'Afrocolombiana': 40, 'Rom o gitana': 25},
];
const results_univ_eth_win = renderChart("Universidad", dataList_univ_eth_win, 'university', 'Universidades', 'Estadística: Universidades por etnia estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_eth_post = [
    {'country': 'Mexico', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
    {'country': 'Canadá', 'Ninguna': 70, 'Indígena': 70, 'Afrocolombiana': 100, 'Rom o gitana': 70},
    {'country': 'Francia', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
];
const results_cou_eth_post = renderChart("País", dataList_cou_eth_post, 'country', 'Países', 'Estadística: Países por etnia estudiantes postulados');

const dataList_cou_eth_win = [
    {'country': 'Mexico', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
    {'country': 'Canadá', 'Ninguna': 30, 'Indígena': 20, 'Afrocolombiana': 40, 'Rom o gitana': 25},
    {'country': 'Francia', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
];
const results_cou_eth_win = renderChart("País", dataList_cou_eth_win, 'country', 'Países', 'Estadística: Países por etnia estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_eth_post = [
    {'region': 'Uniandes', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
    {'region': 'Asia', 'Ninguna': 70, 'Indígena': 70, 'Afrocolombiana': 100, 'Rom o gitana': 70},
    {'region': 'Norteamérica', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
    {'region': 'Europa', 'Ninguna': 70, 'Indígena': 70, 'Afrocolombiana': 100, 'Rom o gitana': 70},
    {'region': 'Nacional-Sigueme', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
    {'region': 'Oceanía', 'Ninguna': 70, 'Indígena': 70, 'Afrocolombiana': 100, 'Rom o gitana': 70},
];
const results_reg_eth_post = renderChart("Región", dataList_reg_eth_post, 'region', 'Regiones', 'Estadística: Regiones por etnia estudiantes postulados');

const dataList_reg_eth_win = [
    {'region': 'Uniandes', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
    {'region': 'Asia', 'Ninguna': 30, 'Indígena': 20, 'Afrocolombiana': 40, 'Rom o gitana': 25},
    {'region': 'Norteamérica', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
    {'region': 'Europa', 'Ninguna': 30, 'Indígena': 20, 'Afrocolombiana': 40, 'Rom o gitana': 25},
    {'region': 'Nacional-Sigueme', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
    {'region': 'Oceanía', 'Ninguna': 30, 'Indígena': 20, 'Afrocolombiana': 40, 'Rom o gitana': 25},
];
const results_reg_eth_win = renderChart("Región", dataList_reg_eth_win, 'region', 'Regiones', 'Estadística: regiones por etnia estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_eth_post = [
    {'year': '2023', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
    {'year': '2024', 'Ninguna': 70, 'Indígena': 70, 'Afrocolombiana': 100, 'Rom o gitana': 70},
];
const results_yea_eth_post = renderChart("Año", dataList_yea_eth_post, 'year', 'Años', 'Estadística: Años por etnia estudiantes postulados');

const dataList_yea_eth_win = [
    {'year': '2023', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
    {'year': '2024', 'Ninguna': 30, 'Indígena': 20, 'Afrocolombiana': 40, 'Rom o gitana': 25},
];
const results_yea_eth_win = renderChart("Año", dataList_yea_eth_win, 'year', 'Años', 'Estadística: Años por etnia estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_eth_post = [
    {'semester': '1', 'Ninguna': 100, 'Indígena': 80, 'Afrocolombiana': 70, 'Rom o gitana': 70},
    {'semester': '2', 'Ninguna': 70, 'Indígena': 70, 'Afrocolombiana': 100, 'Rom o gitana': 70},
];
const results_sem_eth_post = renderChart("Semestre", dataList_sem_eth_post, 'semester', 'Semestres', 'Estadística: Semestres por etnia estudiantes postulados');

const dataList_sem_eth_win = [
    {'semester': '1', 'Ninguna': 50, 'Indígena': 40, 'Afrocolombiana': 35, 'Rom o gitana': 25},
    {'semester': '2', 'Ninguna': 30, 'Indígena': 20, 'Afrocolombiana': 40, 'Rom o gitana': 25},
];
const results_sem_eth_win = renderChart("Semestre", dataList_sem_eth_win, 'semester', 'Semestres', 'Estadística: Semestres por etnia estudiantes ganadores');

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
    const columnChartStyle = {
        width: "80%",
        height: "400px",
        margin: "0 auto"
    }
    return (
        <div className="py-10">
            <h2 style={mystyle0}><b>Estadísticas por etnia</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_eth_post[0]}
                                                 options={results_univ_eth_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_eth_win[0]}
                                                 options={results_univ_eth_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_eth_post[0]}
                                                 options={results_cou_eth_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_eth_win[0]}
                                                 options={results_cou_eth_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_eth_post[0]}
                                                 options={results_reg_eth_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_eth_win[0]}
                                                 options={results_reg_eth_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_eth_post[0]}
                                                 options={results_yea_eth_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_eth_win[0]}
                                                 options={results_yea_eth_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_eth_post[0]}
                                                 options={results_sem_eth_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_eth_win[0]}
                                                 options={results_sem_eth_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;