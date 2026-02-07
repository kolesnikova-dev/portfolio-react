import { icons } from "../data/svgIcons";

const year: number = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="display-flex flex-center pb-8 md-font">
      {icons.Copyright}&nbsp;Veronika Kolesnikova, {year}
    </footer>
  );
};
