import React from 'react';
import './PictureStyle.css';
import { introductionData } from '../../models/data';
import picture from '../../assets/images/picture.png'; 

const Picture = () => {
  return (
    <section>

    <div className="card-section gradient">
            {/* picture container */}
        <div className='image-container'>
          <img src={picture} alt="Nika's Picture" />
        </div>
          {/* text container */}
        <div className="text-container">
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