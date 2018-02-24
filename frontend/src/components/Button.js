import React from 'react';
import Proptypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = ({ type, action, label, primary, rose, roseLarge }) => {
  if(primary) {
    return (<ButtonBase primary type={type} onClick={ action }>{ label }</ButtonBase>)
  }
  if(rose) {
    return (<ButtonBase rose type={type} onClick={ action }>{ label }</ButtonBase>)
  }
  if(roseLarge) {
    return (<ButtonBase roseLarge type={type} onClick={ action }>{ label }</ButtonBase>)
  }
  return (<ButtonBase type={type} onClick={ action }>{ label }</ButtonBase>)
};

Button.proptypes = {
  type: Proptypes.string.isRequired,
  action: Proptypes.func,
  label: Proptypes.string.isRequired,
  primary: Proptypes.string,
  rose: Proptypes.string,
  roseLarge: Proptypes.string
};

const ButtonBase = styled.button`
  color: #456990;
  font-size: 1em;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background: transparent;

  &:hover {
    border: none;
    color: #f45b69;
  }

  &:active {
    border: none;
  }

  ${props => props.primary && css`
    font-size: 0.8em;
  `}

  ${props => props.rose && css`
    font-size: 0.8em;
    color: #f45b69;

      &:hover {
        color: #456990;
      }
  `}

  ${props => props.roseLarge && css`
    color: #f45b69;

      &:hover {
        color: #456990;
      }
  `}
`;

export default Button;