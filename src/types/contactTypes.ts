export interface Contact {
  icon: {
    ariaLabel: string;
    icon: React.ReactNode;
  };
  link: {
    ariaLabel: string;
    url: string;
  };
}

export type ContactKey = "Github" | "LinkedIn";
