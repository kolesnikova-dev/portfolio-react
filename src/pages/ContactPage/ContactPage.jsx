import { Box, Typography, Card, CardMedia, CardContent, CardHeader, Grid2 as Grid, Paper, Button, Link } from '@mui/material';
import { Contacts } from '../../sections';
import { Form } from '../../components';

import './ContactPageStyle.css';

export const ContactPage = () => {
  return (
    <section>

      {/* contact form container */}
      <div>

          {/* lets get in touch */}
         <div>
            <div>
             Send me an email: 
            </div>
          </div>

          {/* form */}
          <Form />
      </div>
    </section>
  )
}
                                         