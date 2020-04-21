import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message
 * @function
 * @pram {object} props - React props.
 * @returns {JSX.element}
 */

const Congrats = (props) => {
    if(props.success){
        return (
            <div dtata-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
            )
        } else {
            return(
                <div data-test="component-congrats"></div>
            )
        }
   
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;