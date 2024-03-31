import React from 'react'
import CardConvocatorias from './CardConvocatorias'

function GridConvocatorias({calls}) {
  return (
    <div className="grid grid-cols-3 w-full gap-6">
        {calls.map((call) => (
            <CardConvocatorias admin={true} code={call.id} />
        ))}
    </div>
  )
}

export default GridConvocatorias