import React from 'react';
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    role: "Graduate AI Intern",
    company: "Jaris Technologies",
    period: "Dec 2025 - Apr 2026",
    location: "London, UK",
    description: [
      "Conducting research and development on computer vision techniques for object detection and segmentation, applied to autonomous ramp operations to advance automation capabilities in the aviation industry."
    ],
    technologies: ["Computer Vision", "Object Detection", "Segmentation", "Aviation AI", "Automation"],
    color: "bg-blue-600"
  },
  {
    role: "Machine Learning Engineer",
    company: "Vista Samaneh Asa",
    period: "May 2023 - Sep 2023",
    location: "Tehran, Iran",
    description: [
      "Developed a multi-label text classification model for stock brokerage news categorization, achieving 93% accuracy using a BERT-based encoder.",
      "Built a Named Entity Recognition system for financial news, reaching 95% token-level accuracy by using XLM-RoBERTa.",
      "Implemented a text summarization system for news articles, reducing text length by 30-60% by adapting the Google PageRank algorithm for sentence ranking.",
      "Collaborated with cross-functional teams to integrate AI models into real-time production systems and deliver AI solutions for a stock brokerage with seven million users."
    ],
    technologies: ["BERT", "XLM-RoBERTa", "NER", "Text Classification", "Summarization", "Financial NLP"],
    color: "bg-emerald-600"
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Faradis Alborz",
    period: "Jul 2021 - Oct 2021",
    location: "Tehran, Iran",
    description: [
      "Implemented a predictive model for ATM cash demand using two years of data from 500+ ATMs with time-series models and neural networks in Keras, reducing forecast error by 12% via optimized window sizes and external economic indicators."
    ],
    technologies: ["Time Series", "Keras", "Neural Networks", "Forecasting", "Predictive Modeling"],
    color: "bg-amber-600"
  }
];

interface ExperienceCardProps {
  exp: typeof experiences[number];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const [expRef, expVisible] = useScrollAnimation(0.2);

  return (
    <div 
      className="relative"
      ref={expRef}
    >
      <div className="flex items-start space-x-6">
        <div className={`flex-shrink-0 w-12 h-12 ${exp.color} rounded-full flex items-center justify-center`}>
          <Briefcase size={24} className="text-white" />
        </div>
        
        <div className={`flex-1 polished-panel p-6 hover:-translate-y-3 transition-all duration-500 group scroll-animate ${expVisible ? 'animate-fade-in-left' : ''}`}
             style={{ animationDelay: `${index * 200}ms` }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-black text-slate-950 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
              {exp.role}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-600 dark:text-slate-300 mt-2 md:mt-0">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            <Building size={18} className="text-slate-500 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 group-hover:scale-110 transition-all duration-300" />
            <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              {exp.company}
            </h4>
          </div>
          
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
            {exp.description.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600 dark:bg-teal-300"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-sm rounded-lg ring-1 ring-slate-200 dark:ring-white/10 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {index < experiences.length - 1 && (
        <div className={`absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 scroll-animate ${expVisible ? 'animate-fade-in' : ''}`}
             style={{ animationDelay: `${index * 200 + 100}ms` }}></div>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section id="experience" className="section-surface py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-animate ${titleVisible ? 'animate-fade-in-up' : ''}`}
        >
          <p className="section-kicker mb-3">Industry work</p>
          <h2 className="section-title mb-4">
            Professional Experience
          </h2>
          <div className="section-rule mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Applied AI, computer vision, and NLP work across aviation, finance, and forecasting systems.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
