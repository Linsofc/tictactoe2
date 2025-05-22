import calculateWinner from "./calculateWinner";
import Square from "./Square";

export default function Board({xIsNext, squares, onPlay}) {

    function handleClick(i) {
        if (squares[i] !== null || calculateWinner(squares)) return;
        let nextSquares = squares.slice();

        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status = ''
    winner ? status = `Winner: ${winner}` : status = `Next Player: ${xIsNext ? "X" : "O"}`
    

    return (
      <>
        <div className={`status ${winner ? 'win' : 'next'}`}>{status}</div>
        <div className="board">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
}