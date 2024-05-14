import React from 'react';
import './NavBarStyle.css';
import { Link } from 'react-router-dom';
import { navBarData } from '../../models/data.js';

const NavBar = () => {
    const linkJSX = navBarData.map((item, index) => (
        <Link className={`link link-${item}`} to={`/${item}`} key={index}>
            <div>{item}</div>
        </Link>
    ));

  return (
    <div className="nav-container">{linkJSX}</div>
  );
};

export default NavBar;