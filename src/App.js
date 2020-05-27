import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessWords from './comps/guessWords';
import Congrats from './comps/congrats'
import Input from './input.js'

import { getSecretWord } from './actionCreators/index.js';


export class UnconnectedApp extends Component {

  /**
   * @method componentDidMount
   * 
   */
  componentDidMount = () => {
    // get the secretWord
    this.props.getSecretWord();
  }

  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <GuessWords guessedWords={this.props.guessedWords}/>
          <Input />
      </div>
      );
  }
  
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord}
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
