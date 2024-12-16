import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import App from './App.tsx';
import RussianCalculator from './pages/ru/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <LanguageProvider defaultLang="en">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/ru" element={<RussianCalculator />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  </StrictMode>
);
