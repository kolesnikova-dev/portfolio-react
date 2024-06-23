import { Route, Routes } from 'react-router-dom';
// import components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
// import pages
import CertificationsPage from './pages/CertificationsPage/CertificationsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import MainPage from './pages/MainPage';
//import styles
import './App.css';


function App() {

  return (
    <div className='App'>
      {/* navigation bar */}
      <nav>
          <NavBar />
      </nav>

    {/* main section */}
      <main>
          <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/home'} element={<MainPage />} />
            <Route path={'/skills'} element={<Skills />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/certifications'} element={<CertificationsPage />} />
            <Route path={'/contact'} element={<ContactPage />} />
        </Routes>
      </main>

      {/* footer */}
      <footer>
          <Footer />
      </footer>


    </div>
  );
};

export default App;