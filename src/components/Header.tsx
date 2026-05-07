import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from './theme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    handleScroll();
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
    <header className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-slate-900/10 border-b border-slate-200/70 dark:border-white/10' 
        : 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-transparent'
    }`}>
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 via-blue-600 to-amber-500 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 leading-tight">
            <h1 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white">
              Shayan Bali
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
              AI Researcher & Software Engineer
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-400/10"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <a
              href="mailto:shayanbali@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-400/10"
            >
              <Mail size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/shayanbali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-400/10"
            >
              <Github size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/shayan-bali-1296871a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 hover:-translate-y-1 p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-400/10"
            >
              <Linkedin size={18} className="hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-lg bg-slate-100 text-slate-700 ring-1 ring-slate-200 hover:bg-white hover:text-teal-700 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/15 transition-all duration-300"
          >
            <div className="hover:scale-110 transition-transform duration-300">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg bg-slate-100 text-slate-700 ring-1 ring-slate-200 hover:bg-white hover:text-teal-700 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/15 transition-all duration-300"
          >
            <div className="hover:scale-110 transition-transform duration-300">
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </div>
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-200 dark:border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="mailto:shayanbali@gmail.com"
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
