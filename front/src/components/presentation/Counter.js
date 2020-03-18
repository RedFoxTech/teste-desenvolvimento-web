import './Counter.css'

import React from 'react'

const Counter = ({value, children}) => {
  if (!value) return children

  return (
    <div className="counter">
      <small className="value">
        {value}
      </small>
      {children}
    </div>
  )
}

export default Counter
