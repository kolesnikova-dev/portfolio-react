import { Avatar, Typography } from '@mui/material';

import { ImageWrapper, StyledBadge } from './AboutMUIStyles';
import { getUrl } from '../../utils/cloudinaryUtils';

const introductionData = {
  greeting: "Hi, I'm Nika!",
  introduction: `I love building things for the web and figuring out how it all works under the hood. 
  Hard work and curiousity keep me going. 
  Welcome!`,
};

const picture = getUrl(['avatar', 'image']);

const About: React.FC = () => {
  return (
    <section>
      <div>
        <Typography
          variant="h3"
          className="display-flex flex-center text-no-wrap light-paper"
        >
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
        </div>
      </div>
    </section>
  );
};

export default About;
