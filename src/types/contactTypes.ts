import { SvgIconComponent } from '@mui/icons-material';

interface Contact {
    icon: SvgIconComponent,
    link: {
      ariaLabel: string,
      url: string,
    }
  }
  
export type Contacts = Record<string, Contact>;

export type ContactKey = 'Github' | 'LinkedIn';
  
