import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight, X } from "lucide-react";

const SearchBar = ({ 
  value, 
  onChange,
  suggestions = [], 
  onSelectSuggestion = () => {}, 
  placeholder = "Search countries and languages...",
  maxSuggestions = 5 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Filter suggestions based on input value
  const filteredSuggestions = suggestions
    .filter(item => 
      item.toLowerCase().includes(value.toLowerCase()))
    .slice(0, maxSuggestions);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        if (selectedIndex >= 0 && selectedIndex < filteredSuggestions.length) {
          handleSelectSuggestion(filteredSuggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  };

  // Handle selecting a suggestion
  const handleSelectSuggestion = (suggestion) => {
    onChange(suggestion);
    onSelectSuggestion(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    inputRef.current?.blur();
  };

  // Handle clicking outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Clear input
  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  return (
    <div className="relative mb-6" ref={suggestionsRef}>
      <Search 
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 
          ${isFocused ? 'text-blue-500' : 'text-gray-400'} 
          transition-colors duration-200`}
      />
      
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowSuggestions(true);
          setSelectedIndex(-1);
        }}
        onFocus={() => {
          setIsFocused(true);
          setShowSuggestions(true);
        }}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        className={`w-full pl-12 pr-12 py-3 rounded-2xl 
          ${isFocused ? 'bg-white border-blue-400' : 'bg-white/50 border-transparent'} 
          border-2 focus:bg-white transition-all duration-300 outline-none text-lg`}
        role="combobox"
        aria-expanded={showSuggestions}
        aria-controls="search-suggestions"
        aria-activedescendant={selectedIndex >= 0 ? `suggestion-${selectedIndex}` : undefined}
      />

      {value && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 
            rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Clear search"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      )}

      {/* Suggestions dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul
          className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 
            overflow-hidden z-50"
          id="search-suggestions"
          role="listbox"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              id={`suggestion-${index}`}
              role="option"
              aria-selected={index === selectedIndex}
              className={`px-4 py-3 flex items-center justify-between cursor-pointer
                ${index === selectedIndex ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200`}
              onClick={() => handleSelectSuggestion(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                {suggestion}
              </span>
              <ChevronRight className="w-4 h-4" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;