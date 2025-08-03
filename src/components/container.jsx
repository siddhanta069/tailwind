import React from 'react'

const Container = ({children}) => {
  return (
    <div className = "max-w-4xl mx-auto px-4 md:py-2">
        {children}
    </div>
  )
}

export default Container
