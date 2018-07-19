import React from 'react'
import './DrawbackInnerCircle.css'

class DrawbackInnerCircle extends React.Component {
    
    render(){
       
        return (
            <div className="DrawbackInnerCircle"   onMouseDown={this.props.onMouseDown} onMouseMove={this.props.onMouseMove}> 
               
            </div>
        )   
    }
}

export default DrawbackInnerCircle 