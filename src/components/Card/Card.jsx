import { useRef } from 'react';
import { useIntersectionObserver } from '../../utils';
import { Avatar } from '@mui/material';
import { ImageContainer } from '../index';

import './Card.css';

const perScholasLogo = {
  src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Per-Scholas-Secondary-Logo-Dark.png",
  alt: "Per Scholas logo"
}


export const Card = ({data, thisClass, action}) => {

  const cardRef = useRef();
  const isInView = useIntersectionObserver(cardRef);

  const perScholasLogoJSX = data.name.includes('Software Engineering Training') && 
    <Avatar 
      sx={{ width: 44, height: 44 }}
      src={perScholasLogo.src} 
      alt={perScholasLogo.alt} 
    />; 

  const imagesJXS = !data.details && 
    <Avatar 
      sx={{ width: 44, height: 44 }}
      src={data.image} 
      alt={data.name} 
    />;

  return (
    <div 
      ref={cardRef}
      className={`card ${thisClass} ${isInView && 'delayedAppear'}`} 
      onClick={action ? () => action(data) : undefined}
    >

      {perScholasLogoJSX}

      <div className='card-first-child'>{data.name}</div>
      <div className='card-second-child'>{data.level}</div>
      
      {/* image */}
      {imagesJXS}

    </div>
  );
};
