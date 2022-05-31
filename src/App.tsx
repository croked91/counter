import s from './App.module.css';
import React, { useState, useEffect, useRef } from 'react'
import { stat } from 'fs';
import { Display } from './Components/Display/Display/Display';
import { Increment } from './Components/Increment/Increment';
import { Reset } from './Components/Reset/Resset';
import { FullCounter } from './Components/Display/FullCounter';
import { Setter } from './Components/Settings/Setter';




function App() {
  
 

  const [min, setMin] = useState<number>(JSON.parse(localStorage.getItem("minValue") || "0"))
  const [max, setMax] = useState<number>(JSON.parse(localStorage.getItem("maxValue") || "0"))
  const [state, setState] = useState<number>(JSON.parse(localStorage.getItem("counterValue") || "0"))
  let [m, setM] = useState<boolean>(false)
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("counterValue") || "0")
    setState(data)   
}, [])

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(state))
  }, [state])
 
  const inc = () => {
    if (state <= max) setState((prev)=>prev+1)
  }

  const reset = () => {
    setState(min)    
  }

  const setMinValue = (e: number)=> {
    setMin(e)  
    setM (false)
  
  }
  
  const setMaxValue = (e: number)=> {
    setMax(e)  
    setM (false)
  }

  const setSettings = () =>{
    localStorage.setItem("minValue", JSON.stringify(min))
    localStorage.setItem("maxValue", JSON.stringify(max))
    setM (true)
    setState(min)
  }


  return (
    <div className={s.AppHeader}>
      <Setter minValue={min} maxValue={max} setMinValue={setMinValue} setMaxValue={setMaxValue} setSettings={setSettings} />
      <FullCounter min={min} state={state} reset={reset} inc={inc} max={max} m={m}/>
    </div>
  );
}

export default App;
