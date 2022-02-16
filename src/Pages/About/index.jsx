import React from 'react'
import AboutList from './../../config/about'
import './About.css'

const About = () => {
    const aboutList = AboutList.map(about => {
        return (
            <div className="AboutCard" key={about.name}>
                <h3 className="AboutName">{about.name}</h3>
                <img className="AboutImg" src={`https://minotar.net/armor/body/${about.name}/100.png`} alt={about.name} />
                <div className="AboutCmd">
                    <h2 className="real">{about.real}</h2>
                    <p>{about.pos}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <h1 className="AboutTitle">About US</h1>
            <div className="About">
                {aboutList}
            </div>
        </>
    )
}

export default About