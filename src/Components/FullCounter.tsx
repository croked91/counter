import React from "react";
import { Display } from "./Display";
import { Increment } from "./Increment";
import { Reset } from "./Resset";
import s from "../App.module.css"

type FullCounterType = {
    state: number
    reset: ()=>void
    inc: ()=>void
    max: number
    min: number
    
}

export const FullCounter = (props: FullCounterType) => {
    return (
        <div className={s.Main}> 
            <Display min={props.min} max={props.max} state={props.state}/>
            <Increment state={props.state} inc={props.inc} max={props.max}/>
            <Reset callback={props.reset}/>
        </div>
    )
}