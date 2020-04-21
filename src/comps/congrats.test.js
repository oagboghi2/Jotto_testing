import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

import {findByTestAttr, checkProps} from '../../test/testUtils';
import Congrats from './congrats.js'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {success: false}

/**
 * Factory function to create a shallowWrapper or the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
});
test('renders no text when "success" prop is false',() => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
});
test('renders non-empty congrats message when "success" prop is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text().length).not.toBe(0)
})
test('does not throw warning with expected props', () => {
    const expectProps = {success: false };
   checkProps(Congrats, expectProps);
})