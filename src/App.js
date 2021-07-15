import React, { Component } from 'react'
import Board from './components/Board'
import PlayerInfo from './components/PlayerInfo'
import History from './components/History'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      squares:new Array(9).fill(null),
      stepCount:0,
      history:[],
    }
  }
  curPlayer=()=>{
    const { stepCount } = this.state;
    return stepCount%2===0?"X":"O"
  }

  getWinner=(squares)=> {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
    

   resetGame=()=>{
    this.setState({
      squares:[],
      stepCount:0,
      history:[],
    })
  }

  handleClickHistory=(index)=>{
    let {history}=this.state
    this.setState({
      squares:history[index].squares
    })
  }

  clickSquare=(index)=>{
    let {squares,stepCount} = this.state;
    if(this.getWinner(squares)||squares[index]){
      return 
    }
    squares=squares.slice();
    squares[index]=this.curPlayer();
    const { history } = this.state;
    const historyNew = [
      ...history.slice(0,stepCount),
      {
        squares:squares,
        stepCount:this.state.stepCount,
        player:this.curPlayer(),
        index:index
      }
    ]
    console.log(historyNew);
    this.setState((prevState)=>({
      history:historyNew,
      stepCount:prevState.stepCount+1,
      squares
    }))
    }

  render() {
    const curPlayer = this.curPlayer()
    const { history,squares } = this.state
    return (
      <div className="App">
        <div className="leftPanel">
          <Board squares={squares} curPlayer={curPlayer} clickSquare={this.clickSquare}/>
        </div>
        <div className="rightPanel">
          <PlayerInfo 
            winner={this.getWinner(squares)}
            curPlayer={curPlayer}/>
          <History 
            history={history} 
            resetGame={this.resetGame} 
            onClickHistory={this.handleClickHistory}/>
        </div>
      </div>
    )
  }
}
export default App;
