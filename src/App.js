import React, { Component } from 'react';
import './App.css';

import GuessWords from './comps/guessWords';
import Congrats from './comps/congrats'
import Input from './input.js'

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
          <Input />
      </div>
      );
  }
  
}

export default App;
