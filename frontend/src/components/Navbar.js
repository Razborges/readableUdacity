import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v1';

const Navbar = ({ categories }) => (
  <nav>
    <ul>
      <li>Readable</li>
      <li>
        <Link to='/'>Posts</Link>
      </li>

      { categories && 
        categories.map(category => (
          <li key={uuid()}>
            <Link to={`/${category.path}`}>
              {category.name}
            </Link>
          </li>
        ))
      }

      <li>
        <Link to='/addpost'>Novo Post</Link>
      </li>
    </ul>
  </nav>
);

Navbar.proptypes = {
  categories: Proptypes.object.isRequired
};

export default Navbar;
