import { IconType } from 'react-icons';

interface Contact {
    icon: IconType,
    link: {
      ariaLabel: string,
      url: string,
    }
  }
  
export type Contacts = Record<string, Contact>;

export type ContactKey = 'Github' | 'LinkedIn';
  
