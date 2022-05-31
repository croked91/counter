import React from "react";
import { Button } from "../Button";

type ResetType = {
    callback: () => void
    state: number
    max: number
    min: number
    m: boolean
  }

export const Reset = (props: ResetType) => {

  let i = props.min > -1 && props.max > props.min  && props.m === true  ? false : true
return (<Button 
        callback={props.callback} 
        name={'reset'}
        disable={i}/>)}

