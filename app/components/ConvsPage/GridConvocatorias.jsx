import React from 'react'
import CardConvocatorias from './CardConvocatorias'

function GridConvocatorias({calls, admin}) {
  
  return (
    <div className="grid grid-cols-3 w-full gap-6">
        {calls.map((call) => (
            <CardConvocatorias key={call.id} admin={admin} id={call.id} available_slots={call.available_slots} 
            description={call.description} 
            university_id={call.university_id}/>
        ))}
    </div>
  )
}

export default GridConvocatorias