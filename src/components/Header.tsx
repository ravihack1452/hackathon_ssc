import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localQuery);
  };

  return (
    <header className="bg-gradient-to-r from-sky-200 to-sky-300 sticky top-0 z-50">
      <div className="px-4 py-3">
        {/* Top row with logo and close */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">
              amazon <span className="text-blue-600 font-normal italic">now</span>
            </h1>
          </div>
          <X className="h-6 w-6 text-black" />
        </div>

        {/* Delivery info */}
        <div className="flex items-center mb-4">
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-md font-bold text-sm flex items-center mr-3">
            ⚡ 12 mins
          </div>
          <div className="text-black text-sm">
            <span className="font-medium">Deliver to Ravi - Bengaluru 560067</span>
            <span className="ml-1">▼</span>
          </div>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="Search for products, stores..."
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </header>
  );
};