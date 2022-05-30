import React from "react";
import style from "./Display.module.css"

type DisplayType = {
    state: number
    max: number
    min: number
    m: boolean
}


export const OldDisplay = (props:DisplayType) => {
    if (props.min > -1 && props.min < props.max) {
    return <div className={props.state === props.max ? style.stopped : style.run}>{props.state}</div>} 
    return <div>You try to enter wrong value</div>
}


export const Display = (props:DisplayType) => {
    if (props.m === false) {
    return <div className={props.state === props.max ? style.stopped : style.run}>жопа</div>} 
    return <OldDisplay state={props.state} m={props.m} min={props.min} max={props.max}/>
}