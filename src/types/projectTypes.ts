export interface Project {
        title: string,
        subheader: string,
        githubLink: string,
        thumbnails: string[],
        details: {
                [key: string] : string,
        },
        liveLink?: string,
        video?: string[],
}
