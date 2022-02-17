import React, { useState, useEffect } from 'react'
import './PlayersList.css'

const PlayerList = () => {
    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState([]);
    const [reload, setReload] = useState(false);

    async function getPlayers() {
        const response = await fetch('https://api.fakepng.com/minecraft');
        const responseJson = await response.json();
        setPlayers(responseJson.players);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        setReload(false);
        if (!reload) {
            getPlayers();
        }
    }, [reload]);

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
            <>
                <div>
                    {players.length > 0 ? <><h1 className="centerandpadding">{players.length} online<div className="reloadbutton" onClick={() => setReload(true)}>Reload</div></h1> <div className="Player">{playersList}</div></> :
                        <h1 className="centerandpadding">No player is online<div className="reloadbutton" onClick={() => setReload(true)}>Reload</div></h1>}
                </div>
            </>
    )
}

export default PlayerList