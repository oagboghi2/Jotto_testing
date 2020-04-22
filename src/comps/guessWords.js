import React from 'react';
import PropTypes from 'prop-types';

const guessedWords = [
    {guessedWord: 'train', letterMatchCount:3},
    {guessedWord: 'agile', letterMatchCount:1},
    {guessedWord: 'party', letterMatchCount:6}
];

const GuessWords = (props) => {
    let contents
    if(props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
            <h3>Guess Words</h3>
            <table>
                <thead>
                    <tr>
                        <th>Guess</th><th>Matching Letters</th>
                    </tr>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </thead>
            </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}

GuessWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWords: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
};



export default GuessWords;