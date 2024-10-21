import { NavLink } from 'react-router-dom';
import './NavBarStyle.css';

export const NavBar = () => {

  return (
    <ul>
     <li>
        <NavLink  to=''>
            Home
        </NavLink>
      </li>
      <li>
        <NavLink  to='contact'>
            Contact
        </NavLink>
      </li>
    </ul>
  );
};
