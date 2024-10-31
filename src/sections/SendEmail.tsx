import React from 'react';

import { Typography, Paper} from '@mui/material';

import { Form } from '../components';

import { lightPaperStyle } from '../MUIStyles/MUIStyles';


export const SendEmail: React.FC = () => {
  return (
    <section className='display-flex flex-center center-column'>
    <Paper elevation={2} sx={{...lightPaperStyle, p: 4}}  className="display-flex flex-center center-column">

      {/* contact form container */}
      <div>

          {/* lets get in touch */}
         <div>
            <Typography variant="h5">
             Send me an email: 
            </Typography>
          </div>

          {/* form */}
          <Form />
      </div>
      </Paper>
    </section>
  )
}
                                         