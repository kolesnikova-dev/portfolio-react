import { useRef } from 'react';
import { useIntersectionObserver } from '../../utils';
import { styled } from '@mui/material/styles';
import { Avatar, Box, Badge, Typography } from '@mui/material';
import { lightPaperStyle } from '../../pages';
//import main image
import picture from '../../assets/images/picture.png';

import './AboutStyle.css';

const introductionData = {
  greeting: "Hi, I'm Nika!",
  introduction: `I am a software engineer. 
   My interest lies in finding ways to make living more sustainable and less intrusive. 
   I am having fun in React and RESTing in between.`,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  float: 'left',
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export const About = () => {
  const pictureRef = useRef(null);
  const isInView = useIntersectionObserver(pictureRef);

  return (
    <section>
      <Box ref={pictureRef}>
        <Typography variant="h3" style={lightPaperStyle}>
          <Box className="display-flex flex-center text-no-wrap">
            {introductionData.greeting}
          </Box>
        </Typography>
        <ImageWrapper>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar
              sx={{ width: 114, height: 104 }}
              src={picture}
              alt="Nika's Picture"
            />
          </StyledBadge>
        </ImageWrapper>
        <Box className={isInView ? 'appear' : ''}>
          <Typography variant="h6" sx={{ textAlign: 'center', mx: 1 }}>
            {introductionData.introduction}
          </Typography>
        </Box>
      </Box>
    </section>
  );
};
