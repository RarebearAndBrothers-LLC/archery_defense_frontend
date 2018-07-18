import React from 'react'
import './DrawbackCircle.css'

class DrawbackCircle extends React.Component {
    
    render(){
       
        return (
            <div className="DrawbackCircle"  onMouseMove={this.props.onMouseMove}> 
               
            </div>
        )   
    }
}

export default DrawbackCircle 