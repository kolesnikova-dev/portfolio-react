import React, { useRef } from 'react';
//import descriptions
import { introductionData } from '../../models/data';
//import intersection observer hook
import useIntersectionObsever from '../../utils/useIntersectionObserver';
//import main image
import picture from '../../assets/images/picture.png'; 
//import styles
import './PictureStyle.css';

const Picture = () => {

  const pictureRef = useRef(null);
  const isInView = useIntersectionObsever(pictureRef);

  return (
    <section className='picture-section'>

    <div className="card-section gradient">
            {/* picture container */}
        <div className='image-container' ref={pictureRef}>
          <img src={picture} alt="Nika's Picture" />
        </div>
          {/* text container */}
        <div className={`text-container ${isInView ? 'appear' : ''}`}>
          {/* greeting */}
          <div className="greeting">{introductionData.greeting}</div>
          {/* introduction */}
          <div className="introduction">{introductionData.introduction}</div>
        </div>
    </div>


    </section>
  )
}

export default Picture;