import React from "react";
import { Button } from "./Button";

type IncrementerType = {
    state: number
    inc: () => void
  }

export const Increment = (props: IncrementerType) => {
return (<Button 
        disable={props.state !== 5 ? false : true} 
        callback={props.inc} 
        name={'inc'}/>)}

