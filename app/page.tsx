// src/App.js
'use client'
import { AnimatedList } from '@/components/magicui/animated-list';
import { Globe } from '@/components/magicui/globe';
import mypic from './mypic.jpg'
import { HyperText } from '@/components/magicui/hyper-text';
import { IconCloud } from '@/components/magicui/icon-cloud';
import { AnimatedSpan, Terminal } from '@/components/magicui/terminal';
import { TextAnimate } from '@/components/magicui/text-animate';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { WordRotate } from '@/components/magicui/word-rotate';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
// import { Globe } from './components/magicui/globe';
import { MdWorkOutline, MdSchool, MdCode, MdDesignServices } from 'react-icons/md';
import { Lens } from '@/components/magicui/lens';
import Image from 'next/image';
import { WarpBackground } from '@/components/magicui/warp-background';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { Meteors } from '@/components/magicui/meteors';
import { NumberTicker } from '@/components/magicui/number-ticker';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <YoutubeSection darkMode={darkMode}/>
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, darkMode, toggleDarkMode }) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`font-medium transition-colors duration-300 ${
                activeSection === link.id 
                  ? 'text-blue-500' 
                  : darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            aria-label="Toggle dark mode"
          >
            <HiOutlineLightBulb className={`w-5 h-5 ${darkMode ? 'text-yellow-300' : 'text-gray-700'}`} />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-4 border-t">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-500 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

const HeroSection = ({ darkMode }) => {
  return (
    
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
     <Meteors number={30}/>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className={`text-sm font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Hello, I'm
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <WordRotate words={["Siddhartha", "Aka SeedArt"]} />
           
          </h1>
          <TypingAnimation className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Senior Frontend Developer
          </TypingAnimation>
          <TextAnimate animation="blurIn" as="h1" className={`text-lg mb-8 max-w-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I create beautiful, responsive web applications with modern technologies. 
            Passionate about clean code and intuitive user experiences.
          </TextAnimate>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className={`px-6 py-3 rounded-lg font-medium border transition-all ${
                darkMode 
                  ? 'border-gray-700 hover:bg-gray-800 text-white' 
                  : 'border-gray-300 hover:bg-gray-100 text-gray-800'
              }`}
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
      <Lens>
      <div className="relative w-[400px] h-[400px] overflow-hidden rounded-xl">
        <Image
          src={mypic}
          alt="Lens Demo"
          fill
          className="object-cover"
        />
      </div>
    </Lens>

            </div>
            <div className={`absolute -bottom-4 -right-4 px-6 py-2 rounded-full font-medium ${
              darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
            }`}>
              5+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
};

const YoutubeSection = ({ darkMode }) => {
  return (
    <section
      id="youtube"
      className={`py-24 px-4 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Reached{" "}
          <span className="inline-block text-blue-600 dark:text-blue-400">
            <NumberTicker
              value={10000}
              className="whitespace-pre-wrap text-5xl font-bold tracking-tight"
            />{" "}
            Views
          </span>{" "}
          Teaching Java OOPs!
        </h2>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
          I simplify complex concepts. My Java OOPs series empowered 10,000+ learners to
          understand Object-Oriented Programming from the ground up.
        </p>

        <div className="">
          <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>

        </div>

        <div className="mt-10">
        
          <InteractiveHoverButton>Subscribe</InteractiveHoverButton>
          
        </div>
      </div>
    </section>


  )
}
const AboutSection = ({ darkMode }) => {
  return (
    
    
    <section id="about" className="py-20">
     
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate frontend developer with over 5 years of experience creating 
              modern web applications. I specialize in React, Vue.js, and building responsive 
              interfaces that delight users.
            </p>
            <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My approach combines technical expertise with a keen eye for design, ensuring 
              that applications are not only functional but also visually appealing and 
              user-friendly.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`flex items-center p-4 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <MdWorkOutline className="text-2xl mr-3 text-blue-500" />
                <div>
                  <div className="font-semibold">Experience</div>
                  <div>5+ Years</div>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <MdDesignServices className="text-2xl mr-3 text-blue-500" />
                <div>
                  <div className="font-semibold">Specialize</div>
                  <div>Frontend Dev</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Education & Experience</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                    <MdSchool className="text-xl text-blue-500" />
                  </div>
                  <div className={`w-0.5 h-full mx-auto ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">MSc Computer Science</h4>
                  <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Stanford University | 2015-2017</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Focused on human-computer interaction and web technologies. Graduated with honors.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                    <MdWorkOutline className="text-xl text-blue-500" />
                  </div>
                  <div className={`w-0.5 h-full mx-auto ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Senior Frontend Developer</h4>
                  <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Tech Innovations Inc. | 2020-Present</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Lead development of customer-facing applications using React and modern web technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                    <MdWorkOutline className="text-xl text-blue-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Frontend Developer</h4>
                  <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Digital Solutions Co. | 2017-2020</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Developed responsive web applications and collaborated with designers on UI/UX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

const SkillsSection = ({ darkMode }) => {
  const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
    "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "sonarqube", "figma",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section
      className={`w-full py-16 px-4 md:px-12 transition-colors duration-300 ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <Meteors number={30}/>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tech Stack & Tools
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
          Here are the technologies and tools I work with regularly.
        </p>
      </div>

      {/* Flex container for IconCloud and Terminal */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Icon Cloud */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center">
          <IconCloud images={images} />
        </div>

        {/* Right: Terminal Section */}
       <div className="w-full md:w-1/2 px-4">
  <Terminal>
    <TypingAnimation>&gt; Initializing backend server...</TypingAnimation>

    <AnimatedSpan delay={1000} className="text-green-500">
      <span>✔ Node.js runtime loaded</span>
    </AnimatedSpan>

    <AnimatedSpan delay={1500} className="text-green-500">
      <span>✔ Express.js server created</span>
    </AnimatedSpan>

    <AnimatedSpan delay={2000} className="text-green-500">
      <span>✔ MongoDB connected using Mongoose</span>
    </AnimatedSpan>

    <AnimatedSpan delay={2500} className="text-green-500">
      <span>✔ REST APIs generated</span>
    </AnimatedSpan>

    <AnimatedSpan delay={3000} className="text-green-500">
      <span>✔ JWT Authentication configured</span>
    </AnimatedSpan>

    <AnimatedSpan delay={3500} className="text-green-500">
      <span>✔ Middlewares: helmet, cors, morgan enabled</span>
    </AnimatedSpan>

    <AnimatedSpan delay={4000} className="text-green-500">
      <span>✔ ENV variables secured via dotenv</span>
    </AnimatedSpan>

    <AnimatedSpan delay={4500} className="text-green-500">
      <span>✔ Nodemon watching for changes</span>
    </AnimatedSpan>

    <AnimatedSpan delay={5000} className="text-green-500">
      <span>✔ Deployed on Render / Railway / Vercel</span>
    </AnimatedSpan>

    <AnimatedSpan delay={5500} className="text-blue-500">
      <span>🚀 Backend is live at:</span>
      <span className="pl-2">https://api.yourdomain.com</span>
    </AnimatedSpan>

    <AnimatedSpan delay={6000} className="text-yellow-400">
      <span>🛠 Stack: Node.js · Express.js · MongoDB · JWT · REST · Docker</span>
    </AnimatedSpan>
  </Terminal>
</div>

      </div>
    </section>
  );
};


const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce analytics with real-time data visualization.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
      category: 'web'
    },
    {
      title: 'Health & Fitness App',
      description: 'Mobile-first application for tracking workouts, nutrition, and health metrics.',
      technologies: ['Vue.js', 'Firebase', 'PWA', 'Chart.js'],
      category: 'mobile'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with drag-and-drop interface and real-time updates.',
      technologies: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
      category: 'web'
    },
    {
      title: 'Travel Planning Platform',
      description: 'Interactive platform for creating and sharing travel itineraries with map integration.',
      technologies: ['Next.js', 'Mapbox', 'Stripe', 'PostgreSQL'],
      category: 'web'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-6 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my recent projects. Each project reflects my passion for creating 
            intuitive, high-performance web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.category === 'mobile' 
                      ? darkMode 
                        ? 'bg-purple-900 text-purple-200' 
                        : 'bg-purple-100 text-purple-800'
                      : darkMode 
                        ? 'bg-blue-900 text-blue-200' 
                        : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.category === 'mobile' ? 'Mobile' : 'Web'}
                  </span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className={`px-4 py-2 rounded-lg font-medium ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}>
                    View Project
                  </button>
                  <button className={`px-4 py-2 rounded-lg font-medium border ${
                    darkMode 
                      ? 'border-gray-700 hover:bg-gray-700 text-white' 
                      : 'border-gray-300 hover:bg-gray-100 text-gray-800'
                  }`}>
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div
            className={`w-20 h-1 mx-auto ${
              darkMode ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p
            className={`mt-6 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me using the form or contact details
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <div
              className={`p-8 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                {/* Portfolio */}
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      darkMode ? "bg-blue-900" : "bg-blue-100"
                    }`}
                  >
                    
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Portfolio</h4>
                    <a
                      href="https://alexportfolio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      alexportfolio.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      darkMode ? "bg-blue-900" : "bg-blue-100"
                    }`}
                  >
                    <FaLinkedin className="text-xl text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/alexjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      linkedin.com/in/alexjohnson
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      darkMode ? "bg-blue-900" : "bg-blue-100"
                    }`}
                  >
                    <FaGithub className="text-xl text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">GitHub</h4>
                    <a
                      href="https://github.com/alexjohnson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      github.com/alexjohnson
                    </a>
                  </div>
                </div>

                {/* Twitter */}
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      darkMode ? "bg-blue-900" : "bg-blue-100"
                    }`}
                  >
                    <FaTwitter className="text-xl text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Twitter</h4>
                    <a
                      href="https://twitter.com/alex_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      @alex_dev
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div
                className={`mt-12 pt-8 border-t ${
                  darkMode ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <h4 className="font-bold text-lg mb-4">Location</h4>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  San Francisco, California
                  <br />
                  Available for remote work & freelance projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Globe Animation */}
         <div className="flex justify-center items-center">
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] transform scale-[1.05] sm:scale-110">
    <Globe />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="mt-2 text-gray-400">
              Creating beautiful digital experiences
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 text-center text-gray-400 border-t ${
          darkMode ? 'border-gray-800' : 'border-gray-700'
        }`}>
          <p>© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          <p className="mt-2">Designed and built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default App;