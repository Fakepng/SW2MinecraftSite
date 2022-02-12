import React from 'react'
import SkinList from './../../config/skin'
import './Skin.css'

const Skin = () => {
    const skinList = SkinList.map(skin => {
        return (
            <div className="SkinCard" id={skin.id}>
                <h3 className="SkinName">{skin.name}</h3>
                <img className="SkinImg" src={skin.img} alt={skin.name} />
                <div>
                    <p className="SkinCmd">{skin.cmd}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <h1 className="SkinTitle">Skin</h1>
            <div className="Skin">
                {skinList}
            </div>
        </>
    )
}

export default Skin