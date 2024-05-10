import React from 'react'

function ModifyCallPage({params}) {

    const call_id = params.lambda;

  return (
    <div>ModifyCallPage {call_id}</div>
  )
}

export default ModifyCallPage