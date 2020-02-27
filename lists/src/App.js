import React, { Component } from 'react';
import './App.css';
import  Validation from './Validation';
import Char from './Char';

class App extends Component{

  state={
    Username:''
  }

  inputchangedHandler=(event)=>{
    this.setState({Username: event.target.value});

  }
  render(){

    const charlist=this.state.Username.split('').map(ch=>{
      return <Char character={ch}/>
    })

    
    return(
      <div className="App">
        <input type="text" 
        onChange={this.inputchangedHandler}
        value={this.state.Username}/>
        <p>Hello i'm {this.state.Username}</p>
        <Validation textLength={this.state.Username.length}/>
        {charlist}
      </div>
    );
  }

  
}

export default App;