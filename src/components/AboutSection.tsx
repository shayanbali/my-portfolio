import React from 'react';
import { Download, User, MapPin, GraduationCap, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <section id="about" className="section-surface-muted pt-28 pb-20" ref={titleRef}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-14 scroll-animate ${titleVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="section-title">
              About Me
            </h2>
            <div className="section-rule mx-auto"></div>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-animate ${contentVisible ? 'animate-fade-in-left' : ''}`} ref={contentRef}>
            {/* Profile Photo Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative polished-panel interactive-lift float-subtle p-4">
                <div className="w-64 h-64 rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/80 dark:ring-white/10 hover:scale-[1.02] transition-all duration-500 cursor-pointer group">
                  <img
                    src="/photo64.jpg"
                    alt="Shayan Bali - AI Researcher & Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: '50% 30%' }}
                  />
                  <div className="absolute inset-4 rounded-lg bg-gradient-to-t from-slate-950/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30 ring-4 ring-white dark:ring-slate-950 transition-all duration-300 float-subtle">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="polished-panel interactive-lift p-6 w-full max-w-sm hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-4 text-center">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:shayanbali@gmail.com"
                    className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 text-base p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-400/10 group"
                  >
                    <Mail size={18} className="text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                    <span>shayanbali@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+447376446018"
                    className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300 text-base p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-400/10 group"
                  >
                    <Phone size={18} className="text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <span>+44 7376446018</span>
                  </a>
                </div>
              </div>
              
              {/* CV Download Button */}
              <div className="pt-4">
                <a
                  href="/Shayan_Bali_CV_final.pdf"
                  download="Shayan_Bali_CV_final.pdf"
                  className="inline-flex items-center space-x-2 bg-slate-950 hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200 text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  <Download size={20} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  <span>Download Full CV</span>
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Basic Info */}
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="polished-panel interactive-lift p-4">
                  <User size={20} className="text-teal-600 mb-2" />
                  <span className="font-medium">AI Researcher & Software Engineer</span>
                </div>
                <div className="polished-panel interactive-lift p-4">
                  <MapPin size={20} className="text-amber-600 mb-2" />
                  <span>London, UK</span>
                </div>
                <div className="polished-panel interactive-lift p-4">
                  <GraduationCap size={20} className="text-blue-600 mb-2" />
                  <span>MSc Advanced Computing, King's College London</span>
                </div>
              </div>

              {/* Description */}
              <div className="polished-panel interactive-lift p-7 hover:-translate-y-1 transition-all duration-300">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  I'm a postgraduate student in Advanced Computing at King's College London, graduating in September 2025. I specialize in AI, NLP, and Large Language Models, with hands-on experience across both academic research and industry. My work spans a range of AI and software engineering projects — from developing advanced NLP systems to contributing to applied research in top-tier labs and tech companies.
                </p>
              </div>

              {/* Research Interests */}
              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-4">
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
                      className="px-4 py-2 bg-white/80 dark:bg-white/10 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-semibold ring-1 ring-slate-200 dark:ring-white/10 hover:text-teal-700 hover:ring-teal-300 dark:hover:text-teal-300 transition-all duration-300 cursor-pointer"
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
            <div className="text-center p-6 polished-panel interactive-lift hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-3xl font-black text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Years of Experience</div>
            </div>
            <div className="text-center p-6 polished-panel interactive-lift hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-3xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 polished-panel interactive-lift hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-3xl font-black text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Research Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
