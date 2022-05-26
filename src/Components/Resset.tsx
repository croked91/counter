import React from "react";
import { Button } from "./Button";

type ResetType = {
    callback: () => void
  }

export const Reset = (props: ResetType) => {
return (<Button 
        callback={props.callback} 
        name={'reset'}
        disable={false}/>)}

