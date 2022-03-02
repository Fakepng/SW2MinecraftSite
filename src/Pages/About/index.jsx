import React from 'react'
import AboutList from './../../config/about'
import './About.css'

const About = () => {
    const NumberOfLead = AboutList.slice(0, 1);
    const LeadaboutList = AboutList.map((Leadabout, index) => {
        if (index >= NumberOfLead[0] + 1 || index === 0) return null
        return (
            <div className="AboutCard" key={Leadabout.name}>
                <h3 className="AboutName">{Leadabout.name}</h3>
                <img className="AboutImg" src={`https://minotar.net/armor/body/${Leadabout.name}/100.png`} alt={Leadabout.name} />
                <div className="AboutCmd">
                    <h2 className="real">{Leadabout.real}</h2>
                    <p>{Leadabout.pos}</p>
                </div>
            </div>
        )
    })

    const aboutList = AboutList.map((about, index) => {
        if (index < NumberOfLead[0] + 1 || index === 0) return null
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
            <div className="LeadAbout">
                {LeadaboutList}
            </div>
            <div className="About">
                {aboutList}
            </div>
        </>
    )
}

export default About