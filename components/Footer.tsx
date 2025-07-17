import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Shayan Bali</h3>
            <p className="text-gray-400">AI Researcher & Software Engineer</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-sm">
              Last updated: January 2025
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              <ArrowUp size={20} className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500 hover:scale-125 hover:text-red-400 transition-all duration-300 cursor-pointer animate-pulse" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;