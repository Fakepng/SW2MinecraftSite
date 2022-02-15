import React, { useState, useEffect } from 'react'
import './PlayersList.css'

const PlayerList = () => {
    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState([]);

    async function getPlayers() {
        const response = await fetch('https://api.mcsrvstat.us/2/sw2.fakepng.com');
        const responseJson = await response.json();
        setPlayers(responseJson.players.list);
        setLoading(false);
    }

    useEffect(() => {
        getPlayers();
    }, []);

    const playersList = players.map(player => {
        return (
            <div className="PlayerCard" key={player}>
                <h3 className="PlayerName">{player}</h3>
                <img className="PlayerImg" src={`https://minotar.net/avatar/${player}/100.png`} alt={player} />
            </div>
        )
    })

    return (
        loading ? <div className="Player">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div> :
        <div className="Player">
            {playersList}
        </div>
    )
}

export default PlayerList