import { useState, useEffect, useRef, Fragment } from 'react';

import emailjs from '@emailjs/browser';

import { Button, TextField, Typography, Box } from '@mui/material';

import { isTimePeriodValid } from '../utils/isTimePeriodValid';
import { textInputFields } from '../data/formData';


//import emailjs public key, service id and template id
const public_key_emailjs = import.meta.env.VITE_PUBLIC_KEY;
const service_id_emailjs = import.meta.env.VITE_SERVICE_ID;
const template_id_emailjs = import.meta.env.VITE_TEMPLATE_ID;


export const Form: React.FC = () => {
  const form = useRef<HTMLFormElement | string>('');

  //initialize state for email last email sent to enable rate limit
  const [lastEmailSent, setLastEmailSent] = useState<Date | null>(null);

  const [status, setStatus] = useState<string | Error>('');

  // initialize emailjs with the public key
  useEffect(() => {
    emailjs.init(public_key_emailjs);
  }, []);

  const setStatusBox = (newStatus: string | Error) => {
    setStatus(newStatus);
    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus('Sending...');

    try {
      const currentTime = new Date();

      //check whether last email was sent less than a minute ago
      if (isTimePeriodValid(currentTime, lastEmailSent)) {
        console.log('Form submission initiated'); // Log when submission is initiated

        // Log form data
        const formData = new FormData(event.target); // Assuming you are using FormData
        console.log('Form data:', Object.fromEntries(formData.entries()));

        emailjs
          .sendForm(service_id_emailjs, template_id_emailjs, form.current)
          .then(() => {
            setStatusBox('Sent!');
            //set time last email was sent
            setLastEmailSent(currentTime);
          });
      }
    } catch (error) {
      setStatusBox(error.message);
    } finally {
      event.target.reset();
    }
  };

  return (
    <Box
      component="form"
      id="contact-form"
      data-testid="emaill-js-form"
      ref={form}
      onSubmit={handleSubmit}
      className="full-width"
    >
      {Object.entries(textInputFields).map(([label, props]) => (
        <Fragment key={label}>
          <Typography>{label}</Typography>
          <TextField
            data-testid={props.name}
            sx={{ background: 'whitesmoke' }}
            variant="filled"
            required
            {...props}
          />
          <br />
        </Fragment>
      ))}

      {/* display SEND button or status message */}
      <Box
        className="alert-box"
        sx={{ minHeight: '4vh', paddingBlockStart: '1vh' }}
      >
        {status ? (
          <Typography><>{status}</></Typography>
        ) : (
          <Button aria-label="Send the form" type="submit" variant="outlined" sx={{ color: 'whitesmoke' }}>
            Send
          </Button>
        )}
      </Box>
    </Box>
  );
};
