import React from 'react';
import { DiGithubFull } from "react-icons/di";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({data}) => {
  return (
    <div className='project'>
    <div className="title-section">
      <div className='title'>{data.title}</div>
    
      <div className='github-link-container'>
        { 
            data.liveLink && (
              <a href={data.liveLink} target="_blank" rel="noopener noreferrer">
                <span className='external-arrow'>Live<FaExternalLinkAlt /></span>
              </a>
            )
          }

          <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
              <DiGithubFull className='react-icon'/><span className='external-arrow'> <FaExternalLinkAlt /></span>
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
   
    
    <div className='details'>
      {
      data.details.map((line) => (
        (<p key={line}>{line}</p>)
      ))
      }
      </div>
  </div>
  )
}

export default Project;