import React, { Component } from 'react';
import './App.css';
import DrawbackCircle from './DrawbackCircle'
// import Grenade from './Grenade';
import DrawbackInnerCircle from './DrawbackInnerCircle';


class App extends Component {
  constructor(){
    super();

    this.state = {
      mousePos: {x: "" , y: ""},
      aimCords: {x: "", y: ""},
      mouseUp: false,
      mouseDown: false,
      grenadeDrawn: false, 
      grenadeFired: false,
      x1: "",
      y1: "",
      x2: "",
      y2: "",

    }
  }

  componentDidMount() {
    var canvas = document.createElement("canvas");
    canvas.id = 'canvas';
    //~ returns a drawing context on the canvas, or null if the context identifier is not supported
    //~ "2d" refers to the contextType 
    var ctx = canvas.getContext("2d");
    canvas.width=window.innerWidth ;
    canvas.height=window.innerHeight;
    document.body.appendChild(canvas);
    let cWidth=canvas.width;
    let cHeight=canvas.height;
    let groundPoint = cHeight - (cHeight/4)
    let ground = groundPoint+15;
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

  }


  onMouseMove = (event) => {
    // Knows where mouse is on outer circle, this will be used
    // to render the movement of the arrow eventually. 
    this.setState({ mousePos: {...this.state.mousePos, x: event.screenX, y: event.screenY }})

    let dist = Math.min(this.distBetween(this.state.x1, this.state.y1, this.state.mousePos.x, this.state.mousePos.y,), 60)
    
    let angle = Math.PI/2 - this.angleBetween(this.state.mousePos.x, this.state.mousePos.y, this.state.x1, this.state.y1)
    
  }

  onMouseDown = (event) => {
    event.preventDefault()
    this.setState({
      mouseDown: true,
      mouseUp: false,
      grenadeDrawn: true,
      x1: event.screenX,
      y1: event.screenY,
    }, () => this.handleDrawback())

    
  }

  onMouseUp = (event) => {
    this.setState({
      mouseDown: false, 
      mouseUp: true, 
      grenadeDrawn: false, 
      grenadeFired: true, 
      x2: event.screenX,
      y2: event.screenY,
     
    }, () => this.handleDrawback())
  }

  distBetween = (x1, y1, x2, y2) => {
    //~Distance from center of circle to mouse position on canvas. 
    return Math.sqrt( Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2) );
  }

  angleBetween = (x1, y1, x2, y2) => {
    //~return value is in radians: -pi -> pi
    return Math.atan2(y2-y1, x2-x1);
  }

  

  handleDrawback = () => {
    if(this.state.mouseDown){
      console.log("arrow is ready to fire")
      console.log("x1", this.state.x1)
      console.log("y1", this.state.y1)


    } else if (this.state.mouseUp && this.state.grenadeFired) {
      console.log("arrow is fired")
      console.log("x2", this.state.x2)
      console.log("y2", this.state.y2)

      
      

      // this.setState({aimCords: {...this.state.aimCords, x: this.state.x1 + dist*Math.sin(angle), y:this.state.y1 + dist*Math.cos(angle)}},()=>console.log(this.state.aimCords) )
      
     
    }
  }

  render() {
    return (
      <div className="App"  onMouseUp={this.onMouseUp}>
        
          <DrawbackCircle   onMouseMove={this.onMouseMove}/>
          <DrawbackInnerCircle   onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove}/>
        
      </div>

    );
  }
}

export default App;
