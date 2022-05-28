import React from "react";
import { Button } from "./Button";

type SetterType = {
    setMinValue: (e: number)=>void
    setMaxValue: (e: number)=>void
    setSettings: ()=>void
    minValue: number
    maxValue: number
}

export const Setter = (props: SetterType) => {
    return (
        <div>
           <label> Min <input value={props.minValue} type="number" onChange={(e)=>props.setMinValue(JSON.parse(e.currentTarget.value))}/> </label>
           <label> Max <input value={props.maxValue} type="number" onChange={(e)=>props.setMaxValue(JSON.parse(e.currentTarget.value))}/> </label>
            <Button name="set" disable={false} callback={props.setSettings}/>
        </div>
    )
}