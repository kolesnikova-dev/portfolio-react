import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';


export const IconWithTooltip = ({ icon, onClick, link }) => {
    const { ariaLabel, icon: Icon} = icon;

    return (
      <Tooltip title={ariaLabel} placement="bottom" arrow>
        {
          onClick 
          ? (
            <IconButton  fontSize="large" aria-label={ariaLabel} onClick={onClick}>
              <Icon />
            </IconButton>
          ) : (
            <Link to={link} target="_blank" rel="noopener">
              <Icon />
            </Link>
          )
        }
      </Tooltip>
    )
  }