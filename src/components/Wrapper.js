import React from 'react'
import './Wrapper.css'

const Wrapper = React.forwardRef((props, ref) => {
    return (
        <div onMouseMove={props.onMouseMove} ref={ref} className="wrapper">
            {props.children}
        </div>
    )
})

export default Wrapper