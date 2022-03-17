import React from 'react'
import Skinview3d from "react-skinview3d"

const SkinRender = ({ SkinLink, SkinHeight, SkinWidth }) => {
    return <Skinview3d
        skinUrl={SkinLink}
        height={SkinHeight}
        width={SkinWidth}
    />
}

export default SkinRender