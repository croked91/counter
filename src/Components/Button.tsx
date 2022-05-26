import React from "react";

type ButtonType = {
    name: string
    callback: ()=>void
    disable: boolean
}

export const Button = (props: ButtonType) => {
    return <button disabled={props.disable} onClick={props.callback}>{props.name}</button>
}