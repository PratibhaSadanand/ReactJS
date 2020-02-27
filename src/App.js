import React, { Component } from 'react';
import './App.css';
import Userinput from './Userinput';
import Useroutput from './Useroutput';
import './Useroutput.css';

class App extends Component{

  state= {
    Username:'Aakanksha'
  }

  inputnamechangedHandler=(event)=>
  {
    this.setState({Username: event.target.value});
  }
  render(){
    return(
      <div className="Header">
        <h1>Welcome to ReactJS!</h1>

      <Userinput changed={this.inputnamechangedHandler}
                currentname={this.state.Username}/>
      <Useroutput Username={this.state.Username}/>
      <Useroutput Username={this.state.Username}/>
      <Useroutput Username="Pratibha"/>
      </div>

    );
  }
}

export default App;