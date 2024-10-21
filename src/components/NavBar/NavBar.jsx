import { Box, Link, List, ListItem } from '@mui/material'
import './NavBarStyle.css';

export const NavBar = () => {

  return (
    <Box component="nav" className="nav-container">
      <List className="display-flex">
      <ListItem className="display-flex flex-center">
          <Link href=''>
              Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href='contact'>
              Contact
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
