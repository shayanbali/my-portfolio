import React from 'react';
import { User, MapPin, GraduationCap, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section id="about" className="pt-24 pb-20 bg-white dark:bg-gray-900" ref={titleRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-animate ${contentVisible ? 'animate-fade-in-left' : ''}`} ref={contentRef}>
            {/* Profile Photo Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100 dark:ring-blue-900/30 hover:ring-8 hover:ring-blue-200 dark:hover:ring-blue-800/50 transition-all duration-500 hover:scale-105 cursor-pointer group">
                  <img
                    src="public/photo64.jpg"
                    alt="Shayan Bali - AI Researcher & Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: '50% 30%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:bg-green-400 transition-all duration-300 cursor-pointer">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg w-80 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:shayan.bali@kcl.ac.uk"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-base p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:translate-x-2 group"
                  >
                    <Mail size={18} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <span>shayan.bali@kcl.ac.uk</span>
                  </a>
                  <a 
                    href="tel:+447376446018"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 text-base p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 hover:translate-x-2 group"
                  >
                    <Phone size={18} className="text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    <span>+44 7376446018</span>
                  </a>
                </div>
              </div>
              
              {/* CV Download Button */}
              <div className="pt-4">
                <a
                  href="../../public/Shayan_Bali_CV_july.pdf
                  "
                  download="Shayan_Bali_CV_17july.pdf"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Full CV</span>
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <User size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">AI Researcher & Software Engineer</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <GraduationCap size={20} className="text-blue-600 flex-shrink-0" />
                  <span>MSc Advanced Computing, King's College London</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a postgraduate student in Advanced Computing at King's College London, graduating in September 2025. I specialize in AI, NLP, and Large Language Models, with hands-on experience across both academic research and industry. My work spans a range of AI and software engineering projects — from developing advanced NLP systems to contributing to applied research in top-tier labs and tech companies.
                </p>
              </div>

              {/* Research Interests */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Large Language Models',
                    'NLP',
                    'Explainable AI',
                    'Software Engineering'
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:shadow-md"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className={`grid md:grid-cols-3 gap-6 scroll-animate ${statsVisible ? 'animate-scale-in' : ''}`} ref={statsRef}>
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-xl hover:-translate-y-3 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-all duration-500 cursor-pointer group border border-transparent hover:border-blue-300 dark:hover:border-blue-600">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-125 transition-transform duration-300">5+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-xl hover:-translate-y-3 hover:bg-green-100 dark:hover:bg-green-800/30 transition-all duration-500 cursor-pointer group border border-transparent hover:border-green-300 dark:hover:border-green-600">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-125 transition-transform duration-300">10+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-xl hover:-translate-y-3 hover:bg-purple-100 dark:hover:bg-purple-800/30 transition-all duration-500 cursor-pointer group border border-transparent hover:border-purple-300 dark:hover:border-purple-600">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-125 transition-transform duration-300">4+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Research Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;