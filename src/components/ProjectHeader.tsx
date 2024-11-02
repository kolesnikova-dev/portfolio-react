import  CardHeader from "@mui/material/CardHeader";

import { Project } from "../types";
import { icons } from "../data/icons";
import { IconWithTooltip } from "./index";



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

  const githubIconOptions = (githubLink: string) => ({
    icon: {
      ariaLabel: 'View on GitHub',
      icon: icons.GithubBlack,
    }, 
    link: {
      ariaLabel: 'View on GitHub',
      url: githubLink,
    }
  });
  
  const liveLinkOptions = (liveLink: string) => ({
    icon: { 
      ariaLabel: 'Navigate to live website',
      icon: icons.ExternalLink,
    },
    link: {
      ariaLabel: 'Navigate to live website',
      url: liveLink ?? undefined,
    }
  });
  

type Props = {
    project: Project,
    fullDisplay: boolean,
    toggleDisplay: (newIndex: number) => void;
    index: number,
}


export const ProjectHeader: React.FC<Props> = ({ project, fullDisplay, toggleDisplay, index }) => {
    const { title, githubLink, liveLink, subheader } = project;

    const handleToggleDisplay = () => {
        toggleDisplay(index);
      };
    
    const titleBox = (
        <div>
          <span>{title}</span>
          <span> 
            <IconWithTooltip
              icon={unfoldIconOptions[fullDisplay.toString()]}
              placement='right'
            />
          </span>
        </div>
      );


    return (
       <div onClick={handleToggleDisplay}>
         <CardHeader
          className='bg-whitesmoke border-radius-4px'
          action={
            <div className="display-flex flex-center center-column">
              <IconWithTooltip {...githubIconOptions(githubLink)} placement='right'/>
             {
              liveLink && 
                <IconWithTooltip
                  {...liveLinkOptions(liveLink)} 
                  placement='right'
                />
              }
            </div>
         }
          title={titleBox}
          subheader={subheader}
       />
       </div>
    )
}