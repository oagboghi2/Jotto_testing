import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
    test('returns an action oobject with type CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toStrictEqual({type: actionTypes.CORRECT_GUESS})
    })
})