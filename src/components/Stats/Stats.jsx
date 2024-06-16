import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../../utils/fetchData';
import './StatsStyle.css';

const Stats = () => {

  const [languages, setLanguages] = useState([]);

  const fetchData = async () => {
    const userInfo = await fetchUserData('kweeuhree');
    setLanguages(userInfo.mostUsedLang);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(languages);



  return (
   
    <section className='all-languages'>
         {/* display most used language */}
        <div>{languages[0]}</div>
        {/* display second most used language*/}
        <div>{languages[1]}</div>
        {/* display third most used language*/}
         <div>{languages[2]}</div>
    </section>
  )
}

export default Stats;