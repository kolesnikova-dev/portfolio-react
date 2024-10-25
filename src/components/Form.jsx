import { useState, useEffect, useRef, Fragment } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { isTimePeriodValid } from '../utils/isTimePeriodValid';

import emailjs from '@emailjs/browser';

//import emailjs public key, service id and template id
const public_key_emailjs = import.meta.env.VITE_PUBLIC_KEY;
const service_id_emailjs = import.meta.env.VITE_SERVICE_ID;
const template_id_emailjs = import.meta.env.VITE_TEMPLATE_ID; 

const textInputFields = {
  Name: {
    type: 'text',
    name: 'user-name',
  },
  Email:{
    type: 'email',
    name: 'user-email',
  },
  Message:{
    type: 'text',
    name: 'message',
    maxRows: 8,
    multiline: true,
  },
}


export const Form = () => {
  const form = useRef();

   //initialize state for email last email sent to enable rate limit
  const [lastEmailSent, setLastEmailSent] = useState(null);

  const [status, setStatus] = useState('');

  // initialize emailjs with the public key
  useEffect(() => {   
    emailjs.init(public_key_emailjs);
  }, []);
  
  const setStatusBox = (newStatus) => {
    setStatus(newStatus);
    setTimeout(() => {
      setStatus('');
    }, 3000);
  }

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setStatus('Sending...');

    try {
      const currentTime = new Date();

      //check whether last email was sent less than a minute ago
      if(isTimePeriodValid(currentTime, lastEmailSent)) {
        emailjs.sendForm(service_id_emailjs, template_id_emailjs, form.current)
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
    <Box component="form" id="contact-form" ref={form} onSubmit={handleSubmit} className='full-width'>
      {Object.entries(textInputFields).map(([label, props]) => (
        <Fragment key={label}>
        <Typography>{label}</Typography>
        <TextField  sx={{background: 'whitesmoke'}} variant="filled" required  {...props} />
        <br />
        </Fragment>
      ))}    

        {/* display SEND button or status message */}
        <Box className="alert-box" sx={{minHeight: '4vh', paddingBlockStart: '1vh'}}>
          { status ? (
            <Typography>{status}</Typography>
          ) : (
            <Button type="submit" variant="outlined" sx={{color: 'whitesmoke'}}>Send</Button>
          )}
        </Box>
    </Box>
  )
}

