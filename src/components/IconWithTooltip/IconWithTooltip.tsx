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
}


export const IconWithTooltip: React.FC<Props> = ({ icon, onClick, link }) => {
  const { ariaLabel, icon: svg } = icon;

  const MIconButton = onClick && (
    <IconButton aria-label={ariaLabel} onClick={onClick}>
      {svg}
    </IconButton>
 );

  const LinkElement = link &&(
    <Link to={link.url} aria-label={ariaLabel} target="_blank" rel="noopener">
      {svg}
    </Link>
 );

  const DisplayIcon: React.FC = () => {
    if(onClick) {
      return MIconButton;
    } else if (link) {
      return LinkElement;
    }

    return;
  }

  return (
    <Tooltip title={ariaLabel} placement="bottom" arrow>
      {DisplayIcon()}
    </Tooltip>
  );
};