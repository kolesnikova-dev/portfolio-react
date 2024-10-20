import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './pages/Layout';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import pages
// import CertificationsPage from './pages/CertificationsPage/CertificationsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import MainPage from './pages/MainPage';
import { ErrorBoundary } from './components'
//import styles
import './App.css';


function App() {

  return (
    <ErrorBoundary>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage	/>}	/>
            {/* <Route path={'/skills'} element={<Skills />} /> */}
            {/* <Route path={'/projects'} element={<Projects />} /> */}
            {/* <Route path={'/certifications'} element={<CertificationsPage />} /> */}
            <Route path={'/contact'} element={<ContactPage />} />
            {/* catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;