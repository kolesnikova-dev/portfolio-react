import React from 'react';
import './Card.css';
import './CardNestHubStyle.css'

const Card = ({data, thisClass, action}) => {
  // console.log('data inside card', data);

  const imagesJXS = !data.details && 
  <div className='card-image-container'>
    <img src={data.image} alt={data.name} />
  </div>;

  return (
    <div className={`card ${thisClass}`} onClick={action ? ()=>action(data) : null}>
      {
      data.name.includes('Software Engineering Training') && 
      <div className='per-scholas-logo'>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Per-Scholas-Secondary-Logo-Dark.png" 
          alt="Per Scholas logo"
        /></div>
      }
      <div className='card-first-child'>{data.name}</div>
      <div className='card-second-child'>{data.level}</div>
      
      {/* image */}
      {imagesJXS}
    </div>
  );
};

export default Card;