import React from "react";
import s from "../../App.module.css"
import { Button } from "../Button";

type SetterType = {
    setMinValue: (e: number)=>void
    setMaxValue: (e: number)=>void
    setSettings: ()=>void
    minValue: number
    maxValue: number
}



export const Setter = (props: SetterType) => {

    let i = props.minValue < props.maxValue && props.minValue > -1  ? false : true

    return (
        <div className={s.Setter}>
           
            <div className={s.SetterInputs}>
           <label> Min value: </label> <input value={props.minValue} type="number" onChange={(e)=>props.setMinValue(JSON.parse(e.currentTarget.value))}/> 
           <label> Max value: </label> <input value={props.maxValue} type="number" onChange={(e)=>props.setMaxValue(JSON.parse(e.currentTarget.value))}/> 
           </div>
           
           <div className={s.SetterButton}>
            <Button name="set" disable={i} callback={props.setSettings}/>
            </div>
        </div>
    )
}