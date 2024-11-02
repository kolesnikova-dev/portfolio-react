import React from 'react';
// import type { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

// import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


type Props = {
  icon: {
    ariaLabel: string,
    icon: React.ReactNode,
  },
  link?: {
    ariaLabel: string,
    url: string,
  },
  placement: 'bottom' | 'right',
}


export const IconWithTooltip: React.FC<Props> = ({ icon, link, placement }) => {
  const { ariaLabel, icon: svg } = icon;

  const handleClick = (event: React.MouseEvent) => {
    event?.stopPropagation();
  }

  if (link) {
     return (
      <Tooltip title={ariaLabel} placement={placement} onClick={handleClick} arrow>
        <Link to={link.url} aria-label={ariaLabel} target="_blank" rel="noopener">
            {svg}
        </Link>
      </Tooltip>
  )} else {
    return (
      <Tooltip title={ariaLabel} placement={placement} arrow>
        <span className='pointer'>&nbsp;{svg}</span>
      </Tooltip>
    )

  };
} ;