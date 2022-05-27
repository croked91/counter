import React from "react";
import { Button } from "./Button";

type IncrementerType = {
    state: number
    inc: () => void
    max: number
  }

export const Increment = (props: IncrementerType) => {
return (<Button 
        disable={props.state !== props.max ? false : true} 
        callback={props.inc} 
        name={'inc'}/>)}

