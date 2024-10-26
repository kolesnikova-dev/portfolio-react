export interface Section {
    component: React.FC,
    key: string,
    size?: number,
  }
  
export  interface SideBySideSection {
    [key: string] : Section,
  }
  
export type Sections = Record<string, Section | SideBySideSection>;