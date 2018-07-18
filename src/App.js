import React, { Component } from 'react';
import './App.css';
import DrawbackCircle from './DrawbackCircle'




class App extends Component {
  constructor(){
    super();

    this.state = {
      clicked: false 
    }

  }

  //Only begin drawback if onClick event happesn within a specified inner circle
  //Otherwise, do not do anything. You dont need to amke a seperate component. 
  handleDrawback = (event) => {
    console.log(event.screenX, event.screenY)
  }

  onMouseMove = (event) => {
    // Knows where mouse is on outer circle, this will be used
    // to render the movement of the arrow eventually. 

    console.log(event.screenX, event.screenY)
    let x = event.screenX 
    let y = event.screenY
  }


  render() {
    return (
      <div className="App"  >
        <DrawbackCircle  onMouseMove={this.onMouseMove}/>
      </div>

    );
  }
}

export default App;
