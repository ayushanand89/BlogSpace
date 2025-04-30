//simple reusable layout wrapper — its main purpose is to standardize horizontal spacing and centering for your content across the app.

import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-full mx-auto px-4'>{children}</div>
  )
}

export default Container