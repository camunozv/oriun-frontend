"use client";
import React from "react";
import TableChart from "./TableChart";
import { dataList_univ_adm_post, dataList_univ_adm_win } from "./dataToGraph";

function StatisticsPage() {
  return (
    <>
      <h1>Holaaaaaa</h1>
      <TableChart my_data={dataList_univ_adm_post} my_title={'Hello there'}/>
      <TableChart my_data={dataList_univ_adm_win} my_title={'Hello there'}/>
    </>
  );
}

export default StatisticsPage;
