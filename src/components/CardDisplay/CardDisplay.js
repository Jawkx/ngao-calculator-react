import React from 'react'

import PlayingCardDisplay from './PlayingCardDisplay'

function CardDisplay(props) {
    const cardsArr = props.cardsToDisplay.map(item =>
        <PlayingCardDisplay
            number={item[0]}
            suit={item[1]}
            type={item[2]}
        />
    )
    const cardsFront = cardsArr.slice(3, 5)
    const cardsBack = cardsArr.slice(0, 3)

    return (
        <div className="card-display">
            <div className="display-card-container playing-card-container">
                {cardsFront}
            </div>
            <div className="display-card-container playing-card-container">
                {cardsBack}
            </div>
        </div>
    )
}

export default CardDisplay