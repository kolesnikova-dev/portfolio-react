import React from 'react';
import './NavBarStyle.css';
import { Link } from 'react-router-dom';
import { navBarData } from '../../models/data.js';

const NavBar = () => {
    const linkJSX = navBarData.map((item, index) => (
      <li className={`link link-${item}`} key={index}>
        <Link  to={`/${item}`}>
            {item}
        </Link>
      </li>
    ));

  return (
    <ul className="nav-container">{linkJSX}</ul>
  );
};

export default NavBar;