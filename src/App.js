import React, { useState } from "react";
import CardSelection from "./components/CardSelection/CardSelection";
import CardDisplay from "./components/CardDisplay/CardDisplay";
import getBestCombination from "./algorithms/getBestCombination";
import { FaGithub, FaReact } from "react-icons/fa";
function App() {
  const [currentValue, setValue] = useState([]);
  const [answer, setAnswer] = useState(
    "Press Calculate to show best combination"
  );
  const [calculated, setCalculated] = useState(false);
  const calculate = () => {
    let [cardArr, answer] = getBestCombination(currentValue);
    setValue(cardArr);
    setAnswer(answer);
    setCalculated(true);
  };

  const reset = () => {
    setValue([]);
    setAnswer("Press Calculate to show best combination");
    setCalculated(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">
          <p>Ngao Calculator</p>
          <FaGithub
            className="icon"
            onClick={() =>
              window.open(
                "https://github.com/Jawkx/ngao-calculator-react",
                "_blank"
              )
            }
          />
          <p className="description">
            Click me for details <br /> & source
          </p>
        </h1>
      </header>

      <div className="top-part">
        <CardSelection
          handleClick={(value) => {
            setValue(currentValue.concat([value]));
          }}
          cardSelectionDisplay={currentValue.length < 5}
          currentValue={currentValue}
          reset={() => reset()}
        />
      </div>

      <div
        className="btm-part"
        style={currentValue.length < 5 ? { display: "none" } : null}
      >
        <CardDisplay
          cardsToDisplay={currentValue}
          calculated={calculated}
          answer={answer}
        />
        <h1 className="calculate-button" onClick={() => calculate()}>
          Calculate
        </h1>
      </div>
      <div className="footer">
        <h1>
          Made with &#10084; using <FaReact /> js <br />
          <br />
          by Jaw
        </h1>
      </div>
    </div>
  );
}

export default App;
