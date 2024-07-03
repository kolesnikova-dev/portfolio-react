import React, { useRef } from 'react';
import './Card.css';
import './CardNestHubStyle.css'
import ImageContainer from '../ImageContainer/ImageContainer';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const Card = ({data, thisClass, action}) => {

  const cardRef = useRef();
  const isInView = useIntersectionObserver(cardRef);


  const perScholasLogo = {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Per-Scholas-Secondary-Logo-Dark.png",
    alt: "Per Scholas logo"
  }
  // console.log('data inside card', data);

  const imagesJXS = !data.details && 
  <div className='card-image-container'>
    <img src={data.image} alt={data.name} />
  </div>;

  return (
    <div 
      ref={cardRef}
      className={`card ${thisClass} ${isInView ? 'delayedAppear' : ''}`} 
      onClick={action ? ()=>action(data) : null}>

      { data.name.includes('Software Engineering Training') && 
        <ImageContainer 
          thisClass={'per-scholas-logo'} 
          src={perScholasLogo.src} 
          alt={perScholasLogo.alt} 
        /> }

      <div className='card-first-child'>{data.name}</div>
      <div className='card-second-child'>{data.level}</div>
      
      {/* image */}
      {imagesJXS}
    </div>
  );
};

export default Card;