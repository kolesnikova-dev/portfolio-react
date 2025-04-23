import Avatar from "@mui/material/Avatar";

import { aboutData } from "../../data/aboutData";
import { getUrl } from "../../utils/index";
import { ImageWrapper, StyledBadge } from "./AboutMUIStyles";

const picture = getUrl(["avatar", "image"]);

const About: React.FC = () => {
  return (
    <section>
      <header>
        <div className="display-flex flex-center text-no-wrap light-paper">
          <h1>{aboutData.greeting}</h1>
        </div>

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
          <h2>{aboutData.introduction}</h2>
        </div>
      </header>
    </section>
  );
};

export default About;
