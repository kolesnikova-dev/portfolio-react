import React, { useState } from 'react';

import { Box, Paper, Tooltip, Grid2 as Grid } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { lightPaperStyle } from '../../MUIStyles/MUIStyles';
import { Contact } from './Contact';
import { ContactKey } from '../../types/contactTypes';


const email: string = 'firstnamenika@gmail.com';

const contactOptions: ContactKey[] = ['Github', 'LinkedIn'];

const contacts = contactOptions.map((contact, index) => (
  <Grid key={index}>
    <Contact contact={contact} />
  </Grid>
));


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
    <Box component="section">
      <Grid
        container
        spacing={2}
        className="display-flex flex-center full-width"
      >
        <Paper
          elevation={2}
          sx={{ ...lightPaperStyle, p: 1 }}
          className="display-flex flex-center"
        >
          <Grid container spacing={2}>
            {contacts}
          </Grid>
        </Paper>

        <Paper
          elevation={2}
          sx={{ ...lightPaperStyle, p: 1 }}
          className="display-flex flex-center"
        >
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
        </Paper>
      </Grid>
    </Box>
  );
};
