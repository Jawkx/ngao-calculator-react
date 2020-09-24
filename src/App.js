import React, { useState } from 'react';
import CardSelection from './components/CardSelection/CardSelection'
import CardDisplay from './components/CardDisplay/CardDisplay'
import getBestCombination from './algorithms/getBestCombination'

function App() {
  const [currentValue, setValue] = useState([])
  const [answer, setAnswer] = useState("")
  const [calculated, setCalculated] = useState(false)
  const calculate = () => {
    let [cardArr, answer] = getBestCombination(currentValue)
    setValue(cardArr)
    setAnswer(answer)
    setCalculated(true)
  }

  const reset = () => {
    setValue([])
    setAnswer("")
    setCalculated(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Ngao Calculator</h1>
      </header>
      <hr />
      <body>
        <div className="top-part">
          <CardSelection
            handleClick={(value) => { setValue(currentValue.concat([value])) }}
            cardSelectionDisplay={currentValue.length < 5}
            currentValue={currentValue}
          />
        </div>

        <hr />

        <div className="btm-part"
          style={currentValue.length < 5 ? { display: "none" } : { display: "flex" }}
        >
          <h1 className="reset-button"
            onClick={() => reset()}
          >
            Repick Cards
          </h1>

          <CardDisplay
            cardsToDisplay={currentValue}
            calculated={calculated}
            answer={answer}
          />

          <h1 className="calculate-button" onClick={() => calculate()}>Calculate</h1>

        </div>

      </body>
    </div >
  );
}

export default App;