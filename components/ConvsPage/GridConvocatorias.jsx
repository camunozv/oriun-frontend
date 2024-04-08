"use client";
import React, { useEffect, useState } from "react";
import CardConvocatorias from "./CardConvocatorias";
import { apiDetailsOpenCall } from "@/app/api/Convocatorias/detailsOpenCall";
import { apiFilterOpenCalls } from "@/app/api/Convocatorias/filterOpenCalls";
import { useSession } from "next-auth/react";
import { data } from "autoprefixer";
import { redirect } from "next/dist/server/api-utils";

function GridConvocatorias({ admin }) {
  // const [my_calls, set_my_calls] = useState();
  // const { data: session, status } = useSession({
  //   required:true,
  //   onUnauthenticated () 
  //   {
  //     redirect('/Ingreso');
  //   },
    
  // });

  // if (status == 'loading'){
  //   return <div>loading...</div>
  // } 

  // useEffect(() => {
  //   apiFilterOpenCalls.getFilterOpenCalls()
  // },[])
  


  return (
    <div className="grid grid-cols-3 w-full gap-6">
      
      {/* {my_calls?.map((call) => (
        
        <CardConvocatorias
          key={call.id}
          admin={admin}
          id={call.id}
          available_slots={call.available_slots}
          description={call.description}
          university_id={call.university_id}
        />
      ))} */}
      ddd
    </div>
  );
}

export default GridConvocatorias;
