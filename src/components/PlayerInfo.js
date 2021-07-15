import React,{Component} from 'react'
import './PlayerInfo.css'

class PlayerInfo extends Component {
    render(){
        let {winner,curPlayer} =this.props;
        return(
        <div>
            {winner?(<div>获胜者是：{winner}</div>):(<div>下个棋手:{curPlayer}</div>)}
        </div>
        )
    }
}

export default PlayerInfo