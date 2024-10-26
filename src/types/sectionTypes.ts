interface Section {
    component: React.FC,
    key: string,
    size?: number,
  }
  
  interface SideBySideSection {
    [key: string] : Section,
  }
  
  export type Sections = Record<string, Section | SideBySideSection>;