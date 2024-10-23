import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Box } from '@mui/material';
import { IconWithTooltip } from '../../components/index';


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
  const { icon, url } = contactsData[contact];

  const iconProps = {
    icon: {
      ariaLabel: contact,
      icon,
    }, 
    link: url,
  }

  return (
    <Box>
      <IconWithTooltip {...iconProps} />
    </Box>
  );
};

