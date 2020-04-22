import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessWords from './comps/GuessWords';
import Congrats from './comps/Congrats'

class App extends Component {
  render(){
    return (
      <div>
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessWords guessedWords={[]}/>
      </div>
      );
  }
  
}

export default App;
