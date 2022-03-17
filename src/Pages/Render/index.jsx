import React, { useState } from 'react'
import Skinview3d from "react-skinview3d"
import './Render.css'

const Render = () => {
    const [skinLink, setSkinLink] = useState('/images/skin/fakepng.png');
    const [height, setHeight] = useState(200);
    const [width, setWidth] = useState(100);

    return (
        <div className="render">
            <form>
                <label>
                    <input
                        type="text"
                        value={skinLink}
                        name="Link" 
                        onChange={(e) => setSkinLink(e.target.value)}
                    />
                    <input
                        type="number"
                        name="Height" 
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <input
                        type="number"
                        name="Width" 
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                    />
                </label>
            </form>
            <Skinview3d
                className='viewer'
                skinUrl={skinLink}
                height={height}
                width={width}
            />
        </div>
    )
}

export default Render