import React from 'react'

const Button = ({symbol, action, thisClass}) => {
  return (
    <div onClick={action} className={thisClass}>{symbol}</div>
  )
}

export default Button;