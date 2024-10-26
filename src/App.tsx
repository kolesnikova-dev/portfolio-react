import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './pages';
import { default as MainPage } from './pages/MainPage';
import { ErrorBoundary } from './components';

import './App.css';


export const App: React.FC = () => {
  return (
    <Router>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
        {/* catch all route - replace to a 404 page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ErrorBoundary>
    </Router>
  );
};

 
