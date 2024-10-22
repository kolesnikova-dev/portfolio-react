import { useState, useEffect, useRef } from 'react';
import { fetchUserData, useIntersectionObserver } from '../../utils';
import { Loading } from '../index';

import './StatsStyle.css';

export const Stats = () => {
  //reference for the container with images
  const allLanguagesRef = useRef(null);
  //observe intersections to apply animation
  const isInView = useIntersectionObserver(allLanguagesRef);

  const [languages, setLanguages] = useState([]);


  const fetchData = async () => {
    //search for user with a nickname 'kweeuhree'
    const userInfo = await fetchUserData('kweeuhree');
    return userInfo.mostUsedLang;
  }

  // fetch data once
  useEffect(() => {
    fetchData().then((langs) => setLanguages(langs));
  }, []);
 

  return (
   
    <section>
      <h4 className={isInView ? 'animateh4' : ''}> Most used languages according to GitHub</h4>
        {/* dynamically apply animation */}
        <div className='background' ref={allLanguagesRef}>
          {!languages.length ? (
            <Loading />
          ) : (
            languages.map((lang, index) => (
             <div key={index}>{lang[0]}</div>
        ))
       )}
        </div>
    </section>
  )
}


