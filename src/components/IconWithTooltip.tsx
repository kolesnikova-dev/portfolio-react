import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  icon: {
    ariaLabel: string;
    icon: React.ReactNode;
  };
  link?: {
    ariaLabel: string;
    url: string;
  };
  placement: "bottom" | "right";
  fullDisplay?: boolean;
};

const ariaLabelDisplay = {
  xs: "none",
  sm: "none",
  md: "inline",
};

const DisplayLink: React.FC<Props> = ({
  icon,
  link,
  placement,
  fullDisplay,
}) => {
  if (!link) return;

  const { ariaLabel, icon: svg } = icon;

  const handleClick = (event: React.MouseEvent) => {
    event?.stopPropagation();
  };

  const handleRedirect = (event: React.MouseEvent) => {
    event?.stopPropagation();
    window.open(link.url, "_blank");
  };

  const linkElement = (
    <Link
      to={link.url}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener"
      className="rd-transparent-border bg-hover"
    >
      {svg}
    </Link>
  );

  if (fullDisplay) {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={(event) => handleRedirect(event)}
        className="display-flex flex-center flex-gap-1rem bg-whitesmoke"
      >
        <Box
          component="span"
          className="md-font"
          sx={{ display: ariaLabelDisplay }}
        >
          {ariaLabel}
        </Box>
        <span>{svg}</span>
      </button>
    );
  }
  return (
    <Tooltip
      title={<p>{ariaLabel}</p>}
      placement={placement}
      onClick={handleClick}
      arrow
    >
      {linkElement}
    </Tooltip>
  );
};

export const IconWithTooltip: React.FC<Props> = (props) => {
  const { ariaLabel, icon: svg } = props.icon;
  const { link, placement } = props;

  if (link) {
    return <DisplayLink {...props} />;
  }
  return (
    <Tooltip title={<p>{ariaLabel}</p>} placement={placement} arrow>
      <p className="pointer">&nbsp;{svg}</p>
    </Tooltip>
  );
};
