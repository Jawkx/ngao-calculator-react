import React from 'react'
import { GiDiamonds, GiClubs, GiHearts, GiSpades } from 'react-icons/gi'

function SmallDisplay(props) {
    const display = props.cardArr.map(item =>
        <div className="small-display-item">
            <h1> {item[2] === "n" ? item[0] : item[2].toUpperCase()}</h1>
            {item[1] === "d" ? <GiDiamonds style={{ color: "red" }} /> : item[1] === "c" ? <GiClubs /> : item[1] === "h" ? <GiHearts style={{ color: "red" }} /> : item[1] === "s" ? <GiSpades /> : null}
        </div>
    )
    return (
        <div className="small-display">
            {display}
        </div>
    )
}

export default SmallDisplay