import React from "react";
import style from "./Display.module.css"

type DisplayType = {
    state: number
    max: number
}

export const Display = (props:DisplayType) => {
    return <div className={props.state === props.max ? style.stopped : style.run}>{props.state}</div>
}