import React from 'react';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: 'Research Assistant',
      company: 'Institute for Research in Fundamental Sciences (IPM)',
      period: '2023 – 2024',
      location: 'Tehran, Iran',
      description: 'Conducted research on Explainable AI with GANs and Vision Transformers, focusing on interpretability and model transparency.',
      technologies: ['Python', 'PyTorch', 'GANs', 'Vision Transformers', 'Explainable AI'],
      color: 'bg-blue-600'
    },
    {
      role: 'Research Assistant',
      company: 'Shahid Beheshti University',
      period: '2023 – 2024',
      location: 'Tehran, Iran',
      description: 'Developed systems for detecting AI-generated vs. human text using advanced NLP techniques and machine learning models.',
      technologies: ['NLP', 'Transformers', 'Python', 'Text Analysis', 'Machine Learning'],
      color: 'bg-green-600'
    },
    {
      role: 'ML Engineer',
      company: 'Asa Co.',
      period: '2022 – 2023',
      location: 'Tehran, Iran',
      description: 'Developed and deployed NLP pipeline systems using transformer architectures for various language processing tasks.',
      technologies: ['NLP', 'Transformers', 'Python', 'PyTorch', 'Pipeline Development'],
      color: 'bg-purple-600'
    },
    {
      role: 'Teaching Assistant',
      company: 'Amirkabir University of Technology',
      period: '2021 – 2024',
      location: 'Tehran, Iran',
      description: 'Taught 6+ computer science and machine learning subjects, mentoring students in theoretical and practical aspects.',
      technologies: ['Education', 'Computer Science', 'Machine Learning', 'Mentoring'],
      color: 'bg-orange-600'
    },
    {
      role: 'AI Intern',
      company: 'Faradis Alborz',
      period: '2021',
      location: 'Tehran, Iran',
      description: 'Developed neural forecasting models for ATM cash management, optimizing cash flow predictions and resource allocation.',
      technologies: ['Neural Networks', 'Forecasting', 'Python', 'Time Series', 'Finance'],
      color: 'bg-red-600'
    }
  ];

  return (
    <section id="experience" className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 ${exp.color} rounded-full flex items-center justify-center`}>
                    <Briefcase size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-3 hover:bg-white dark:hover:bg-gray-700 transition-all duration-500 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
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
                      <Building size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;