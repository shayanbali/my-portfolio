import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EducationSection: React.FC = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const education = [
    {
      degree: 'M.Sc. in Advanced Computing',
      institution: 'King\'s College London',
      period: 'Sep 2024 – Present',
      location: 'London, UK',
      grade: 'Current Average Grade: 72.88 (Distinction)',
      coursework: [
        'AI Reasoning and Decision Making',
        'AI Planning',
        'Computer Vision',
        'Pattern Recognition and Deep Learning',
        'Agents and Multi-Agent Systems',
        'Machine Learning',
        'Data Mining',
        'Intro to Data Visualization'
      ],
      thesis: 'Making Audio and Video Media More Accessible to Users with Complex Communication Needs — developing AI tools to enhance accessibility for individuals with cognitive and communication impairments.',
      color: 'bg-blue-600'
    },
    {
      degree: 'B.Sc. in Computer Engineering',
      institution: 'Amirkabir University of Technology (Tehran Polytechnic)',
      period: 'Sep 2019 – Apr 2024',
      location: 'Tehran, Iran',
      grade: 'GPA: 18.60/20 (3.94/4) — Ranked 10th out of 154 students (Top 6%)',
      thesis: 'Disease Diagnosis based on Brain Functional Network Analysis, with a focus on Graph Neural Networks',
      color: 'bg-green-600'
    }
  ];

  return (
    <section id="education" className="pt-24 pb-20 bg-gray-50 dark:bg-gray-800" ref={titleRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 scroll-animate ${titleVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className={`space-y-12 scroll-animate ${contentVisible ? 'animate-fade-in-up' : ''}`} ref={contentRef}>
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 ${edu.color} rounded-full flex items-center justify-center`}>
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                          {edu.institution}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-300 lg:text-right">
                        <div className="flex items-center space-x-1 lg:justify-end">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 lg:justify-end">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Grade Information */}
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 hover:bg-green-100 dark:hover:bg-green-800/30 hover:border-l-8 transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award size={18} className="text-green-600 hover:scale-110 transition-transform duration-300" />
                        <span className="font-semibold text-green-800 dark:text-green-300">Academic Performance</span>
                      </div>
                      <p className="text-green-700 dark:text-green-300 font-medium">
                        {edu.grade}
                      </p>
                    </div>

                    {/* Coursework */}
                    {edu.coursework && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Coursework
                        </h5>
                        <div className="grid md:grid-cols-2 gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <div key={courseIndex} className="flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-1 rounded transition-all duration-200 hover:translate-x-1 group">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {course}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Thesis */}
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-800/30 hover:border-l-8 transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-2">
                        <BookOpen size={18} className="text-blue-600 hover:scale-110 transition-transform duration-300" />
                        <span className="font-semibold text-blue-800 dark:text-blue-300">
                          {index === 0 ? 'Thesis' : 'Thesis'}
                        </span>
                      </div>
                      <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                        {edu.thesis}
                      </p>
                    </div>
                  </div>
                </div>
                
                {index < education.length - 1 && (
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

export default EducationSection;