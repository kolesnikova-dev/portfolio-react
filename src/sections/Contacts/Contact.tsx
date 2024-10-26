import React from 'react';

import { SiGithub, SiLinkedin } from 'react-icons/si';

import { Box } from '@mui/material';

import { IconWithTooltip } from '../../components/index';
import type { Contacts, ContactKey } from '../../types/contactTypes';


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
