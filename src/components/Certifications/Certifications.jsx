import React from 'react';
import { certificationsData, symbols } from '../../models/data';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './CertificationsStyle.css';
import { useState } from 'react';

const Certifications = () => {

  const [overlay, setOverlay] = useState(null);

  const showOverlay = (credential) => {
    setOverlay(credential);
    console.log(credential);
  };

  const closeOverlay = () => {
    setOverlay(null);
  };


  return (
    <section>
      <header>Certifications</header>
      
      <div className='card-section cetifications-section'>

        {Object.values(certificationsData).map((item, index) => (
          <Card 
            thisClass={'cert'} 
            data={item} 
            key={index} 
            action={()=>showOverlay(item)}
          />
        ))}

      </div>

      {overlay && (
        <div className='overlay'>
          <Button 
            thisClass={'close-overlay-button'} 
            symbol={symbols.closeButton} 
            action={closeOverlay} 
          />
          
          <div className='overlay-image-container'>
            <img src={overlay.image} alt={overlay.name} />
          </div>
          
          <div className='overlay-details-container'>
            <div className="overlay-details">
            {overlay.details}
            </div>
          </div>



        </div>
    )}
    </section>
  );
};

export default Certifications;