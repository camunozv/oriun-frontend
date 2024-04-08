"use client";
import React from "react";
import CardConvocatorias from "./CardConvocatorias";

function GridConvocatorias({ admin, calls }) {
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
      
      {calls?.map((call) => (
        
        <CardConvocatorias
          key={call.id}
          admin={admin}
          id={call.id}
          available_slots={call.available_slots}
          description={call.description}
          university_id={call.university_id}
        />
      ))}

    </div>
  );
}

export default GridConvocatorias;
