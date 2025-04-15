import { icons } from "../data/icons";

const year: number = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer>
      <p className="display-flex flex-center padding-2rem">
        {icons.Copyright}&nbsp; Veronika Kolesnikova, {year}
      </p>
    </footer>
  );
};
