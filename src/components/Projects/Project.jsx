import { FormattedArray } from '../index';
import { DiGithubFull } from "react-icons/di";
import { FaExternalLinkAlt } from "react-icons/fa";


const Project = ({data, isTransitioning}) => {
  return (
    <div>
    <div>
      <div >{data.title}</div>
    
      <div>
        { 
            data.liveLink && (
              <a href={data.liveLink} target="_blank" rel="noopener noreferrer">
                <span>Live<FaExternalLinkAlt /></span>
              </a>
            )
          }

          <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
              <DiGithubFull/><span> <FaExternalLinkAlt /></span>
          </a>
         
      </div>
    </div>

    <div className={isTransitioning ? 'fade-out' : 'delayedAppear'}>
      <div className={isTransitioning ? 'fade-out' : 'delayedAppear'}>
      {data.image ? ( 
         <img src={data.image} alt={data.title} />
      ) : (      
        <video src={data.video} loop={true} autoPlay="autoplay" controls="controls" muted />
      )}
      </div> 
    </div>
   
    
    <div className={isTransitioning ? 'fade-out' : 'appear'}>
      <FormattedArray arr={data.details} />
      </div>
  </div>
  )
}

export default Project;