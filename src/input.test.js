import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory} from '../test/testUtils';
import Input from './input.js';

/**
 * Factory function to create a shallowWrapper or the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (InitialState={}) => {
    const store = storeFactory(InitialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive(0)
    return wrapper;
}



describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const InitialState = { success: false };
            wrapper = setup(InitialState);
        })
        test('render component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test('render input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });
        test('renders Submit button', () => {
            const submitBpx = findByTestAttr(wrapper, "submit-button");
            expect(submitBpx.length).toBe(1);
        })
    })
    describe('word has been guessed', () => {
        test('render component with error', () => {

        });
        test('render does not input box', () => {

        });
        test('does not renders submit button', () => {
            
        })
    })
});
describe('update state', () => {

})