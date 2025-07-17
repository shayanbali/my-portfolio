import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection: React.FC = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xkgznede', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Shayan,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.open(`mailto:shayan.bali@kcl.ac.uk?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="pt-24 pb-20 bg-white dark:bg-gray-900" ref={titleRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 scroll-animate ${titleVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm always open to discussing new opportunities, collaborations, or research projects.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-12 scroll-animate ${contentVisible ? 'animate-fade-in-up' : ''}`} ref={contentRef}>
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-3 rounded-lg transition-all duration-300 hover:translate-x-2 group/item">
                    <Mail size={20} className="text-blue-600 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Email</p>
                      <a 
                        href="mailto:shayan.bali@kcl.ac.uk"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        shayan.bali@kcl.ac.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 hover:bg-green-50 dark:hover:bg-green-900/20 p-3 rounded-lg transition-all duration-300 hover:translate-x-2 group/item">
                    <Phone size={20} className="text-green-600 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Phone</p>
                      <a 
                        href="tel:+447376446018"
                        className="text-green-600 dark:text-green-400 hover:underline"
                      >
                        +44 7376446018
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 p-3 rounded-lg transition-all duration-300 hover:translate-x-2 group/item">
                    <MapPin size={20} className="text-purple-600 group-hover/item:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Location</p>
                      <p className="text-gray-700 dark:text-gray-300">London, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group flex flex-col min-h-[180px]">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-left">
                  Connect With Me
                </h3>
                
                <div className="flex space-x-4 justify-center items-center flex-1">
                  <a
                    href="https://github.com/shayanbali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group/icon"
                  >
                    <Github size={24} className="group-hover/icon:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shayan-bali-1296871a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group/icon"
                  >
                    <Linkedin size={24} className="group-hover/icon:scale-110 transition-transform duration-300" />
                  </a>
                  <a
                    href="mailto:shayan.bali@kcl.ac.uk"
                    className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group/icon"
                  >
                    <Mail size={24} className="group-hover/icon:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Send a Message
              </h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3 animate-in slide-in-from-top duration-300">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700 dark:text-green-300 text-sm">{statusMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-3 animate-in slide-in-from-top duration-300">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-red-700 dark:text-red-300 text-sm">
                    <p>{statusMessage}</p>
                    <button
                      onClick={handleDirectEmail}
                      className="mt-2 text-red-600 dark:text-red-400 underline hover:text-red-800 dark:hover:text-red-300 transition-colors"
                    >
                      Open email client instead
                    </button>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    <Send size={18} className={`group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleDirectEmail}
                    className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                    title="Open in your email client"
                  >
                    <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;