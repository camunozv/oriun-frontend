import React from 'react'

function Button({type, variant, title, children}) {
  return (
    <button type = {type} variant = {variant}>
        <p>{title}</p>
        {children}        
    </button>
  )
}

export default Button