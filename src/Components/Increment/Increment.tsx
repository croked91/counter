import React from "react";
import { Button } from "../Button";

type IncrementerType = {
  state: number
  inc: () => void
  max: number
  min: number
  m: boolean
}

export const Increment = (props: IncrementerType) => {

  let i = props.state !== props.max && props.min > -1 && props.max > props.min && props.m === true ? false : true

  return (<Button
    disable={i}
    callback={props.inc}
    name={'inc'} />)
}

