//import components
import Button from '../Button/Button';
//import  symbols
import { symbols } from '../../models/data';
//import styles
import './OverlayStyle.css';

const Overlay = ({ overlay, closeOverlay }) => {
  return (
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
  )
}

export default Overlay;