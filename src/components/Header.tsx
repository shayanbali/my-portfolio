import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Shayan Bali
            </h1>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
              AI Researcher & Software Engineer
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <a
              href="mailto:shayan.bali@kcl.ac.uk"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Mail size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/shayanbali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Github size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/shayan-bali-1296871a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Linkedin size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 hover:rotate-180 transition-all duration-300"
          >
            <div className="hover:scale-110 transition-transform duration-300">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-300"
          >
            <div className="hover:scale-110 transition-transform duration-300">
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </div>
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="mailto:shayan.bali@kcl.ac.uk"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="tel:+447376446018"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm">Phone</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;