import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">&lt;</span> About Me <span className="text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-2xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate Full Stack Developer with over 2 years of experience building web applications 
                that combine beautiful design with robust functionality.
              </p>
              <p className="text-gray-300 mb-4">
                My journey in tech began with a fascination for how things work online. Fast forward to today, 
                and I've had the privilege of working with startups, agencies, and established companies 
                to create digital products that users love.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or enjoying outdoor activities to refresh my creative thinking.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Problem Solving", value: "Analytical thinking and creative solutions" },
              { label: "UI/UX Design", value: "Creating intuitive and beautiful interfaces" },
              { label: "Backend Development", value: "Building robust and scalable systems" },
              { label: "Frontend Mastery", value: "Crafting responsive and interactive UIs" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-5 rounded-lg hover:border-cyan-500/50 transition-all duration-300 hover:translate-y-[-5px]"
              >
                <h4 className="text-cyan-400 font-bold mb-2">{item.label}</h4>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;