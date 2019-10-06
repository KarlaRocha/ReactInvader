import React, { useState, useEffect } from "react"


const Room = ({ width='100%', height='100%', ...props }) => {
    const ROOM = React.createRef()
    const STEP = 16

    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const handleKeyDown = (event: Event) => {
        switch (event.key) {
            case 'ArrowDown':
                setTop(top + STEP)
                break;
            case 'ArrowUp':
                setTop(top - STEP)
                break;
            case 'ArrowLeft':
                setLeft(left - STEP)
                break;
            case 'ArrowRight':
                setLeft(left + STEP)
                break;
            default:
                break;
        }
    }

     // Component did mount
     useEffect(
        () => window.document.addEventListener("keyDown", handleKeyDown, false), 
        []
    )

    // Component will unmount
    useEffect(() => {
        return () => {
            window.document.removeEventListener("keyDown", handleKeyDown, false)
        }
    }, [])


    const childrenWithProps = () => {
        if (props && props.children) {
            if (props.children.props) {
                const newProps = {
                    props: {
                        ...props.children.props,  
                        objRef: ROOM, stepX: left, stepY: top 
                    }
                }
                return [{ ...props.children, ...newProps }]
            } else {
                return props.children.map((child: any) => {
                    const newProps = {
                        props: {
                            ...child.props,  
                            objRef: ROOM, stepX: left, stepY: top 
                        }
                    }
                    return { ...child, ...newProps  }
                })
            }
        }
    }

    return (
        <div 
            style={{ 
                position: "absolute", 
                width: width, 
                height: height
            }}
            className="room" 
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
        {childrenWithProps()} 
        </div>
    )
}


export default Room