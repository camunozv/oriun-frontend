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
        [call_field, 'Regular', 'PAES', 'PEAMA']
    ];

    for (let i = 0; i < dataList.length; i++) {
        const row = [
            dataList[i][dataListCallField],
            dataList[i]['REGUL'],
            dataList[i]['PAES'],
            dataList[i]['PEAMA']
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

const dataList_univ_adm_post = [
    {'university': 'UNAL', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'university': 'UNIANDES', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
const results_univ_adm_post = renderChart("Universidad", dataList_univ_adm_post, 'university', 'Universidades', 'Estadística: Universidades por tipo de admisión estudiantes postulados');

const dataList_univ_adm_win = [
    {'university': 'UNAL', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'university': 'UNIANDES', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
const results_univ_adm_win = renderChart("Universidad", dataList_univ_adm_win, 'university', 'Universidades', 'Estadística: Universidades por tipo de admisión estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_adm_post = [
    {'country': 'Mexico', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'country': 'Canadá', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
    {'country': 'Francia', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
];
const results_cou_adm_post = renderChart("País", dataList_cou_adm_post, 'country', 'Países', 'Estadística: Países por tipo de admisión estudiantes postulados');

const dataList_cou_adm_win = [
    {'country': 'Mexico', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'country': 'Canadá', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
    {'country': 'Francia', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
];
const results_cou_adm_win = renderChart("País", dataList_cou_adm_win, 'country', 'Países', 'Estadística: Países por tipo de admisión estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_adm_post = [
    {'region': 'Uniandes', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'region': 'Asia', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
    {'region': 'Norteamérica', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'region': 'Europa', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
    {'region': 'Nacional-Sigueme', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'region': 'Oceanía', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
const results_reg_adm_post = renderChart("Región", dataList_reg_adm_post, 'region', 'Regiones', 'Estadística: Regiones por tipo de admisión estudiantes postulados');

const dataList_reg_adm_win = [
    {'region': 'Uniandes', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'region': 'Asia', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
    {'region': 'Norteamérica', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'region': 'Europa', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
    {'region': 'Nacional-Sigueme', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'region': 'Oceanía', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
const results_reg_adm_win = renderChart("Región", dataList_reg_adm_win, 'region', 'Regiones', 'Estadística: regiones por tipo de admisión estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_adm_post = [
    {'year': '2023', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'year': '2024', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
const results_yea_adm_post = renderChart("Año", dataList_yea_adm_post, 'year', 'Años', 'Estadística: Años por tipo de admisión estudiantes postulados');

const dataList_yea_adm_win = [
    {'year': '2023', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'year': '2024', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
const results_yea_adm_win = renderChart("Año", dataList_yea_adm_win, 'year', 'Años', 'Estadística: Años por tipo de admisión estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_adm_post = [
    {'semester': '1', 'REGUL': 100, 'PAES': 80, "PEAMA": 70},
    {'semester': '2', 'REGUL': 70, 'PAES': 70, 'PEAMA': 100},
];
const results_sem_adm_post = renderChart("Semestre", dataList_sem_adm_post, 'semester', 'Semestres', 'Estadística: Semestres por tipo de admisión estudiantes postulados');

const dataList_sem_adm_win = [
    {'semester': '1', 'REGUL': 50, 'PAES': 40, "PEAMA": 35},
    {'semester': '2', 'REGUL': 30, 'PAES': 20, 'PEAMA': 40},
];
const results_sem_adm_win = renderChart("Semestre", dataList_sem_adm_win, 'semester', 'Semestres', 'Estadística: Semestres por tipo de admisión estudiantes ganadores');

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
            <h2 style={mystyle0}><b>Estadísticas por tipo de admisión</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_adm_post[0]}
                                                 options={results_univ_adm_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_adm_win[0]}
                                                 options={results_univ_adm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_adm_post[0]}
                                                 options={results_cou_adm_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_adm_win[0]}
                                                 options={results_cou_adm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_adm_post[0]}
                                                 options={results_reg_adm_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_adm_win[0]}
                                                 options={results_reg_adm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_adm_post[0]}
                                                 options={results_yea_adm_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_adm_win[0]}
                                                 options={results_yea_adm_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_adm_post[0]}
                                                 options={results_sem_adm_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_adm_win[0]}
                                                 options={results_sem_adm_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;