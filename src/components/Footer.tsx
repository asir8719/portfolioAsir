import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Github: <Github className="w-5 h-5" />,
    Linkedin: <Linkedin className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />,
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-cyan-400 font-bold text-2xl mb-2">
              &lt;dev/&gt;
            </div>
            <p className="text-gray-400 max-w-md">
              Creating elegant, efficient, and exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
                aria-label={link.platform}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="mt-2">Designed and built with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;