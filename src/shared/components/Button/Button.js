import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onPress, text, type } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onPress}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onPress: undefined,
  text: 'text',
};

Button.propTypes = {
  type: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
