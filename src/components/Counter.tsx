import React, { useState } from 'react'
import classes from './Counter.module.scss'
import '../index.scss'

export const Counter = () => {

  const [number, setNumber] = useState(0)

  const increment = () => {
    setNumber(number + 1)
  }
  return (
    <div>
      <button className={classes.btn} onClick={increment}>{number}</button>
    </div>
  )
}
