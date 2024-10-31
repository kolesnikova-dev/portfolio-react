import { useRef } from 'react';

import { Avatar, Typography } from '@mui/material';

import { lightPaperStyle } from '../../pages';
import { ImageWrapper, StyledBadge } from './AboutMUIStyles';

// import { useIntersectionObserver } from '../../utils';

//import main image
import picture from '../../assets/images/picture.webp';

import './AboutStyle.css';

const introductionData = {
  greeting: "Hi, I'm Nika!",
  introduction: `I am a software engineer. 
   My interest lies in finding ways to make living more sustainable and less intrusive. 
   I am having fun in React and RESTing in between.`,
};


const About: React.FC = () => {
  const pictureRef = useRef<HTMLElement | undefined>(undefined);
  // const isInView = useIntersectionObserver(pictureRef);

  return (
    <section>
      <div ref={pictureRef}>
        <Typography variant="h3" style={lightPaperStyle} className="display-flex flex-center text-no-wrap">
            {introductionData.greeting}
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

        <div>
          <p>{introductionData.introduction}</p>
          {/* <Typography variant="h6" sx={{ textAlign: 'center', mx: 1 }}>
            {introductionData.introduction}
          </Typography> */}
        </div>
      </div>
    </section>
  );
};

export default About;