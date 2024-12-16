import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className={`flex items-center justify-between p-3 select-dark cursor-pointer ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
      </div>
      
      {isOpen && (
        <div className="search-dropdown" style={{ zIndex: 1050 }}>
          <div className="p-2 border-b border-gray-700">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                ref={searchInputRef}
                className="w-full pl-8 pr-4 py-2 bg-transparent border-none focus:ring-0 text-gray-100"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="max-h-[240px] overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="px-4 py-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-colors"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                  setSearch('');
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;