class App extends React.Component {
  constructor() { //aqui comienza el constructor
    super();

    const board = new Array(10);

    for (let i = 0; i < board.length; i++)
      board[i] = new Array(board.length).fill('yellow');

    this.state = {
      board,
      changeColor: 'pink'
    }
    this.changeColor = this.changeColor.bind(this);
  } // aqui acaba el constructor

 

  play(row, column) {
    const changeColor = this.state.changeColor
    const board = this.state.board.map(row=>[...row])
    
    console.log("click");
    board[row][column] = changeColor
    this.setState({board})

  }
  changeColor(color){
    this.setState({changeColor:color});
  }

  render(){
    const board = this.state.board

    return <>
        <header>Pixel Art</header>
        <main>
            <section className="board" style={{
                gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                gridTemplateRows: `repeat(${board.length}, 1fr)`
            }}>
               {board.map((row, i) => row.map((color, j) =>
                            <div
                                key={`${i}-${j}`}
                                className="cell"
                                onClick={() => this.play(i, j)}
                                style={{ backgroundColor: color }}
                            /> )).flat()}
            </section>
          
        </main>
        <div>
          <button className="Red" onClick={()=>this.changeColor('red')}>Red</button>
          <button className="Green" onClick={()=>this.changeColor('green')}>Green</button>
          <button className='Blue' onClick={()=>this.changeColor('blue')}>Blue</button>
        </div>
        
        <footer></footer>
    </>
  }
}
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)
