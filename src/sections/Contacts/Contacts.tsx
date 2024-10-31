import React, { useState } from 'react';

import { Paper, Tooltip, Grid2 as Grid } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';

import { lightPaperStyle } from '../../MUIStyles/MUIStyles';
import { Contact } from './Contact';
import { ContactKey } from '../../types/contactTypes';
import { email } from '../../data/contactsData';


const contactOptions: ContactKey[] = ['Github', 'LinkedIn'];

const contacts = contactOptions.map((contact, index) => (
  <Grid key={index}>
    <Contact contact={contact} />
  </Grid>
));

type Props = {
  children: React.ReactNode,
}

const StyledPaper: React.FC<Props> = ({ children }) => {
 return (
    <div className="display-flex flex-center light-paper padding-2rem border-radius-4px"
  >
      {children}
    </div>
 );
} 


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
      <Grid
        container
        spacing={2}
        className="display-flex flex-center full-width"
      >
        <StyledPaper>
          {/* GitHub and LinkedIn container */}
          <Grid container spacing={2}>
            {contacts}
          </Grid>
        </StyledPaper>

        <StyledPaper>
          {/* email container */}
          <Tooltip title={copied ? 'Copied!' : 'Click to copy my email'}>
            <Grid
              container
              direction="column"
              sx={{ cursor: 'pointer' }}
              onClick={copyEmail}
            >
              <Grid>{email}</Grid>

              <Grid sx={{ height: '2vh' }}>
                {copied ? <CheckCircle /> : 'click to copy'}
              </Grid>
            </Grid>
          </Tooltip>
        </StyledPaper>
      </Grid>
    </section>
  );
};
