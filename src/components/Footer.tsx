import CopyrightIcon from '@mui/icons-material/Copyright';


const year: number = new Date().getFullYear();


export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="display-flex flex-center">
        <CopyrightIcon />
        <p>
          Veronika Kolesnikova, {year}
        </p>
      </div>
    </footer>
  );
};
