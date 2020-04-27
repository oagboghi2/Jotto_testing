import React, { Component } from 'react';
import './App.css';

import GuessWords from './comps/guessWords';
import Congrats from './comps/congrats'

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3},
          {guessedWord: 'bat', letterMatchCount: 3}
          ]}/>
      </div>
      );
  }
  
}

export default App;
