import React from "react";
import style from "./Display.module.css"

type DisplayType = {
    state: number
    max: number
    min: number
}

const OkDisplay =(props:DisplayType)=>{
    if (props.min < props.max) {
        return <div className={props.state === props.max ? style.stopped : style.run}>{props.state}</div>} 
        return <div>You try to enter wrong value</div>
}


export const Display = (props:DisplayType) => {
    if (props.min > -1 && props.min < props.max && props.max > 0) {
    return <div className={props.state === props.max ? style.stopped : style.run}>{props.state}</div>} 
    return <div>You try to enter wrong value</div>
}