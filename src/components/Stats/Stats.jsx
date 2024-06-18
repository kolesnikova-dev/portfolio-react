import React, { useState, useEffect, useRef } from 'react';
//github api logic for fetching user data
import { fetchUserData } from '../../utils/fetchData';
//import custom hook
import useIntersectionObserver from '../../utils/useIntersectionObserver';
//import styles
import './StatsStyle.css';

const Stats = () => {
  // initialize state to store most used languages information
  const [languages, setLanguages] = useState([]);
   //reference for the container with images
   const allLanguagesRef = useRef(null);

  //observe intersections to apply animation
  const isInView = useIntersectionObserver(allLanguagesRef);

  const fetchData = async () => {
    //search for user with a nickname 'kweeuhree'
    const userInfo = await fetchUserData('kweeuhree');
    setLanguages(userInfo.mostUsedLang);
  }

  //fetch data once
  useEffect(() => {
    fetchData();
  }, []);

 

  return (
   
    <section className='all-languages-section'>
      <h4 className={`${isInView ? 'animateh4' : ''}`}> Most used languages according to GitHub</h4>
        {/* dynamically apply animation */}
        <div className={`all-languages`} ref={allLanguagesRef} >
            {/* display most used languages */}
            {languages.map((language, index) => (
              <div key={index} className={`${isInView ? 'animate' : ''}`}>{language[0]} {language[1]}</div>
            ))}
        </div>
    </section>
  )
}

export default Stats;