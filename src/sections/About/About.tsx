import { Avatar, Typography } from "@mui/material";

import { aboutData } from "../../data/aboutData";
import { getUrl } from "../../utils/index";
import { ImageWrapper, StyledBadge } from "./AboutMUIStyles";

const picture = getUrl(["avatar", "image"]);

const About: React.FC = () => {
  return (
    <section>
      <div>
        <Typography
          variant="h3"
          className="display-flex flex-center text-no-wrap light-paper"
        >
          {aboutData.greeting}
        </Typography>

        <ImageWrapper>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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
          <p>{aboutData.introduction}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
