import React from 'react'
import './DrawbackCircle.css'

class DrawbackCircle extends React.Component {
    
    render(){
       
        return (
            <div className="DrawbackCircle"  onMouseUp={this.props.onMouseUp} onMouseDown={this.props.onMouseDown} onMouseMove={this.props.onMouseMove}> 
               
            </div>
        )   
    }
}

export default DrawbackCircle 