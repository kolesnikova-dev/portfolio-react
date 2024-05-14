import React from 'react';
import './Card.css';

const Card = ({data, thisClass, action}) => {
  console.log('data inside card', data);

  const imagesJXS = !data.details && 
  <div className='card-image-container'>
    <img src={data.image} alt={data.name} />
  </div>;

  return (
    <div className={`card ${thisClass}`} onClick={action ? ()=>action(data) : null}>
      <div className='card-first-child'>{data.name}</div>
      <div className='card-second-child'>{data.level}</div>
      
      {/* image */}
      {imagesJXS}
    </div>
  );
};

export default Card;