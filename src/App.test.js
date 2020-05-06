import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testutils';
import { getSecretWord } from './actionCreators';

import App from './App.js'

let initialState = {}
const setup = (initialState) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper

}

describe('Render App component', () => {
    test('', () => {
        const wrapper = setup({ })
    })
    test('has accedss to `secretWord` state', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord)
    })
    test('has access to `guestWord` state', () => {
        const guessedWords = [ {guessedWord: 'train', letterMatchCount: 3 }];
        const wrapper = setup({ guessedWords });
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toEqual(guessedWords);
    })
    test('`getSecretWord` action creator is a function on the props', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function)
    })
})