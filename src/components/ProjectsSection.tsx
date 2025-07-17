import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Persian Summarization with BERT',
      company: 'Asa Co.',
      description: 'Developed a Persian text summarization system using BERT architecture, achieving state-of-the-art performance on Persian language datasets.',
      technologies: ['BERT', 'Persian NLP', 'Python', 'PyTorch', 'Transformers'],
      category: 'NLP',
      color: 'bg-blue-600'
    },
    {
      title: 'UK Football Performance Visualizer',
      company: 'Personal Project',
      description: 'Developed an interactive data visualization tool to analyze Premier League team performance over UK regions (2005–2024). Used choropleth maps, line graphs, and player stats in a responsive UI.',
      technologies: ['Data Visualization', 'JavaScript', 'D3.js', 'Python'],
      category: 'Data Visualization',
      color: 'bg-purple-600'
    },
    {
      title: 'South Azerbaijani ASR',
      company: 'Research Project',
      description: 'Automatic Speech Recognition system for South Azerbaijani language, addressing low-resource language challenges.',
      technologies: ['ASR', 'Speech Processing', 'Deep Learning', 'Python', 'Audio Processing'],
      category: 'Speech Processing',
      color: 'bg-green-600'
    },
    {
      title: 'Image Classification System',
      company: 'Academic Project',
      description: 'Implemented and compared ResNet, AlexNet and VGG16 architectures for image classification tasks with performance optimization.',
      technologies: ['ResNet', 'VGG16', 'Computer Vision', 'PyTorch', 'CNN'],
      category: 'Computer Vision',
      color: 'bg-orange-600'
    },
    {
      title: 'Game Recommender System',
      company: 'Academic Project',
      description: 'Built a scalable game recommendation system using Apache Spark for big data processing and collaborative filtering.',
      technologies: ['Apache Spark', 'Big Data', 'Recommendation Systems', 'Python', 'Scala'],
      category: 'Big Data',
      color: 'bg-red-600'
    },
    {
      title: 'Multilabel Text Classification',
      company: 'Research Project',
      description: 'Developed a multilabel text classification system using BERT for handling complex text categorization tasks.',
      technologies: ['BERT', 'Multilabel Classification', 'NLP', 'Python', 'Deep Learning'],
      category: 'NLP',
      color: 'bg-indigo-600'
    }
  ];

  return (
    <section id="projects" className="pt-24 pb-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group cursor-pointer">
                <div className={`h-2 ${project.color} group-hover:h-4 transition-all duration-300`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300">
                      {project.category}
                    </span>
                    <Code size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 font-medium">
                    {project.company}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:scale-105 transition-all duration-200 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.title === 'UK Football Performance Visualizer' ? (
                      <a
                        href="https://github.com/shayanbali/uk-football-visualizer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <Github size={16} className="hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">Code</span>
                      </a>
                    ) : project.title === 'Game Recommender System' ? (
                      <a
                        href="https://github.com/shayanbali/Game-Recommender-with-Spark"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <Github size={16} className="hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">Code</span>
                      </a>
                    ) : (
                      project.title === 'Image Classification System' ? (
                        <a
                          href="https://github.com/shayanbali/image-classification"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <Github size={16} className="hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm">Code</span>
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;