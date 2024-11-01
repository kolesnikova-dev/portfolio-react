import React, { useState } from 'react';

import Tooltip from '@mui/material/Tooltip';
import CheckCircle from '@mui/icons-material/CheckCircle';

import { ContactKey } from '../../types/contactTypes';
import { email, contactsData } from '../../data/contactsData';
import { IconWithTooltip } from '../../components/index';

const contactOptions: ContactKey[] = ['Github', 'LinkedIn'];

const contacts = contactOptions.map((contact, index) => {
  const { icon, link } = contactsData[contact];

  const iconProps = {
    icon: {
      ariaLabel: contact,
      icon,
    },
    link,
  };

  return  (
    <div key={index} className='display-flex flex-center'>
      <IconWithTooltip {...iconProps} />
    </div>
)
});


export const Contacts: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    try {
      // Copy the text inside the text field
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      alert(`Couldn't copy email. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <section>
      <div className="display-flex flex-center center-column full-width flex-gap-2vw">
        
        {/* GitHub and LinkedIn container */}
        <div className="display-flex flex-center flex-gap-2vw light-paper padding-2rem border-radius-4px">
            {contacts}
        </div>
        
        
        {/* email container */}
        <div 
          className="display-flex flex-center light-paper padding-2rem border-radius-4px pointer"
          onClick={copyEmail}
          >
    
          <Tooltip title={copied ? 'Copied!' : 'Click to copy my email'}>
            <div className="display-flex flex-center center-column">
              <div>{email}</div>

              <div className='height-2vh'>
                {copied ? <CheckCircle /> : 'click to copy'}
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
