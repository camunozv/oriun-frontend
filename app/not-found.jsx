import { redirect } from 'next/navigation'
import React from 'react'

function NotFoundPage() {

  redirect('/Convocatorias');
  return (
    <div>NotFoundPage</div>
  )
}

export default NotFoundPage