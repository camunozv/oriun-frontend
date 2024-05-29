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
        [call_field, 'Masculino', 'Femenino']
    ];

    for (let i = 0; i < dataList.length; i++) {
        const row = [
            dataList[i][dataListCallField],
            dataList[i]['males'],
            dataList[i]['females']
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
            duration: 1000,
            easing: 'out',
        },
    };

    return [data, options]
}

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------

const dataList_univ_sex_post = [
    {'university': 'UNAL', 'males': 100, 'females': 80},
    {'university': 'UNIANDES', 'males': 70, 'females': 80},
];
const results_univ_sex_post = renderChart("Universidad", dataList_univ_sex_post, 'university', 'Universidades', 'Estadística: Universidades por género estudiantes postulados');

const dataList_univ_sex_win = [
    {'university': 'UNAL', 'males': 50, 'females': 40},
    {'university': 'UNIANDES', 'males': 30, 'females': 40},
];
const results_univ_sex_win = renderChart("Universidad", dataList_univ_sex_win, 'university', 'Universidades', 'Estadística: Universidades por género estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_sex_post = [
    {'country': 'Mexico', 'males': 100, 'females': 80},
    {'country': 'Canadá', 'males': 70, 'females': 80},
    {'country': 'Francia', 'males': 70, 'females': 80},
];
const results_cou_sex_post = renderChart("País", dataList_cou_sex_post, 'country', 'Países', 'Estadística: Países por género estudiantes postulados');

const dataList_cou_sex_win = [
    {'country': 'Mexico', 'males': 10, 'females': 12},
    {'country': 'Canadá', 'males': 15, 'females': 12},
    {'country': 'Francia', 'males': 12, 'females': 15},
];
const results_cou_sex_win = renderChart("País", dataList_cou_sex_win, 'country', 'Países', 'Estadística: Países por género estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_sex_post = [
    {'region': 'Uniandes', 'males': 100, 'females': 80},
    {'region': 'Asia', 'males': 100, 'females': 80},
    {'region': 'Norteamérica', 'males': 70, 'females': 80},
    {'region': 'Europa', 'males': 70, 'females': 80},
    {'region': 'Nacional-Sigueme', 'males': 100, 'females': 80},
    {'region': 'Oceanía', 'males': 100, 'females': 80},
];
const results_reg_sex_post = renderChart("Región", dataList_reg_sex_post, 'region', 'Regiones', 'Estadística: Regiones por género estudiantes postulados');

const dataList_reg_sex_win = [
    {'region': 'Uniandes', 'males': 10, 'females': 12},
    {'region': 'Asia', 'males': 15, 'females': 12},
    {'region': 'Norteamérica', 'males': 15, 'females': 12},
    {'region': 'Europa', 'males': 15, 'females': 12},
    {'region': 'Nacional-Sigueme', 'males': 10, 'females': 12},
    {'region': 'Oceanía', 'males': 10, 'females': 12},
];
const results_reg_sex_win = renderChart("Región", dataList_reg_sex_win, 'region', 'Regiones', 'Estadística: regiones por género estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_sex_post = [
    {'year': '2023', 'males': 100, 'females': 80},
    {'year': '2024', 'males': 70, 'females': 80},
];
const results_yea_sex_post = renderChart("Año", dataList_yea_sex_post, 'year', 'Años', 'Estadística: Años por género estudiantes postulados');

const dataList_yea_sex_win = [
    {'year': '2023', 'males': 10, 'females': 12},
    {'year': '2024', 'males': 15, 'females': 12},
];
const results_yea_sex_win = renderChart("Año", dataList_yea_sex_win, 'year', 'Años', 'Estadística: Años por género estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_sex_post = [
    {'semester': '1', 'males': 100, 'females': 80},
    {'semester': '2', 'males': 70, 'females': 80},
];
const results_sem_sex_post = renderChart("Semestre", dataList_sem_sex_post, 'semester', 'Semestres', 'Estadística: Semestres por género estudiantes postulados');

const dataList_sem_sex_win = [
    {'semester': '1', 'males': 10, 'females': 12},
    {'semester': '2', 'males': 15, 'females': 12},
];
const results_sem_sex_win = renderChart("Semestre", dataList_sem_sex_win, 'semester', 'Semestres', 'Estadística: Semestres por género estudiantes ganadores');

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
            <h2 style={mystyle0}><b>Estadísticas por género</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_sex_post[0]}
                                                 options={results_univ_sex_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_sex_win[0]}
                                                 options={results_univ_sex_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_sex_post[0]}
                                                 options={results_cou_sex_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_sex_win[0]}
                                                 options={results_cou_sex_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_sex_post[0]}
                                                 options={results_reg_sex_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_sex_win[0]}
                                                 options={results_reg_sex_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_sex_post[0]}
                                                 options={results_yea_sex_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_sex_win[0]}
                                                 options={results_yea_sex_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_sex_post[0]}
                                                 options={results_sem_sex_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_sex_win[0]}
                                                 options={results_sem_sex_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;