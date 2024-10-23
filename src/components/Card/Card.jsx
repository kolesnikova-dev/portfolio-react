import { useRef } from 'react';
import { useIntersectionObserver } from '../../utils';
import { Box, Avatar } from '@mui/material';
import { ImageContainer } from '../index';

import './Card.css';

const perScholasLogo = {
  src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Per-Scholas-Secondary-Logo-Dark.png",
  alt: "Per Scholas logo"
}


export const Card = ({data, thisClass, action}) => {
  const cardRef = useRef();
  const isInView = useIntersectionObserver(cardRef);

  // const perScholasLogoJSX = data.includes('perScholas') && 
  //   <Avatar 
  //     sx={{ width: 44, height: 44 }}
  //     src={perScholasLogo.src} 
  //     alt={perScholasLogo.alt} 
  //   />; 

  const ReactIcon = !data.details && data.image;

  const imagesJXS = !data.image && 
    <Box>
      <ReactIcon />
    </Box>;

  return (
    <div 
      ref={cardRef}
      className={`card ${thisClass} ${isInView && 'delayedAppear'}`} 
      onClick={action ? () => action(data) : undefined}
    >

      {/* {perScholasLogoJSX} */}

      {/* <div>{data.name}</div> */}
      
      {/* image */}
      {/* {imagesJXS} */}

    </div>
  );
};
