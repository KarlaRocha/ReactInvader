import React, { useState, useEffect } from "react"

import shipImg from '../img/ship.gif'

const SpaceShip = (props: any) => {
    const { xOrigin, yOrigin, stepX, stepY } = props
    
    return(
        <>
            <img
                src={shipImg} 
                style={{
                    position: "absolute",
                    top: (yOrigin + stepY),
                    left: (xOrigin + stepX)
                }}
                ref={props.objRef}
            />
        </>
    )
}

export default SpaceShip