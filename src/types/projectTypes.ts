export interface Project {
        title: string,
        subheader: string,
        githubLink: string,
        liveLink: string,
        video: string,
        thumbnails: string,
        details: string[],
}

export type Projects = Record<number, Project>;
