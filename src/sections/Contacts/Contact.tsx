import React from 'react';

import { IconWithTooltip } from '../../components/index';
import type { ContactKey } from '../../types/contactTypes';
import { contactsData } from '../../data/contactsData';


type Props = {
  contact: ContactKey,
}


export const Contact: React.FC<Props> = ({ contact }) => {
  const { icon, link } = contactsData[contact];

  const iconProps = {
    icon: {
      ariaLabel: contact,
      icon,
    },
    link,
  };

  return (
    <div>
      <IconWithTooltip {...iconProps} />
    </div>
  );
};
