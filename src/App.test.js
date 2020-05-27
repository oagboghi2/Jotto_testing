import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testutils';

import App, { UnconnectedApp } from './App.js';
// import UnconnectedApp from './App.js'

const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper;
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

test('getSecretWord runs on App Mount', () => {
    const getSecretWordMock = jest.fn();
    // set up app component with getSecretWordMock as athe getSecretWord prop
    const wrapper = shallow(<UnconnectedApp getSecretWord = {getSecretWordMock} />)
    console.log(wrapper)
    // add run lifecycle method
    wrapper.instance().componentDidMount();
    // check to see if the mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1)
})