import React, { useState } from 'react';
import CardSelection from './components/CardSelection/CardSelection'
import CardDisplay from './components/CardDisplay/CardDisplay'
import getBestCombination from './algorithms/getBestCombination'

function App() {
  const [currentValue, setValue] = useState([])
  const [answer, setAnswer] = useState("Press Calculate to show best combination")
  const [calculated, setCalculated] = useState(false)
  const calculate = () => {
    let [cardArr, answer] = getBestCombination(currentValue)
    setValue(cardArr)
    setAnswer(answer)
    setCalculated(true)
  }

  const reset = () => {
    setValue([])
    setAnswer("Press Calculate to show best combination")
    setCalculated(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title"> Ngao Calculator </h1>
      </header>

      <div className="top-part">
        <CardSelection
          handleClick={(value) => { setValue(currentValue.concat([value])) }}
          cardSelectionDisplay={currentValue.length < 5}
          currentValue={currentValue}
          reset={() => reset()}
        />

      </div>

      <div className="btm-part"
        style={currentValue.length < 5 ? { display: "none" } : null}
      >
        <CardDisplay
          cardsToDisplay={currentValue}
          calculated={calculated}
          answer={answer}
        />
        <h1 className="calculate-button" onClick={() => calculate()}>Calculate</h1>
      </div>
      <div className="footer">
        <h1 className="github-button" onClick={() => window.open("https://github.com/Jawkx/ngao-calculator-react", "_blank")}>Get the source code here</h1>
      </div>

    </div >
  );
}

export default App;
