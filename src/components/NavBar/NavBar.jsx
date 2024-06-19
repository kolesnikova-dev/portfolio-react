import React from 'react';
import './NavBarStyle.css';
import { Link } from 'react-router-dom';
import { navBarData } from '../../models/data.js';

const NavBar = () => {
    const linkJSX = navBarData.map((item, index) => (
        <Link className={`link link-${item}`} to={`/${item}`} key={index}>
            <li>{item}</li>
        </Link>
    ));

  return (
    <ul className="nav-container">{linkJSX}</ul>
  );
};

export default NavBar;