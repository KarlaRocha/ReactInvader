import React, { useState, useEffect } from "react" 
import ReactDOM from "react-dom" 


function App() {
    const div = React.createRef()
    const step = 16

    const [top, setTop] = useState(100)
    const [left, setLeft] = useState(100)

    function handleKeyDown(event: any){
        // console.log('hi');
        
        // console.log(event.key);
        // console.log(event.keyCode);
        // console.log(event.code);    
        // console.log(event.which);
        
        if(event.key === 'ArrowDown'){
            console.log(div.current.offsetLeft, div.current.offsetTop);
        }
        switch (event.key) {
            case 'ArrowDown':
                setTop(top + step)
                break;
            case 'ArrowUp':
                setTop(top - step)
                break;
            case 'ArrowLeft':
                setLeft(left - step)
                break;
            case 'ArrowRight':
                setLeft(left + step)
                break;
            default:
                break;
        }
    }

    useEffect(
        () => window.document.addEventListener("keyDown", handleKeyDown, false), 
        []
    )

    useEffect(() => {
        return () => {
            window.document.removeEventListener("keyDown", handleKeyDown, false)
        }
    }, [])

    return(
        <>
            <h1>Hello React Invader!</h1>
            <div 
                style={{ 
                    position: "absolute", 
                    width: "700px", 
                    height: "500px"
                }}
                className="room" 
                onKeyDown={handleKeyDown}
                tabIndex={0}>
                    <div 
                        style={{
                            position: "absolute",
                            top: top,
                            left: left
                        }}
                        ref={div}>
                            ship
                    </div>
            </div>
        </> 
    ) 
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
) 