import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const bar = entry.target as HTMLDivElement;
            const width = bar.getAttribute('data-width');
            if (width) {
              bar.style.width = `${width}%`;
              bar.style.opacity = '1';
            }
          }, 200);
        }
      });
    }, { threshold: 0.1 });
    
    skillBarsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });
    
    return () => {
      skillBarsRef.current.forEach(bar => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-950 relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">&lt;</span> Skills <span className="text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300">
            My technical toolkit encompasses a wide range of technologies for building modern web applications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {SKILLS.map((skill, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  ref={el => skillBarsRef.current[index] = el}
                  className="h-full rounded-full transition-all duration-1000 ease-out opacity-0"
                  style={{ 
                    width: "0%", 
                    backgroundColor: skill.color || '#00FFFF'
                  }}
                  data-width={skill.level}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git", "Docker", "RESTful APIs", "Redux", 
              "SASS", "GraphQL", "CI/CD", "Jest", 
              "AWS", "Firebase", "Figma", "Responsive Design"
            ].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;