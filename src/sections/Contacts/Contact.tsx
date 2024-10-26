import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IconType } from 'react-icons';

import { Box } from '@mui/material';

import { IconWithTooltip } from '../../components/index';
import React from 'react';


interface Contact {
  icon: IconType,
  url: string,
}

type Contacts = Record<string, Contact>;

const contactsData: Contacts = {
  Github: {
    icon: SiGithub,
    url: 'https://github.com/kweeuhree',
  },
  LinkedIn: {
    icon: SiLinkedin,
    url: 'https://www.linkedin.com/in/vekolesnikova/',
  },
};

type ContactKey = keyof typeof contactsData;

type Props = {
  contact: ContactKey,
}

export const Contact: React.FC<Props> = ({ contact }) => {
  const { icon, url } = contactsData[contact];

  const iconProps = {
    icon: {
      ariaLabel: contact,
      icon,
    },
    link: url,
  };

  return (
    <Box>
      <IconWithTooltip {...iconProps} />
    </Box>
  );
};
