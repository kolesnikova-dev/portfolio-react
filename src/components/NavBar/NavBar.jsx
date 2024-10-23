import { Box, Link, List, ListItem } from '@mui/material'
import './NavBarStyle.css';

const navBarLinks = {
  Home: '/',
  Contact: 'contact',
}

const navBarJSX = Object.entries(navBarLinks).map(([text, path]) => (
      <ListItem key={text} className="display-flex flex-center">
          <Link sx={{color: 'white'}} href={path} underline="hover">
            {text}
          </Link>
        </ListItem>
));


export const NavBar = () => {
  return (
    <Box component="nav" className="nav-container">
      <List className="display-flex">
        {navBarJSX}
      </List>
    </Box>
  );
};
