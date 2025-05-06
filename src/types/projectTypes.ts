export interface ProjectDetails {
  [key: string]: string | string[];
}

export interface Project {
  title: string;
  subheader: string;
  githubLink: string;
  thumbnails: string[];
  details: ProjectDetails;
  liveLink?: string;
  video?: string[];
}
