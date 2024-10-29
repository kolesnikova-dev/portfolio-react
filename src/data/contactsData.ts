import { SiGithub, SiLinkedin } from 'react-icons/si';

import type { Contacts } from '../types/contactTypes';

export const email: string = 'firstnamenika@gmail.com';

export const contactsData: Contacts = {
    Github: {
      icon: SiGithub,
      link: {
        ariaLabel: 'Navigate to GitHub',
        url: 'https://github.com/kweeuhree',
      }
      
    },
    LinkedIn: {
      icon: SiLinkedin,
      link: {
        ariaLabel: 'Navigate to LinkedIn',
        url: 'https://www.linkedin.com/in/vekolesnikova/',
      }
      
    },
  };