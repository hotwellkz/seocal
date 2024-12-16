import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  const isRussian = location.pathname.includes('/ru');

  return (
    <footer className="glass-card mt-8">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <Globe className="w-5 h-5 text-purple-400" />
          <Link
            to={isRussian ? '/' : '/ru'}
            className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
          >
            {isRussian ? 'Switch to English' : 'Переключить на Русский'}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;