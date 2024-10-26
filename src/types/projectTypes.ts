export interface Project {
        title: string,
        subheader: string,
        githubLink: string,
        thumbnails: string,
        details: string[],
        liveLink?: string,
        video?: string,
}

export type Projects = Record<number, Project>;
