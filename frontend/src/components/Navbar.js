import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import uuid from 'uuid/v1';

const Navbar = ({ categories }) => (
  <Nav>
    <List>

      <Item large='true'>READABLE</Item>

      <Item>
        <HyperLink to='/'>POSTS</HyperLink>
      </Item>

      { categories && 
        categories.map(category => (
          <Item key={uuid()}>
            <HyperLink to={`/${category.path}`}>
              {category.name.toUpperCase()}
            </HyperLink>
          </Item>
        ))
      }

      <Bar>
        <Item>
          <HyperLink large='true' to='/addpost'>+ NOVO POST</HyperLink>
        </Item>
      </Bar>

    </List>
  </Nav>
);

Navbar.proptypes = {
  categories: Proptypes.object.isRequired
};

const Nav = styled.nav`
  height: 80px;
  min-width: 100%;
  background: #114B5F;
  box-shadow: 5px 5px 5px 1px #b6b6b6;
  padding: 0 2em;
  margin-bottom: 2em;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.li`
  color: #f0fdee;
  font-weight: 700;
  align-self: center;

  ${props => props.large && css`
    font-size: 2em;
    font-weight: 900;
  `}
`;

const HyperLink = styled(Link)`
  color: #f0fdee;
  font-weight: 700;
  text-decoration: none;
    &:hover {
      color: #f45b69;
    }
  
  ${props => props.large && css`
    font-size: 1.5em;
    font-weight: 900;
  `}
`;

const Bar = styled.div`
    border-left: 3px solid #f0fdee;
    height: 80px;
    padding-left: 2em;
    padding-top: 2em;
`;

export default Navbar;
