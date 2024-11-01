import { icons } from './icons';
import { Contact } from '../types/contactTypes';

export const email: string = 'firstnamenika@gmail.com';

export const contactsData: Contact[] = [
  {
    icon: {
      ariaLabel: 'Github',
      icon: icons.GithubWhite,
    },
    link: {
      ariaLabel: 'Navigate to GitHub',
      url: 'https://github.com/kweeuhree',
    },
  },
  {
    icon: {
      ariaLabel: 'LinkedIn',
      icon: icons.LinkedIn,
    },
    link: {
      ariaLabel: 'Navigate to LinkedIn',
      url: 'https://www.linkedin.com/in/vekolesnikova/',
    },
  },
];
