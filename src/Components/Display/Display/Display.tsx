import React from "react";
import style from "./Display.module.css"

type DisplayType = {
    state: number
    max: number
    min: number
    m: boolean
}

export const Display = (props: DisplayType) => {
    
    let i = props.min > -1 && props.min < props.max ? "enter values end press \"set\"" : "You try to enter wrong value"
    let x = <div className={style.Number}>{props.state}</div>


    if (props.m !== false) {
        return <div className={props.state === props.max ? style.stopped : style.run}>{x}</div>  
    }
    return <div className={props.min < props.max && props.min > -1 ? style.run : style.stopped}>{i}</div>
}