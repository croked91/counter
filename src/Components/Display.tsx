import React from "react";

type DisplayType = {
    state: number
}

export const Display = (props:DisplayType) => {
    return <div>{props.state}</div>
}