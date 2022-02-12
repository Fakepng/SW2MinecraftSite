import React from 'react'
import AboutList from './../../config/about'
import './About.css'

const About = () => {
    const aboutList = AboutList.map(about => {
        return (
            <div className="AboutCard" id={about.id}>
                <h3 className="AboutName">{about.name}</h3>
                <img className="AboutImg" src={about.img} alt={about.name} />
                <div>
                    <p className="AboutCmd">{about.pos}</p>
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