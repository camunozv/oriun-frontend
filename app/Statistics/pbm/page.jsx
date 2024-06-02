"use client";
import { apiCharts } from "@/app/api/Graficas/charts";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { useForm } from "react-hook-form";

function renderChart(
  call_field,
  dataList,
  dataListCallField,
  h_axis,
  title,
  category
) {
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
    [
      call_field,
      "min",
      "min",
      "max",
      "max",
      { type: "string", role: "tooltip" },
    ],
  ];

  for (let i = 0; i < dataList.length; i++) {
    data.push([
      dataList[i][dataListCallField],
      dataList[i]["min"],
      dataList[i]["min"],
      dataList[i]["max"],
      dataList[i]["max"],
      `${dataList[i][dataListCallField]}\n\nRango ${category}: ${dataList[i]["min"]} - ${dataList[i]["max"]}`,
    ]);
  }

  const options = {
    title: title,
    legend: "none",
    allowHtml: true,
    alternatingRowStyle: true,
    width: "100%",
    height: "100%",
    sort: "enable",
    backgroundColor: "#f7f7f7",
    hAxis: {
      title: h_axis,
      scrollbar: "true",
      titleTextStyle: {
        color: "blue",
        fontSize: 16,
        bold: true,
        italic: false,
      },
    },
    vAxis: {
      title: `Rango ${category}`,
      maxValue: 100,
      minValue: 0,
      titleTextStyle: {
        color: "blue",
        fontSize: 16,
        bold: true,
        italic: false,
      },
    },
    animation: {
      startup: true,
      duration: 1500,
      easing: "out",
    },
    tooltip: {
      isHtml: true,
    },
  };

  // PBM
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
  const CandlestickChartStyle = {
    width: "80%",
    height: "550px",
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
        .getInfoCharts("PBM", data.chart_parameter, token)
        .then((response) => {
          setDataToGraph(response.data.postulates);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiCharts
        .getInfoCharts("PBM", data.chart_parameter, token)
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
      renderSettings.title,
      "PBM"
    );
  }

  return (
    <div className="py-10">
      <div className="flex justify-between items-center" style={mystyle0}>
        <h2>
          <b>Estadísticas por PBM</b>
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
      <div style={CandlestickChartStyle}>
        {results.length !== 0 ? (
          <Chart
            chartType="CandlestickChart"
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
