import React,{Component} from 'react'
import Square from './Square'

class Board extends Component {
    genSquareUI(index){
        const { squares ,clickSquare ,curPlayer} = this.props
        return (<Square index={index} value={squares[index]} clickSquare={clickSquare}/>)
    }
    render(){ 
        return (
            <div className="board">
                <div className="row">
                    {this.genSquareUI(0)}
                    {this.genSquareUI(1)}
                    {this.genSquareUI(2)}
                </div>
                <div className="row">
                    {this.genSquareUI(3)}
                    {this.genSquareUI(4)}
                    {this.genSquareUI(5)}
                </div>
                <div className="row">
                    {this.genSquareUI(6)}
                    {this.genSquareUI(7)}
                    {this.genSquareUI(8)}
                </div>
            </div>
        )
    }
}

export default Board