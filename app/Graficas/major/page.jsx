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
    var columns = [call_field]

    const keys = Object.keys(dataList[0]);

    const index = keys.indexOf(dataListCallField);
    // Si dataList_call_field se encuentra en el array, eliminarlo
    if (index !== -1) {
        keys.splice(index, 1);
    }

    columns = columns.concat(keys)

    const data =  [
        columns
    ];

    for (let i = 0; i < dataList.length; i++) {
        const row = [
            dataList[i][dataListCallField],
        ];
        for (let j=0; j< keys.length; j++) {
            row.push(dataList[i][keys[j]]);
        }
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

const dataList_univ_maj_post = [
    {'university': 'UNAL', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
    {'university': 'UNIANDES', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
];
const results_univ_maj_post = renderChart("Universidad", dataList_univ_maj_post, 'university', 'Universidades', 'Estadística: Universidades por carrera estudiantes postulados');

const dataList_univ_maj_win = [
    {'university': 'UNAL', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
    {'university': 'UNIANDES', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
];
const results_univ_maj_win = renderChart("Universidad", dataList_univ_maj_win, 'university', 'Universidades', 'Estadística: Universidades por carrera estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_maj_post = [
    {'country': 'Mexico', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
    {'country': 'Canadá', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
    {'country': 'Francia', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
];
const results_cou_maj_post = renderChart("País", dataList_cou_maj_post, 'country', 'Países', 'Estadística: Países por carrera estudiantes postulados');

const dataList_cou_maj_win = [
    {'country': 'Mexico', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
    {'country': 'Canadá', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
    {'country': 'Francia', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
];
const results_cou_maj_win = renderChart("País", dataList_cou_maj_win, 'country', 'Países', 'Estadística: Países por carrera estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_maj_post = [
    {'region': 'Uniandes', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
    {'region': 'Asia', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
    {'region': 'Norteamérica', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
    {'region': 'Europa', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
    {'region': 'Nacional-Sigueme', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
    {'region': 'Oceanía', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
];
const results_reg_maj_post = renderChart("Región", dataList_reg_maj_post, 'region', 'Regiones', 'Estadística: Regiones por carrera estudiantes postulados');

const dataList_reg_maj_win = [
    {'region': 'Uniandes', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
    {'region': 'Asia', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
    {'region': 'Norteamérica', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
    {'region': 'Europa', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
    {'region': 'Nacional-Sigueme', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
    {'region': 'Oceanía', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
];
const results_reg_maj_win = renderChart("Región", dataList_reg_maj_win, 'region', 'Regiones', 'Estadística: regiones por carrera estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_maj_post = [
    {'year': '2023', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
    {'year': '2024', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
];
const results_yea_maj_post = renderChart("Año", dataList_yea_maj_post, 'year', 'Años', 'Estadística: Años por carrera estudiantes postulados');

const dataList_yea_maj_win = [
    {'year': '2023', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
    {'year': '2024', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40},
];
const results_yea_maj_win = renderChart("Año", dataList_yea_maj_win, 'year', 'Años', 'Estadística: Años por carrera estudiantes ganadores');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_maj_post = [
    {'semester': '1', 'Ingeniería de Sistemas': 100, 'Medicina': 80, "...": 70},
    {'semester': '2', 'Ingeniería de Sistemas': 70, 'Medicina': 70, '...': 100},
];
const results_sem_maj_post = renderChart("Semestre", dataList_sem_maj_post, 'semester', 'Semestres', 'Estadística: Semestres por carrera estudiantes postulados');

const dataList_sem_maj_win = [
    {'semester': '1', 'Ingeniería de Sistemas': 50, 'Medicina': 40, "...": 35},
    {'semester': '2', 'Ingeniería de Sistemas': 30, 'Medicina': 20, '...': 40}
];
const results_sem_maj_win = renderChart("Semestre", dataList_sem_maj_win, 'semester', 'Semestres', 'Estadística: Semestres por carrera estudiantes ganadores');

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
            <h2 style={mystyle0}><b>Estadísticas por carrera</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_maj_post[0]}
                                                 options={results_univ_maj_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_univ_maj_win[0]}
                                                 options={results_univ_maj_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_maj_post[0]}
                                                 options={results_cou_maj_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_cou_maj_win[0]}
                                                 options={results_cou_maj_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_maj_post[0]}
                                                 options={results_reg_maj_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_reg_maj_win[0]}
                                                 options={results_reg_maj_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_maj_post[0]}
                                                 options={results_yea_maj_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_yea_maj_win[0]}
                                                 options={results_yea_maj_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_maj_post[0]}
                                                 options={results_sem_maj_post[1]}/></div>
            <br/>
            <div style={columnChartStyle}><Chart chartType="ColumnChart" data={results_sem_maj_win[0]}
                                                 options={results_sem_maj_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;