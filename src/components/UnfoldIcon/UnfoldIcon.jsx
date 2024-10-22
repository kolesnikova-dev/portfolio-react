import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { UnfoldMoreDoubleSharp, UnfoldLessDoubleSharp } from '@mui/icons-material';

const displayOptions = {
    true: {
      ariaLabel: "See less information",
      icon: UnfoldLessDoubleSharp,
    },
    false: {
      ariaLabel: "See more information",
      icon: UnfoldMoreDoubleSharp,
    },
  }

export const UnfoldIcon = ({ mode, toggleDisplay }) => {
    const iconMode = displayOptions[mode];
    const { ariaLabel, icon: Icon} = iconMode;
    return (
      <Tooltip title={ariaLabel}>
        <IconButton aria-label={ariaLabel} onClick={toggleDisplay}>
          <Icon />
      </IconButton>
    </Tooltip>
    )
  }