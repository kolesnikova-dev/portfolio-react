// import { SiGithub, SiLinkedin } from 'react-icons/si';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import type { Contacts } from '../types/contactTypes';

export const email: string = 'firstnamenika@gmail.com';

export const contactsData: Contacts = {
    Github: {
      icon: GitHubIcon,
      link: {
        ariaLabel: 'Navigate to GitHub',
        url: 'https://github.com/kweeuhree',
      }
      
    },
    LinkedIn: {
      icon: LinkedInIcon,
      link: {
        ariaLabel: 'Navigate to LinkedIn',
        url: 'https://www.linkedin.com/in/vekolesnikova/',
      }
      
    },
  };