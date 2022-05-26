import s from './App.module.css';
import React, { useState, useEffect, useRef } from 'react'
import { stat } from 'fs';
import { Display } from './Components/Display';
import { Increment } from './Components/Increment';
import { Reset } from './Components/Resset';
import { FullCounter } from './Components/FullCounter';




function App() {
  
  const [state, setState] = useState<number>(JSON.parse(localStorage.getItem("counterValue") || "0"))

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("counterValue") || "0")
    setState(data)   
}, [])

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(state))
  }, [state])
 
  const inc = () => {
    if (state <= 4) setState((prev)=>prev+1)
  }

  const reset = () => {
    setState(0)
  }

  return (
    <div className={s.AppHeader}>
      <FullCounter state={state} reset={reset} inc={inc}/>
    </div>
  );
}

export default App;
