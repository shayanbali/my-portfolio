import React from 'react';
import { Code, Database, Wrench, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillsSection: React.FC = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [specializationsRef, specializationsVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'Java', 'C'],
      color: 'bg-blue-600'
    },
    {
      title: 'ML Libraries & Frameworks',
      icon: <Database size={24} />,
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn'],
      color: 'bg-green-600'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      skills: ['Git', 'Docker', 'Spark', 'Kubernetes', 'Elasticsearch'],
      color: 'bg-purple-600'
    },
    {
      title: 'Languages',
      icon: <Globe size={24} />,
      skills: ['English (Fluent)', 'Persian (Native)'],
      color: 'bg-orange-600'
    }
  ];

  const specializations = [
    'Machine Learning',
    'Natural Language Processing',
    'Explainable AI',
    'Large Language Models',
    'Speech Processing',
    'Multimodal Learning'
  ];

  return (
    <section id="skills" className="pt-24 pb-20 bg-gray-50 dark:bg-gray-800" ref={titleRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 scroll-animate ${titleVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scroll-animate ${skillsVisible ? 'animate-scale-in' : ''}`} ref={skillsRef}>
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group cursor-pointer">
                <div className={`${category.color} p-6 text-white group-hover:scale-105 transition-transform duration-300 h-24 flex items-center`}>
                  <div className="flex items-center space-x-3">
                    <div className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded transition-all duration-200 hover:translate-x-1 group/skill">
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover/skill:scale-150 group-hover/skill:bg-blue-500 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 p-8 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 scroll-animate ${specializationsVisible ? 'animate-fade-in-up' : ''}`} ref={specializationsRef}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;