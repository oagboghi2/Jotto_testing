import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory} from '../test/testUtils';
import Input from './input.js';
import { guessWord } from './actionCreators';

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
        const initialState = { success: false };
        wrapper = setup(initialState);
      })
      test('renders component without error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
      });
      test('renders input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(1);
      });
      test('renders submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(1);
      });
    });
    describe('word has been guessed', () => {
      let wrapper;
      beforeEach(() => {
        const initialState = { success: true };
        wrapper = setup(initialState);
      });
      test('renders component without error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
      });
      test('does not render input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(0);
      });
      test('does not render submit button', () => {
        const submit = findByTestAttr(wrapper, 'submit-button');
        expect(submit.length).toBe(0);
      });
    });
  });

    describe('redux props', () => {
        test('has success peice of state as prop', () => {
            const success = true;
            const wrapper = setup({ success });
            const successProps = wrapper.instance().props.success;

            expect(successProps).toBe(success);
        })
        test('guessWord action creator is a function prop', () => {
            const wrapper = setup();
            const guessWordProp = wrapper.instance().props.guessWord;
            expect(guessWordProp).toBeInstanceOf(Function)

        })
    })