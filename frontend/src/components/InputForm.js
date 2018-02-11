import React from 'react';
import Proptypes from 'prop-types';

const InputForm = ({ label, name, holder, value, onChange }) => (
  <div>
    <label htmlFor={ name }>
      { label }
      <input
        type='text'
        name={ name }
        id={ name }
        placeholder={ holder }
        value={ value }
        onChange={ onChange }
      />
    </label>
  </div>
);

InputForm.proptypes = {
  label: Proptypes.string,
  name: Proptypes.string.isRequired,
  holder: Proptypes.string,
  value: Proptypes.string,
  onChange: Proptypes.func.isRequired
};

export default InputForm;
