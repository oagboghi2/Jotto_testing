import React from 'react';
import {shallow} from 'enzyme'
import {findByTestAttr, checkProps} from '../../test/testUtils';

import GuessWords from './guessWords.js'

const defaultProps =  {
    guessedWords: [ {guessedWords: 'train', letterMatchCount: 3}],
};

/**
 * Factory function to create a shallowWrapper or the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props }
    return shallow(<GuessWords { ...setupProps } />)
}

test('does not throw warning with expected warning', () => {
    checkProps(GuessWords, defaultProps)
})

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
     wrapper = setup({ guessedWords: []})
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    })
})
describe('if there are words guessed', () => {
    let wrapper
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount:3},
        {guessedWord: 'agile', letterMatchCount:1},
        {guessedWord: 'party', letterMatchCount:5}
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNode.length).toBe(1);
    })
    test('correct number of guessed words', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNodes.length).toBe(guessedWords.length)
    })

})