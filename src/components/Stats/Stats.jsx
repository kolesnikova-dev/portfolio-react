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

  // console.log(languages);



  return (
   
    <section className='all-languages-section'>
      <h4>Most used languages accoding to GitHub</h4>
        {/* dynamically apply animation */}
        <div className={`all-languages ${isInView ? 'animate' : ''}`} ref={allLanguagesRef} >
            {/* display most used language */}
            <div>{languages[0]}</div>
            {/* display second most used language*/}
            <div>{languages[1]}</div>
            {/* display third most used language*/}
            <div>{languages[2]}</div>
        </div>
    </section>
  )
}

export default Stats;