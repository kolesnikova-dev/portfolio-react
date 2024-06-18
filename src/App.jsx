import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';


function App() {

  return (
    <div className='App'>
      <nav>
          <NavBar />
      </nav>

      <main>
          <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/home'} element={<MainPage />} />
            <Route path={'/skills'} element={<Skills />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/certifications'} element={<Certifications />} />
            <Route path={'/contact'} element={<ContactPage />} />
        </Routes>
      </main>

      <footer>
          <Footer />
      </footer>


    </div>
  );
};

export default App;