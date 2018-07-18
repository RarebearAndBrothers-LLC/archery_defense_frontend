import React from 'react';
import App from './App'

class Canvas extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
      }

    render() {
        return(
          <div>
            <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight}>
                
            </canvas> 
          </div>
        )
      }
    }
export default Canvas
