import  CardHeader from "@mui/material/CardHeader";

import { Project } from "../types";
import { icons } from "../data/icons";
import { IconWithTooltip, ProjectIconBox } from "./index";


const unfoldIconOptions = {
    true: {
      ariaLabel: 'See less information',
      icon: icons.UnfoldLess,
    },
    false: {
      ariaLabel: 'See more information',
      icon: icons.UnfoldMore,
    },
  };

type Props = {
    project: Project,
    fullDisplay: boolean,
    toggleDisplay: (newIndex: number) => void;
    index: number,
}


export const ProjectHeader: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
    const { title, githubLink, liveLink, subheader } = project;
  
    const projectLinks = { liveLink, githubLink };


    const handleToggleDisplay = () => {
        toggleDisplay(index);
      };
    
    const titleBox = (
        <div>
          <span>{title}</span>
          <span> 
            <IconWithTooltip
              icon={unfoldIconOptions[fullDisplay.toString()]}
              onClick={handleToggleDisplay}
              placement='right'
            />
          </span>
        </div>
      );


    return (
        <CardHeader
        className='bg-whitesmoke border-radius-4px'
         action={
           <ProjectIconBox
             projectLinks={projectLinks}
             fullDisplay={fullDisplay}
             toggleDisplay={toggleDisplay}
             index={index}
           />
         }
         title={titleBox}
         subheader={subheader}
       />
    )
}