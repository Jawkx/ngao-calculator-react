import React, { useState } from 'react'
import { GiDiamonds, GiClubs, GiHearts, GiSpades } from 'react-icons/gi'

function PlayingCardSelect(props) {
    const [showSuit, selectSuit] = useState(false)

    const getDisplay = () => {
        if (props.type === "n") {
            return props.number
        } else if (props.number === 1) {
            return "A"
        } else {
            return (props.type).toUpperCase()
        }
    }

    const getValue = () => {
        if (props.type === "n") {
            return props.number
        } else if (props.type === "a") {
            return 1
        } else {
            return 10
        }
    }

    const display = getDisplay()
    const value = getValue()

    const label = (
        <div className="playing-card-label">
            <h1 className="playing-card-number">{display}</h1>
        </div>
    )

    const chooseCard = (
        <div
            className="choose-card"
        >
            <div className="playing-card-top-left">
                {label}
            </div>
            <div className="playing-card-content">
                {display}
            </div>
            <div className="playing-card-bottom-right">
                {label}
            </div>
        </div>
    )

    const chooseSuit = (
        <div className="choose-suit">
            <GiDiamonds
                className="suit-button"
                onClick={() => { props.handleClick([value, "d", props.type]) }}
                style={{ color: "red" }}
            />
            <GiClubs
                className="suit-button"
                onClick={() => { props.handleClick([value, "c", props.type]) }}
            />
            <GiHearts
                className="suit-button"
                onClick={() => { props.handleClick([value, "h", props.type]) }}
                style={{ color: "red" }}
            />
            <GiSpades
                className="suit-button"
                onClick={() => props.handleClick([value, "s", props.type])}
            />
        </div>
    )

    return (
        < div
            className="playing-card-display playing-card"
            style={showSuit ? { transform: 'scale(1.1)', cursor: "default" } : null
            }
            onClick={() => {
                selectSuit(!showSuit)
            }}
        >
            { showSuit ? chooseSuit : chooseCard}

        </div >
    )
}

export default PlayingCardSelect