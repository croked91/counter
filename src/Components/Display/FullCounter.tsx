import React from "react";
import s from "../../App.module.css";
import { Display } from "./Display/Display";
import { Increment } from "../Increment/Increment";

import { Reset } from "../Reset/Resset";


type FullCounterType = {
    state: number
    reset: ()=>void
    inc: ()=>void
    max: number
    min: number
    m:boolean
    
}
sdfsd
export const FullCounter = (props: FullCounterType) => {
    return (
        <div className={s.Main}> 
            <div className={s.Display}>
            <Display min={props.min} max={props.max} state={props.state} m={props.m}/>
            </div>

            <div className={s.IncReset}>
            <Increment m={props.m} state={props.state} inc={props.inc} max={props.max} min={props.min}/>
            <Reset m={props.m} state={props.state} max={props.max} min={props.min} callback={props.reset}/>
            </div>

        </div>
    )
}