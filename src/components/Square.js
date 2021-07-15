import React,{Component} from 'react'
import './Square.css'

class Square extends Component {
    render(){
        const { index,value ,clickSquare} = this.props;
        console.log(value);
        return (
            <div className="square" onClick={()=>clickSquare(index,value)}>
                {value}
            </div>
        )
    }
}

export default Square