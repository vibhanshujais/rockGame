import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "Game"; // Update the title
  }, []);

  const [yourScore, setYourScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState("Start playing");
  const [compChoiceState, setCompChoiceState] = useState("");

  const compGenerated = () => {
    let compChoices = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return compChoices[idx];
  };

  const getResultClass = () => {
    if (result === "You Win!") return "win";
    if (result === "You Lose!") return "lose";
    if (result === "Match Draw!") return "draw";
    return "neutral"; // Default class
  };

  const playGame = (userChoice) => {
    let compChoice = compGenerated();
    setCompChoiceState(compChoice);
    console.log(`You chose: ${userChoice}, Computer chose: ${compChoice}`);

    if (userChoice === compChoice) {
      setResult("Match Draw!");
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      setResult("You Win!");
      document.querySelector("result")
      setYourScore((prevScore) => prevScore + 1); // ✅ Correct way to update state
    } else {
      setResult("You Lose!");
      setCompScore((prevScore) => prevScore + 1); // ✅ Correct way to update state
    }
  };

  return (
    <>
      <div className="App">
        <h1>Rock Paper Scissors</h1>
      </div>
      <div className="choices">
        <div className="choice">
          <img src={rock} alt="rock" height={200} width={200} onClick={() => playGame("rock")} />
        </div>
        <div className="choice">
          <img src={paper} alt="paper" height={200} width={200} onClick={() => playGame("paper")} />
        </div>
        <div className="choice">
          <img src={scissors} alt="scissors" height={200} width={200} onClick={() => playGame("scissors")} />
        </div>
      </div>

      <div className="scores">
        <div className="score">
          <p>{yourScore}</p>
          <p>You</p>
        </div>
        <div className="score">
          <p>{compScore}</p>
          <p>Computer</p>
        </div>
      </div>

      <div className={`result-section ${getResultClass()}`}>
        <p>{result}</p>
      </div>
    </>
  );
}

export default App;
