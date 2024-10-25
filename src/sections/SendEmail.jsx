import { Box, Typography, Paper} from '@mui/material';
import { Form } from '../components';
import { lightPaperStyle } from '../MUIStyles/MUIStyles';


export const SendEmail = () => {
  return (
    <Box component="section" className='display-flex flex-center center-column'>
   <Paper elevation={2} sx={{...lightPaperStyle, p: 4}}  className="display-flex flex-center center-column">

      {/* contact form container */}
      <Box >

          {/* lets get in touch */}
         <Box>
            <Typography variant="h5">
             Send me an email: 
            </Typography>
          </Box>

          {/* form */}
          <Form />
      </Box>
      </Paper>
    </Box>
  )
}
                                         