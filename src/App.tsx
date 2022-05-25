import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import { stat } from 'fs';

type IncrementerType = {
  state: number
  inc: () => void
}

const Incrementer = (props: IncrementerType) => {
  if (props.state !== 5) { return (<button onClick={props.inc}>inc</button>) }
  return (<button disabled onClick={props.inc}>inc</button>)


}



function App() {
  
  const [state, setState] = useState<number>(JSON.parse(localStorage.getItem("counterValue") || "0"))

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("counterValue") || "0")
    setState(data)   
}, [])

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(state))
  }, [state])
 

  const getter = () => {
    let valueAsAString = localStorage.getItem("counterValue")
    if (valueAsAString) {
      let newValue = JSON.parse(valueAsAString)
      setState(newValue)
  }}

  

  const inc = () => {
    if (state <= 4) setState((prev)=>prev+1)
  }

  const reset = () => {
    setState(0)
  }

  return (
    <div >
      {state}
      <Incrementer inc={inc} state={state} />
      <button onClick={reset}>reset</button>
      <button onClick={getter}>getter</button>
    </div>
  );
}

export default App;
