import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

/**
 * 
 * @param {onject} initialState - initial state for store
 * @function storeFactory
 * @returns {Store} - Redux store
 */

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

/**
 *  Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to reach within. 
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes,
        conformingProps, 
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}