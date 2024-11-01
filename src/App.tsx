import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';

import { MainPage, Layout } from './pages/index';
import { ErrorBoundary } from './components/index';

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

 
