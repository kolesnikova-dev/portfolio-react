import { 
  About, 
  Skills, 
  Projects, 
  Certifications, 
  Contacts, 
  Stats 
} from '../components';

const sections = [
  About,
  Skills,
  Projects,
  Stats,
  Certifications,
  Contacts
]


const MainPage = () => {
  return (
    <>
         {sections.map((Section, index) => (
          <Section key={index} />
         ))}
    </>

  );
};

export default MainPage;