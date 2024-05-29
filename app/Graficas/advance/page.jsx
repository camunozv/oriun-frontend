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
            `${dataList[i][dataListCallField]}\n\nRango porcentaje ${category}: ${dataList[i]['min']} - ${dataList[i]['max']}`,
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
            title: `Rango Porcentaje ${category}`,
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

const dataList_univ_adv_post = [
    {'university': 'UNAL', 'min': 40, 'max': 95},
    {'university': 'UNIANDES', 'min': 55, 'max': 85},
];
const results_univ_adv_post = renderChart("Universidad", dataList_univ_adv_post, 'university', 'Universidades', 'Estadística: Universidades por avance de carrera estudiantes postulados', 'Avance de carrera');

const dataList_univ_adv_win = [
    {'university': 'UNAL', 'min': 60, 'max': 95},
    {'university': 'UNIANDES', 'min': 65, 'max': 80},
];
const results_univ_adv_win = renderChart("Universidad", dataList_univ_adv_win, 'university', 'Universidades', 'Estadística: Universidades por avance de carrera estudiantes ganadores', 'Avance de carrera');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_cou_adv_post = [
    {'country': 'Mexico', 'min': 40, 'max': 95},
    {'country': 'Canadá', 'min': 55, 'max': 85},
    {'country': 'Francia', 'min': 40, 'max': 95},
];
const results_cou_adv_post = renderChart("País", dataList_cou_adv_post, 'country', 'Países', 'Estadística: Países por avance de carrera estudiantes postulados', 'Avance de carrera');

const dataList_cou_adv_win = [
    {'country': 'Mexico', 'min': 60, 'max': 95},
    {'country': 'Canadá', 'min': 65, 'max': 80},
    {'country': 'Francia', 'min': 60, 'max': 95},
];
const results_cou_adv_win = renderChart("País", dataList_cou_adv_win, 'country', 'Países', 'Estadística: Países por avance de carrera estudiantes ganadores', 'Avance de carrera');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_reg_adv_post = [
    {'region': 'Uniandes', 'min': 40, 'max': 95},
    {'region': 'Asia', 'min': 55, 'max': 85},
    {'region': 'Norteamérica', 'min': 40, 'max': 95},
    {'region': 'Europa', 'min': 55, 'max': 85},
    {'region': 'Nacional-Sigueme', 'min': 40, 'max': 95},
    {'region': 'Oceanía', 'min': 55, 'max': 85},
];
const results_reg_adv_post = renderChart("Región", dataList_reg_adv_post, 'region', 'Regiones', 'Estadística: Regiones por avance de carrera estudiantes postulados', 'Avance de carrera');

const dataList_reg_adv_win = [
    {'region': 'Uniandes', 'min': 60, 'max': 95},
    {'region': 'Asia', 'min': 65, 'max': 80},
    {'region': 'Norteamérica', 'min': 60, 'max': 95},
    {'region': 'Europa', 'min': 65, 'max': 80},
    {'region': 'Nacional-Sigueme', 'min': 60, 'max': 95},
    {'region': 'Oceanía', 'min': 65, 'max': 80},
];
const results_reg_adv_win = renderChart("Región", dataList_reg_adv_win, 'region', 'Regiones', 'Estadística: regiones por avance de carrera estudiantes ganadores', 'Avance de carrera');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_yea_adv_post = [
    {'year': '2023', 'min': 40, 'max': 95},
    {'year': '2024', 'min': 55, 'max': 85},
];
const results_yea_adv_post = renderChart("Año", dataList_yea_adv_post, 'year', 'Años', 'Estadística: Años por avance de carrera estudiantes postulados', 'Avance de carrera');

const dataList_yea_adv_win = [
    {'year': '2023', 'min': 60, 'max': 95},
    {'year': '2024', 'min': 65, 'max': 80},
];
const results_yea_adv_win = renderChart("Año", dataList_yea_adv_win, 'year', 'Años', 'Estadística: Años por avance de carrera estudiantes ganadores', 'Avance de carrera');

//----------------------//----------------------//----------
//----------------------//----------------------//----------

const dataList_sem_adv_post = [
    {'semester': '1', 'min': 40, 'max': 95},
    {'semester': '2', 'min': 55, 'max': 85},
];
const results_sem_adv_post = renderChart("Semestre", dataList_sem_adv_post, 'semester', 'Semestres', 'Estadística: Semestres por avance de carrera estudiantes postulados', 'Avance de carrera');

const dataList_sem_adv_win = [
    {'semester': '1', 'min': 60, 'max': 95},
    {'semester': '2', 'min': 65, 'max': 80},
];
const results_sem_adv_win = renderChart("Semestre", dataList_sem_adv_win, 'semester', 'Semestres', 'Estadística: Semestres por avance de carrera estudiantes ganadores', 'Avance de carrera');

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
            <h2 style={mystyle0}><b>Estadísticas por Avance de carrera</b></h2>
            <br/>
            <h2 style={mystyle}><b>Universidades</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_univ_adv_post[0]}
                                                      options={results_univ_adv_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_univ_adv_win[0]}
                                                      options={results_univ_adv_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Países</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_cou_adv_post[0]}
                                                      options={results_cou_adv_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_cou_adv_win[0]}
                                                      options={results_cou_adv_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Regiones</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_reg_adv_post[0]}
                                                      options={results_reg_adv_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_reg_adv_win[0]}
                                                      options={results_reg_adv_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Años</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_yea_adv_post[0]}
                                                      options={results_yea_adv_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_yea_adv_win[0]}
                                                      options={results_yea_adv_win[1]}/></div>
            <br/>

            <h2 style={mystyle}><b>Semestres</b></h2>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_sem_adv_post[0]}
                                                      options={results_sem_adv_post[1]}/></div>
            <br/>
            <div style={CandlestickChartStyle}><Chart chartType="CandlestickChart" data={results_sem_adv_win[0]}
                                                      options={results_sem_adv_win[1]}/></div>
            <br/>
        </div>
    )
}

export default App;