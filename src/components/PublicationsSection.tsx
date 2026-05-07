import React from 'react';
import { BookOpen, Calendar, Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PublicationsSection: React.FC = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const publications = [
    {
      title: 'Mapping Movies: A Mind-Map Approach to Aphasia-Friendly Video',
      venue: 'ACM CHI 2026',
      year: '2026',
      status: 'Accepted',
      type: 'Conference',
      description: 'A mind-map based approach for making video content more accessible and aphasia-friendly.',
      authors: 'Shayan Bali, A. Nevsky, F. Bircanin, T. Neate',
      color: 'bg-blue-600',
      link: 'https://dl.acm.org/doi/pdf/10.1145/3772363.3798702'
    },
    {
      title: 'Detecting Subtle Biases: An Ethical Lens on Underexplored Areas in AI Language Models Biases',
      venue: 'EACL 2026 Main Conference',
      year: '2026',
      status: 'Accepted',
      type: 'Conference',
      description: 'An ethical study of subtle and underexplored bias areas in AI language models, accepted as an invited oral presentation.',
      authors: 'Shayan Bali, F. Farsi, M. Hosseini, A. Khorramrouz, E. Asgari',
      color: 'bg-emerald-600',
      link: 'https://aclanthology.org/2026.eacl-long.345/'
    },
    {
      title: 'PBBQ: A Persian Bias Benchmark Dataset Curated with Human-AI Collaboration for Large Language Models',
      venue: 'LREC 2026',
      year: '2026',
      status: 'Accepted',
      type: 'Conference',
      description: 'A Persian bias benchmark dataset curated through human-AI collaboration for evaluating large language models.',
      authors: 'F. Farsi, Shayan Bali, F. Valeh, P. Ghofrani, A. Pakniat, K. Kashfipour, A. Payberah',
      color: 'bg-amber-600',
      link: 'https://arxiv.org/pdf/2510.19616'
    },
    {
      title: 'PerHalluEval: Persian Hallucination Evaluation Benchmark for Large Language Models',
      venue: 'LREC 2026',
      year: '2026',
      status: 'Accepted',
      type: 'Conference',
      description: 'A Persian benchmark for evaluating hallucination behavior in large language models.',
      authors: 'M. Hosseini*, K. Hosseini*, Shayan Bali, Z. Zanjani, S. Momtazi',
      color: 'bg-purple-600',
      link: 'https://arxiv.org/abs/2509.21104'
    },
    {
      title: 'MELAC: Massive Evaluation of Large Language Models with Alignment of Culture in Persian Language',
      venue: 'IJCNLP-AACL 2025',
      year: '2025',
      status: 'Accepted',
      type: 'Conference',
      description: 'A large-scale cultural alignment evaluation of large language models for the Persian language.',
      authors: 'F. Farsi*, F. Aghababaloo*, S. Shariati Motlagh*, P. Ghofrani, M. Sadraei Javaheri, Shayan Bali, A. Shabani, F. Bijary, G. Zamaninejad, A. Salehoof, S. Momtazi',
      color: 'bg-indigo-600',
      link: 'https://aclanthology.org/2025.ijcnlp-long.105/'
    },
    {
      title: 'Persian in a Court',
      venue: 'EvalMG-COLING 2025',
      year: '2025',
      status: 'Published',
      type: 'Workshop',
      description: 'Benchmarking vision-language models on Persian multimodal tasks in legal and court-related contexts.',
      authors: 'F. Farsi, S. Shariati Motlagh, Shayan Bali, S. Sabouri, S. Momtazi',
      color: 'bg-teal-600',
      link: 'https://aclanthology.org/2025.evalmg-1.5/'
    },
    {
      title: 'Investigating Syntactic and Semantic Features for Distinguishing AI-Generated and Human-Written Texts',
      venue: 'SemEval-NAACL 2024',
      year: '2024',
      status: 'Published',
      type: 'Workshop',
      description: 'A SemEval system paper studying syntactic and semantic features for AI-generated text detection.',
      authors: 'M. Rad*, F. Farsi*, Shayan Bali*, R. Etezadi, M. Shamsfard',
      color: 'bg-rose-600',
      link: 'https://aclanthology.org/2024.semeval-1.69/'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Accepted':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300';
      case 'Submitted':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="publications" className="section-surface pt-24 pb-20" ref={titleRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 scroll-animate ${titleVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Publications & Talks
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className={`space-y-8 scroll-animate ${contentVisible ? 'animate-fade-in-left' : ''}`} ref={contentRef}>
            {publications.map((pub, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 ${pub.color} rounded-full flex items-center justify-center`}>
                    <BookOpen size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-3 hover:bg-white dark:hover:bg-gray-700 transition-all duration-500 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {pub.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pub.status)} hover:scale-105 transition-transform duration-300`}>
                          {pub.status}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full hover:scale-105 transition-transform duration-300">
                          {pub.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <div className="flex items-center space-x-1">
                        <Award size={16} />
                        <span className="font-semibold">{pub.venue}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                      {pub.description}
                    </p>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      Authors: {pub.authors}
                    </p>
                    
                    {pub.link && (
                      <div className="mt-4">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 text-sm font-medium hover:scale-105 hover:-translate-y-1 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <ExternalLink size={16} className="hover:scale-110 transition-transform duration-300" />
                          <span>View Publication</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                
                {index < publications.length - 1 && (
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

export default PublicationsSection;
