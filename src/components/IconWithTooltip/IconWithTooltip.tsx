import React from 'react';
import type { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


type Props = {
  icon: {
    ariaLabel: string,
    icon: React.ReactNode,
  },
  onClick?: MouseEventHandler<HTMLButtonElement>,
  link?: {
    ariaLabel: string,
    url: string,
  },
  placement: 'bottom' | 'right',
}


export const IconWithTooltip: React.FC<Props> = ({ icon, onClick, link, placement }) => {
  const { ariaLabel, icon: svg } = icon;

  const MIconButton = onClick && (
    <IconButton aria-label={ariaLabel} onClick={onClick}>
      {svg}
    </IconButton>
 );

  const LinkElement = link && (
    <Link to={link.url} aria-label={ariaLabel} target="_blank" rel="noopener">
      {svg}
    </Link>
 );

  const displayIcon = onClick ? MIconButton : link ? LinkElement : null;

  if (displayIcon) return (
    <Tooltip title={ariaLabel} placement={placement} arrow>
      {displayIcon}
    </Tooltip>
  );
};