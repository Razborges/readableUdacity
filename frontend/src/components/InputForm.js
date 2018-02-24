import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const InputForm = ({ label, name, holder, value, onChange }) => (
  <View>
    <Title htmlFor={ name }>
      { label.toUpperCase() }
    </Title>
    <PrimaryInput
      type='text'
      name={ name }
      id={ name }
      placeholder={ holder.toUpperCase() }
      value={ value }
      onChange={ onChange }
    />
  </View>
);

InputForm.proptypes = {
  label: Proptypes.string,
  name: Proptypes.string.isRequired,
  holder: Proptypes.string,
  value: Proptypes.string,
  onChange: Proptypes.func.isRequired
};

const View = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5em 0;
`;

const Title = styled.label`
  color: #456990;
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: 0.8em;
`;

const PrimaryInput = styled.input`
  background-color: #f0fdee;
  height: 40px;
  border: none;
  border-left: 3px solid #f45b69;
  padding-left: 1em;
  color: #456990;
  font-size: 0.8em;
    
    &::placeholder {
      color: #f45b69;
      font-size: 0.8em;
      font-weight: 700;
    }
`;

export default InputForm;
