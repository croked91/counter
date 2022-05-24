import './App.css';
import React, {useState} from 'react'
import { stat } from 'fs';

type IncrementerType = {
  state: number
  inc: ()=>void
}

const Incrementer = (props:IncrementerType) => {
  if (props.state !== 5) 
    {return(<button onClick={props.inc}>inc</button>)}
  return (<button disabled onClick={props.inc}>inc</button>)


}

function App() {
  let [state, setState] = useState(0)
  
  const inc = () => {
   if (state <= 4)  setState(state+1)
  }

  const reset = () => {
    setState(0)
   }
  
  return (
    <div >
      {state}
      <Incrementer inc={inc} state={state}/>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
