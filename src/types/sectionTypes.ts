export interface Section {
  component: React.FC;
  key: string;
  size?: number;
}

export interface SideBySideSection {
  left: Section;
  right: Section;
}

export type Sections = {
  top: SideBySideSection;
  middle: Section;
  bottom: SideBySideSection;
};
