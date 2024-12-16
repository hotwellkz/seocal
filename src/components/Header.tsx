import React from 'react';
import { useLocation } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitch';

const Header: React.FC = () => {
  const location = useLocation();
  const isRussian = location.pathname.includes('/ru');

  return (
    <header className="glass-card">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold heading-gradient">
          {isRussian ? 'SEO Калькулятор' : 'SEO Link Calculator'}
        </h1>
        <LanguageSwitch />
      </div>
    </header>
  );
}

export default Header;