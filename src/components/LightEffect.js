import React from 'react'
import './LightEffect.css'

const LightEffect = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="light"/>
    )
})

export default LightEffect