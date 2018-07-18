import React, { Component } from 'react';
import './App.css';
import DrawbackCircle from './DrawbackCircle'




class App extends Component {
  constructor(){
    super();

    this.state = {

      arrowDrawn: false, 
      arrowFired: false,

    }

  }


  onMouseMove = (event) => {
    // Knows where mouse is on outer circle, this will be used
    // to render the movement of the arrow eventually. 
    // console.log(event.screenX, event.screenY)
  }

  // onMouseUp = (event) => {
  //   console.log(event.screenX, event.screenY)
  // }

  onMouseDown = (event) => {
    console.log("MouseDown", event.screenX, event.screenY)
    let x = event.screenX 
    let y = event.screenY

    if(x >= -30 && x <= 0 && y >= -215 && y <= -185) {
      //first click is within inner draw circle 
      //User has now bgeun to draw arrow
      
      this.setState({arrowDrawn: true}, ()=> console.log(this.state))
    } else if ( (x <= -30 || x >= 0) && (y <= -215 || y >= -185) && this.state.arrowDrawn === true) {
      this.setState({arrowFired: true, arrowDrawn: false }, ()=> console.log("fired", this.state))
    } else {
      console.log("missed something")
    }
    console.log("done drawing")

    
  }




  render() {
    return (
      <div className="App"  >
        <DrawbackCircle  onMouseUp={this.onMouseDown} onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove}/>
      </div>

    );
  }
}

export default App;
