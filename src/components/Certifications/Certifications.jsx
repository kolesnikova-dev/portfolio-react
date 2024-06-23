import React, { useState } from 'react';
//import text and symbols
import { symbols } from '../../models/data';
import { certificationsData } from '../../models/certificationsData';
//import components
import Card from '../Card/Card';
import Button from '../Button/Button';
//import style
import './CertificationsStyle.css';
import './CertificationsNestHubStyle.css'


const Certifications = () => {

  // initialize state for setting an overlay with a certification
  const [overlay, setOverlay] = useState(null);

  // display overlay
  const showOverlay = (credential) => {
    // set current credential as overlay
    setOverlay(credential);
    // console.log(credential);
  };

  // stop displaaying an overlay
  const closeOverlay = () => {
    // set state to null
    setOverlay(null);
  };


  return (
    <section className='certifications-section'>
     <div className='top-certifications'>
      <header>Certifications</header>
      <p>click on a card to see credential</p>
     </div>
      
      <div className='card-section'>

        {/* loop through all credentials and return a card per credential */}
        {Object.values(certificationsData).map((item, index) => (
          <Card 
            thisClass={'cert'} 
            data={item} 
            key={index}
            // if clicked show relevant credential 
            action={()=>showOverlay(item)}
          />
        ))}

      </div>

      {/* if overlay exists return overlay with a credential and a closing button */}
      {overlay && (
        <div className='overlay'>
          <Button 
            thisClass={'close-overlay-button'} 
            // close buttom icon
            symbol={symbols.closeButton} 
            //onclick close current overlay
            action={closeOverlay} 
          />
          
          {/* overlay container */}
          <div className='overlay-image-container'>
            {/* current credential with its name as alternative */}
            <img src={overlay.image} alt={overlay.name} />
          </div>
          
          {/* short description */}
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