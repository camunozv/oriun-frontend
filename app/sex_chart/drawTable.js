google.charts.load('current', {'packages':['table']}); 
 
//---------------------------------------------------------------------------- 
//---------------------------------------------------------------------------- 
 
let dataList_univ_sex_post = [ 
    {'university': 'UNAL', 'males': 100, 'females': 80}, 
    {'university': 'UNIANDES', 'males': 70, 'females': 80}, 
]; 
google.charts.setOnLoadCallback(function() { 
    drawTable_sex("Universidad", dataList_univ_sex_post, 'university', 'uni', 'post'); 
}); 
 
export default function drawTable_sex(call_field, dataList, dataList_call_field, div_call_name, div_extra) { 
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
            data.setProperty(i, 0, 'className', 'custom-cell-first-column'); 
        } else { 
            data.setProperty(i, 0, 'className', 'custom-cell-first-column-oddrow'); 
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
            headerRow: 'custom-header', 
            tableRow: 'custom-row', 
            oddTableRow: 'custom-row-odd', 
            selectedTableRow: 'custom-row', 
            hoverTableRow: 'custom-row', 
            headerCell: 'custom-cell', 
            tableCell: 'custom-cell' 
        } 
    }; 
 
    table.draw(data, options); 
}