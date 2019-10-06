import React from "react" 
import ReactDOM from "react-dom" 

import Room from './js/Room'
import SpaceShip from './js/SpaceShip'

const App = () => {
    return(
        <>
            <h1>Hello React Invader!</h1>
            <Room width="700px" height="500px">
                <SpaceShip key={0} xOrigin={200} yOrigin={100}/>
            </Room>
        </> 
    ) 
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
) 