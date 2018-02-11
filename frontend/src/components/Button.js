import React from 'react';
import Proptypes from 'prop-types';

const Button = ({ type, action, label }) => (
  <button type={type} onClick={ action }>{ label }</button>
);

Button.proptypes = {
  type: Proptypes.string.isRequired,
  action: Proptypes.func.isRequired,
  label: Proptypes.string.isRequired
};

export default Button;