import React from 'react'

import PlayingCardSelect from './PlayingCardSelect'
import SmallDisplay from './SmallDisplay'
const cardList = [
    [1, "a"],
    [2, "n"],
    [3, "n"],
    [4, "n"],
    [5, "n"],
    [6, "n"],
    [7, "n"],
    [8, "n"],
    [9, "n"],
    [10, "n"],
    [10, "j"],
    [10, "q"],
    [10, "k"],
]

function CardSelection(props) {
    const cardsArr = cardList.map(item =>
        <PlayingCardSelect
            type={item[1]}
            number={item[0]}
            handleClick={(value) => props.handleClick(value)}
        />
    )
    return (
        <div className="card-selection">
            {props.cardSelectionDisplay ? <h1 className="card-selection-text"> Select 5 cards</h1> : <h1 className="card-selection-text">Already Selected 5 cards</h1>}
            {props.cardSelectionDisplay ? <SmallDisplay cardArr={props.currentValue} /> : null}
            <div className=" playing-card-container">
                {props.cardSelectionDisplay ? cardsArr : null}
            </div >
        </div>
    )
}

export default CardSelection