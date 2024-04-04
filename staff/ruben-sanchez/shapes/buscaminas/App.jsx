function App() {
  const matrix = new Array(8);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(matrix.length);

    for (let j = 0; j < matrix[i].length; j++) {
      const isBomb = Math.floor((Math.random() *2))

      const cell = {
        isBomb: !isBomb,
        isClicked: false,
        bombsAside: 0,
      };

      matrix[i][j] = cell;
    }
  }

  const [board, setBoard] = React.useState(matrix);

  function handleCellClick(i, j) {
    const boardCopy = [...board].map((row) => [...row]);

    const cell = boardCopy[i][j];

    cell.isClicked = true;

    setBoard(boardCopy);

    if(cell.isBomb){
     setTimeout(()=> alert('Explotaste'), 1000)
    }
  }

  return (
    <>
      <header>
        <h1>Minesweeper</h1>
      </header>

      <main>
        <div
          className="board"
          style={{
            gridTemplate: `repeat(${matrix.length}, 1fr) / repeat(${matrix.length}, 1fr) `,
          }}
        >
          {board
            .map((row, i) =>
              row.map((cell, j) =>
                cell.isClicked ? (
                  <div className="clicked-cell">{cell.isBomb ? 'Boom' : cell.bombsAside}</div>
                ) : (
                  <div className="no-clicked-cell">
                    <button
                      className="cell-button"
                      onClick={() => handleCellClick(i, j)}
                    ></button>
                  </div>
                )
              )
            )
            .flat()}
        </div>
      </main>

      <footer></footer>
    </>
  );
}
