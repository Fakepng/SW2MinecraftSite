import React from 'react'
import SkinList from './../../config/skin'
import ClipboardJS from "clipboard";
import { GrCopy } from "react-icons/gr";
import './Skin.css'

const Skin = () => {
    const skinList = SkinList.map(skin => {
        new ClipboardJS(".button");
        return (
            <div className="SkinCard" key={skin.id}>
                <h3 className="SkinName">{skin.name}</h3>
                <img className="SkinImg" src={skin.img} alt={skin.name} />
                <div className="SkinCmdDiv">
                    <p className="SkinCmd">{skin.cmd}</p>
                    <button
                        className="button"
                        data-clipboard-action="copy"
                        data-clipboard-text={skin.cmd}
                    >
                        <GrCopy />
                    </button>
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