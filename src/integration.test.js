import  { storeFactory } from '../test/testutils.js';
import { guessWord } from './actionCreators/index.js';

describe('guessword action dispatcher', () => {
    const secretWord = 'party';
    const unsucessfulGuess = 'train';
    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsucessful guess', () => {
            store.dispatch(guessWord(unsucessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsucessfulGuess,
                    letterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expectedState);
        })
        test('updates state correctly for sucessful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState);
        })
    })
    describe('some guessed words', () => {
        const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1} ]
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsucessfulGuess))
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {guessedWord: unsucessfulGuess, letterMatchCount: 3}]
            }
            expect(newState).toStrictEqual(expectedState);
        })
        test('updates state correctly for successful guess',  () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            console.log('newState', newState)
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, {guessedWord: secretWord, letterMatchCount: 5}]
            }
            console.log('expectedState', expectedState)
            expect(newState).toStrictEqual(expectedState);
        })
    })
})