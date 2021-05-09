import React from 'react';

import { NavLink } from 'react-router-dom';

function Menu () {
  return (
    <ul className='nav nav-pills nav-fill'>
      <li className='nav-item'>
        <NavLink className='nav-link' exact to='/'>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' exact to='/login'>
          Login
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' exact to='/products'>Products</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' exact to='/about'>
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
