"use client"
import React, { useEffect } from 'react';
import styles from './stylezz.module.css'; // Importa los estilos CSS en módulos

import { GoogleDataTableColumnRoleType } from 'react-google-charts';
google.charts.load('current', { packages: ['table'] });

import drawTable_sex from './drawTable';

function ChartComponent() {
    useEffect(() => {
        
        google.charts.setOnLoadCallback(() => {
            drawTableSex("Universidad", dataList_univ_sex_post, 'university', 'uni', 'post');
        });
    }, []);

    const dataList_univ_sex_post = [
        { 'university': 'UNAL', 'males': 100, 'females': 80 },
        { 'university': 'UNIANDES', 'males': 70, 'females': 80 },
    ];

    function drawTableSex(call_field, dataList, dataList_call_field, div_call_name, div_extra) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', call_field);
        data.addColumn('number', 'Masculino');
        data.addColumn('number', 'Femenino');

        for (var i = 0; i < dataList.length; i++) {
            var row = [
                dataList[i][dataList_call_field],
                dataList[i]['males'],
                dataList[i]['females']
            ];
            data.addRow(row);
        }

        for (var i = 0; i < dataList.length; i++) {
            if (i % 2 === 0) {
                data.setProperty(i, 0, 'className', styles.customCellFirstColumn); // Usa los estilos CSS en módulos
            } else {
                data.setProperty(i, 0, 'className', styles.customCellFirstColumnOddRow); // Usa los estilos CSS en módulos
            }
        }

        var table = new google.visualization.Table(document.getElementById(`table_div_${div_call_name}_sex_${div_extra}`));

        var options = {
            allowHtml: true,
            alternatingRowStyle: true,
            width: '100%',
            height: '100%',
            sort: 'enable',
            cssClassNames: {
                headerRow: styles.customHeader, // Usa los estilos CSS en módulos
                tableRow: styles.customRow, // Usa los estilos CSS en módulos
                oddTableRow: styles.customRowOdd, // Usa los estilos CSS en módulos
                selectedTableRow: styles.customRow, // Usa los estilos CSS en módulos
                hoverTableRow: styles.customRow, // Usa los estilos CSS en módulos
                headerCell: styles.customCell, // Usa los estilos CSS en módulos
                tableCell: styles.customCell // Usa los estilos CSS en módulos
            }
        };

        table.draw(data, options);
    }

    return (
        <>
            <h2>Estadística: Universidades por género estudiantes postulados</h2>
            <div id="table_div_uni_sex_post"></div>
        </>
    );
}

export default ChartComponent;

