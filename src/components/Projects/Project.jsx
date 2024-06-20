import React from 'react';
import { DiGithubFull } from "react-icons/di";

const Project = ({data, arrow}) => {
  return (
    <div className='project'>
    <div className="title-section">
      <div className='title'>{data.title}</div>
    
      <div className='github-link-container'>

          <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
          <DiGithubFull className='react-icon'/><span className='external-arrow'>{arrow}</span>
          </a>
      </div>
    </div>
    
   
      <div className="project-image-container">
      {data.image ? ( 
         <img src={data.image} alt={data.title} />
      ) : (      
        <video src={data.video} loop={true} autoPlay="autoplay" controls="controls" muted />
      )}
      </div> 
   
    
    <div className='details'>{data.details}</div>
  </div>
  )
}

export default Project;