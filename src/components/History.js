import React,{Component} from 'react'
import Square from './Square'
import './History.css'

class History extends Component {
    render(){
        const { history ,resetGame, onClickHistory} = this.props
        return (
            <div className="history">
                <button onClick={resetGame}>
                    重新开始
                </button>
                <ul>
                    {history.map((item,index)=>( 
                    <li key={index}>
                        <button onClick={()=>onClickHistory(index)}>
                            {item.stepCount+1}:棋手{item.player}下到第{item.index+1}个位置
                        </button>
                    </li>))}
                </ul>
            </div>
        )
        
    }
}

export default History