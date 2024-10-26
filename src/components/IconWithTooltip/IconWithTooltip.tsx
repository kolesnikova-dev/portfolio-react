import React from 'react';
import type { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import { SvgIconTypeMap, Tooltip } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';


type Props = {
  icon: {
    ariaLabel: string,
    icon: OverridableComponent<SvgIconTypeMap>,
  },
  onClick?: MouseEventHandler<HTMLButtonElement>,
  link?: string,
}


export const IconWithTooltip: React.FC<Props> = ({ icon, onClick, link }) => {
  const { ariaLabel, icon: Icon } = icon;

  const MIconButton = onClick && (
    <IconButton aria-label={ariaLabel} onClick={onClick}>
      <Icon />
  </IconButton>
 );

  const LinkElement = link &&(
    <Link to={link} target="_blank" rel="noopener">
      <Icon />
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
      <><DisplayIcon /></>
    </Tooltip>
  );
};