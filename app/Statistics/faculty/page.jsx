"use client";
import { apiCharts } from "@/app/api/Graficas/charts";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { useForm } from "react-hook-form";

function renderChart(call_field, dataList, dataListCallField, h_axis, title) {
  /*
    Args:
    - call_field (string): Nombre Del campo del filtro de la convocatoria que se mostrará en la tabla
    - dataList (List of dict): Datos para llenar la tabla. Cada diccionario debe tener info. para los campos a visualizar
    - dataListCallField (string): Nombre Del campo del filtro de la convocatoria que se encuentra en los dataList a enviar
    - h_axis (string): Titulo del eje x
    - title (string): Titulo de la gráfica
     */
  var columns = [call_field];

  const keys = Object.keys(dataList[0]);

  const index = keys.indexOf(dataListCallField);
  // Si dataList_call_field se encuentra en el array, eliminarlo
  if (index !== -1) {
    keys.splice(index, 1);
  }

  columns = columns.concat(keys);

  const data = [columns];

  for (let i = 0; i < dataList.length; i++) {
    const row = [dataList[i][dataListCallField]];
    for (let j = 0; j < keys.length; j++) {
      row.push(dataList[i][keys[j]]);
    }
    data.push(row);
  }

  const options = {
    title: title,
    allowHtml: true,
    alternatingRowStyle: true,
    width: "100%",
    height: "100%",
    sort: "enable",
    backgroundColor: "#f7f7f7",
    hAxis: {
      title: h_axis,
      scrollbar: "true",
    },
    vAxis: {
      title: "Número Estudiantes",
    },
    animation: {
      startup: true,
      duration: 1500,
      easing: "out",
    },
  };

  return [data, options];
}

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
    margin: "0 auto",
  };

  const { data: session, state } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  const token = session?.access;

  const { register, reset, handleSubmit } = useForm();

  const [dataToGraph, setDataToGraph] = useState([]);
  const [renderSettings, setRenderSettings] = useState({
    caso: "",
    field: "",
    title: "",
  });
  const my_submit = handleSubmit((data) => {
    if (data.chart_parameter === "seleccion") {
      alert("Ningun parámetro de gráfica seleccionado.");
      return;
    }
    if (data.winner_state === "seleccion") {
      alert("Ningun parámetro de estado de ganador seleccionado.");
      return;
    }

    switch (data.chart_parameter) {
      case "university":
        setRenderSettings({
          caso: "Universidades",
          field: "university",
          title: `Estudiantes ${data.winner_state} por universidad.`,
        });
        break;
      case "semester":
        setRenderSettings({
          caso: "Semestre",
          field: "semester",
          title: `Estudiantes ${data.winner_state} por semestre.`,
        });
        break;
      case "region":
        setRenderSettings({
          caso: "Region",
          field: "region",
          title: `Estudiantes ${data.winner_state} por region.`,
        });
        break;
      default:
        setRenderSettings({
          caso: "País",
          field: "country",
          title: `Estudiantes ${data.winner_state} por país.`,
        });
    }

    if (data.winner_state === "postulates") {
      apiCharts
        .getInfoCharts("faculty", data.chart_parameter, token)
        .then((response) => {
          setDataToGraph(response.data.postulates);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiCharts
        .getInfoCharts("faculty", data.chart_parameter, token)
        .then((response) => {
          setDataToGraph(response.data.winners);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    reset();
  });

  let results = [];
  if (dataToGraph?.length !== 0) {
    results = renderChart(
      renderSettings.caso,
      dataToGraph,
      renderSettings.field,
      renderSettings.caso,
      renderSettings.title
    );
  }

  return (
    <div className="py-10">
      <div className="flex justify-between items-center" style={mystyle0}>
        <h2>
          <b>Estadísticas por facultad</b>
        </h2>
        <form onSubmit={my_submit} className="flex gap-3 p-6">
          <select
            {...register("chart_parameter")}
            className="bg-white rounded-lg text-blue-500 h-10"
          >
            
            <option value="seleccion">Selección</option>
            <option value="university">Universidad</option>
            <option value="semester">Semestre</option>
            <option value="region">Región</option>
            <option value="country">País</option>
          </select>

          <select
            {...register("winner_state")}
            className="bg-white rounded-lg text-blue-500 h-10"
          >
            <option value="seleccion">Selección</option>
            <option value="postulates">Postulados</option>
            <option value="winners">Ganadores</option>
          </select>

          <button
            type="submit"
            className="text-center justify-center flex items-center bg-white rounded-lg text-blue-500 h-10 p-5"
          >
            Buscar
          </button>
        </form>
      </div>

      <br />
      <h2 style={mystyle}>
        <b>{renderSettings.caso}</b>
      </h2>
      <br />
      <div style={columnChartStyle}>
        {results.length !== 0 ? (
          <Chart
            chartType="ColumnChart"
            data={results[0]}
            options={results[1]}
          />
        ) : (
          <>No data to show</>
        )}
      </div>
      <br />
    </div>
  );
}

export default App;
