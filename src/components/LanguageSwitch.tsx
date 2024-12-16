import React from 'react';
import { Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang);
    navigate(newLang === 'ru' ? '/ru' : '/');
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-purple-400" />
      <select
        value={lang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-transparent border-none text-sm font-medium text-gray-200 focus:ring-0 cursor-pointer"
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;