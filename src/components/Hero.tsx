import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const phrases = ["Full Stack Developer.", "UI/UX Designer.", "Problem Solver.", "Tech Enthusiast."];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseEnd = 1500;
    
    function typeText() {
      const text = phrases[currentPhrase];
      
      if (isDeleting) {
        currentChar--;
        typingSpeed = 50;
      } else {
        currentChar++;
        typingSpeed = 100;
      }
      
      if (textRef.current) {
        textRef.current.innerText = text.substring(0, currentChar);
      }
      
      if (!isDeleting && currentChar === text.length) {
        isDeleting = true;
        typingSpeed = pauseEnd;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }
      
      setTimeout(typeText, typingSpeed);
    }
    
    typeText();
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-cyan-500/20"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
            <h3 className="text-cyan-400 text-xl font-medium">Hello, I'm</h3>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Name
            </h1>
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-4">
                <span className="text-cyan-400">I'm a </span>
                <span ref={textRef} className="relative inline-block after:content-['|'] after:ml-1 after:animate-blink after:text-cyan-400"></span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-xl">
              Crafting beautiful digital experiences with clean code and intuitive design.
              Specialized in building modern web applications that solve real-world problems.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;