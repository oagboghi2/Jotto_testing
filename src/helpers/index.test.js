import { getLetterMatchCount } from './';
import { findByTestAttr } from '../../test/testUtils';

describe('gettLetterMatchCount', () => {
    const secretWord = 'party';
    test('returns correct count when there are no matching letter', () => {
        const  letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test('returns the correct count where there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3)
    });
    test('returns correct count when there are duplicare letters in the game', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3)
    });
})