import React from 'react';

import { Box } from '@mui/material';

import { IconWithTooltip } from '../../components/index';
import type { ContactKey } from '../../types/contactTypes';
import { contactsData } from '../../data/contactsData';


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
