import React from 'react'
import { GiDiamonds, GiClubs, GiHearts, GiSpades } from 'react-icons/gi'
function PlayingCardDisplay(props) {

    const getSuit = () => {
        switch (props.suit) {
            case "d": return [<GiDiamonds />, "red"]
            case "c": return [<GiClubs />, "black"]
            case "h": return [<GiHearts />, "red"]
            case "s": return [<GiSpades />, "black"]
            default: return [null, "grey"]
        }
    }

    const getText = () => {
        if (props.type === "n") {
            return props.number
        } else {
            return (props.type).toUpperCase()
        }
    }

    const text = getText()
    const [suit, color] = getSuit()

    const label = (
        <div className="playing-card-label">
            <h1 className="playing-card-number">{text}</h1>
            <i className="playing-card-suit">{suit} </i>
        </div>
    )

    return (
        <div
            className="playing-card-display playing-card"
            style={{ color: color }}
        >
            <div className="playing-card-display playing-card-top-left">
                {label}
            </div>
            <div className="playing-card-display playing-card-content">
                {text}
            </div>
            <div className="playing-card-display playing-card-bottom-right">
                {label}
            </div>
        </div>
    )
}

export default PlayingCardDisplay