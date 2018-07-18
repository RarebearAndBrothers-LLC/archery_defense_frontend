import React, { Component } from 'react';
import './App.css';
import DrawbackCircle from './DrawbackCircle'
import Grenade from './Grenade';
import Canvas from './Canvas';


class App extends Component {
  constructor(){
    super();

    this.state = {
      grenadeDrawn: false, 
      grenadeFired: false,
    }
  }

  componentDidMount() {
    var canvas = document.createElement("canvas");
    canvas.id = 'canvas';
    //~ returns a drawing context on the canvas, or null if the context identifier is not supported
    //~ "2d" refers to the contextType 
    var ctx = canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    document.body.appendChild(canvas);
    let cWidth=canvas.width;
    let cHeight=canvas.height;


    var groundPoint = cHeight - (cHeight/4)
    var ground = groundPoint+15;
    // sky
    ctx.fillStyle="rgba(0,0,200,0.2)";
    ctx.fillRect(0,0,cWidth,ground);
    // ground
    ctx.beginPath();
    ctx.moveTo(0, ground);
    ctx.lineTo(cWidth, ground);
    ctx.strokeStyle="rgba(0,100,50,0.6)";
    ctx.stroke();
    ctx.fillStyle="rgba(0,200,100,0.6)";
    ctx.fillRect(0,ground,cWidth,cHeight);

    var shootingCirc = {
      x: 200,
      y: groundPoint-200,
      r: 75
    }
    
    var drawBackCirc = {
      x: shootingCirc.x,
      y: shootingCirc.y,
      r: 10
    }
    
    //Draw the actual circles around the arrow. 
    var drawCircles = function() {
      ctx.beginPath();
      ctx.arc(shootingCirc.x, shootingCirc.y, shootingCirc.r, 0, 2*Math.PI);
      ctx.strokeStyle = "rgba(0,0,0,0.5)";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(drawBackCirc.x, drawBackCirc.y, drawBackCirc.r, 0, 2*Math.PI);
      ctx.stroke();
      // drawAimer();
    }

    drawCircles()


  }


  onMouseMove = (event) => {
    // Knows where mouse is on outer circle, this will be used
    // to render the movement of the arrow eventually. 
    // console.log(event.screenX, event.screenY)
  }

  // onMouseUp = (event) => {
  //   console.log(event.screenX, event.screenY)
  // }

  handleDrawback = (event) => {
    console.log("MouseDown", event.screenX, event.screenY)
    let x = event.screenX 
    let y = event.screenY

    if(x >= -30 && x <= 0 && y >= -215 && y <= -185) {
      //first click is within inner draw circle 
      //User has now bgeun to draw arrow
      
      this.setState({grenadeDrawn: true}, ()=> console.log(this.state))
    } else if ( (x <= -30 || x >= 0) && (y <= -215 || y >= -185) && this.state.grenadeDrawn === true) {
      this.setState({grenadeFired: true, grenadeDrawn: false }, ()=> console.log("fired", this.state))
    } else {
      console.log("missed something")
    }
    console.log("done drawing")
  }

  render() {
    return (
      <div className="App"  >
        
          <DrawbackCircle  onMouseUp={this.onMouseDown} onMouseDown={this.handleDrawback} onMouseMove={this.onMouseMove}/>
          <Grenade />
        
      </div>

    );
  }
}

export default App;
