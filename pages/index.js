import SplashCursor from "./components/spash";
import { useState } from "react";
import Board from "./components/Board";

function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 == 0
  const currentSquare = history[currentMove]

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length -1)
  }

  const moves = history.map((s, i) => {
    let desc = ''
    i > 0
      ? desc = 'Go to move #' + i
      : desc = 'Go to game start'
    
      return(
          <li className="linya" key={i}>
            <button className="jumpList" onClick={() => jumpTo(i)}>{desc}</button>
          </li>
      )
  })

  return(
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>
            {moves}
          </ol>
        </div>
      </div>
  )
}

function HomePage() {
  return(
    <>
    <SplashCursor />
    <Game />
    </>
  );
}

export default function Home() {
  return (
    <>
    <HomePage />
    </>
  );
}
