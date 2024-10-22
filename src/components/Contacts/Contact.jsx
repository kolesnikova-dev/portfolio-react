import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Box, Tooltip, IconButton } from '@mui/material';


const contactsData = {
  Github: {
      icon: SiGithub, 
      url:"https://github.com/kweeuhree"
  },
  LinkedIn: {
      icon: SiLinkedin,
      url: 'https://www.linkedin.com/in/vekolesnikova/'
  }
};

export const Contact = ({ contact }) => {
  const { icon: Icon, url } = contactsData[contact];

  return (
    <Box>
     <Tooltip title={contact}>
      <Link to={url}>
        <Icon />
      </Link>
     </Tooltip>
    </Box>
  );
};

