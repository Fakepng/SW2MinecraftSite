import React from 'react'
import Skinview3d from "react-skinview3d"
import './Render.css'

const Render = () => {
    return (
        <div className="render">
            <Skinview3d
                className='viewer'
                skinUrl={'/images/skin/fakepng.png'}
                height={200}
                width={100}
            />
        </div>
    )
}

export default Render