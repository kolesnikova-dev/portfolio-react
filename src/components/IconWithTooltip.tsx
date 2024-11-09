import { Link } from 'react-router-dom';

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
  fullDisplay?: boolean,
}


const DisplayLink: React.FC<Props> = ({ icon, link, placement, fullDisplay }) => {
  if (!link) return;

  const { ariaLabel, icon: svg } = icon;

  const handleClick = (event: React.MouseEvent) => {
    event?.stopPropagation();
  }

  return (
    <Tooltip className='display-flex right-justify' title={ariaLabel} placement={placement} onClick={handleClick} arrow>
        <button aria-label={ariaLabel} className='display-flex flex-center flex-gap-1vw blue-border'>
          <Link  className='display-flex flex-space flex-gap-1rem' to={link.url} aria-label={ariaLabel} target="_blank" rel="noopener">
              { fullDisplay && <div>{ariaLabel}</div>}
              <div>{svg}</div>
          </Link>
      </button>
    </Tooltip>
  ); 
}


export const IconWithTooltip: React.FC<Props> = (props) => {
  const { ariaLabel, icon: svg } = props.icon;
  const { link, placement } = props;

  if (link) {
     return <DisplayLink {...props} />;
  } else {
    return (
      <Tooltip title={ariaLabel} placement={placement} arrow>
        <span className='pointer'>&nbsp;{svg}</span>
      </Tooltip>
    )
  };
};