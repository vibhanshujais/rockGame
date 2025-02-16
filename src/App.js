/* import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [yourScore, setYourScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState("Start playing");

  let yourscore = 0;
  let compscore = 0;
  let win = "You Win!";
  let lose = "You Lose!";
  let  draw = "Match Draw!";
  


  const compGenerated = () => {
    let compChoices = ['rock', 'paper', 'scissors'];
    let idx = Math.floor(Math.random() * 3);
    let output = compChoices[idx];
    console.log(output);
    console.log(yourscore,compscore);
    return output;
    
  }

  const rockHit = () => {
    console.log("rock clicked");
    let compChoice = compGenerated();
    if (compChoice === 'rock'){
      console.log("Match is draw. Play again!")
      setResult('Match is draw. Play again');
    } else{
      if(compChoice==='scissors'){
        console.log("you win!");
        yourscore++;
        setYourScore(yourscore);
      } else{
        console.log("you lose!");
        compscore++;
        setCompScore(compscore);
      }
    }
  }

  const paperHit = () => {
    console.log("paper clicked");
    let compChoice = compGenerated();
    if (compChoice === 'paper'){
      console.log("Match is draw. Play again!");
      setResult('Match is draw. Play again');
    } else{
      if(compChoice==='rock'){
        console.log("you win!");
        yourscore++;
        setYourScore(yourScore);
      } else{
        console.log("you lose!");
        compscore++;
        setCompScore(compscore);
      }
    }
  }

  const scissorsHit = () => {
    console.log("scissors clicked");
    let compChoice = compGenerated();
    if (compChoice === 'scissors'){
      console.log("Match is draw. Play again!");
      setResult('Match is draw. Play again');
    } else{
      if(compChoice==='paper'){
        console.log("you win!");
        yourscore++;
        setYourScore(yourScore);
      } else{
        console.log("you lose!");
        compscore++;
        setCompScore(compscore);
      }
    }
  }
  
  return (
    <>
      <div className="App">
        <h1>Rock Paper Scissors</h1>
      </div>
      <div className="choices">
        <div className="choice">
          <img src={rock} alt="rock" height={200} width={200} onClick={rockHit} id='rock' />
        </div>
        <div className="choice" id='paper'>
        <img src={paper} alt="rock" height={200} width={200} onClick={paperHit} />
        </div>
        <div className="choice" id='scissors'>
        <img src={scissors} alt="rock" height={200} width={200} onClick={scissorsHit} />
        </div>
      </div>

      <div className='scores'>
        <div className='score'>
          <p id='yourScore'>{yourScore}</p>
          <p>You</p>
        </div>
        <div className='score'>
          <p id='compScore'>{compScore}</p>
          <p>Computer</p>
        </div>
      </div>

      <div>
        <p id='result'>{result}</p>
      </div>

    </>
  );
}

export default App;
 */



















import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import "./App.css";
import React, { useState } from "react";

function App() {
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
