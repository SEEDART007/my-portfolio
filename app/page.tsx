// src/App.js
'use client'
import { AnimatedList } from '@/components/magicui/animated-list';
import { Globe } from '@/components/magicui/globe';
import mypic from './mypic.jpg'
import dupamine from './dupamine.png'
import { HyperText } from '@/components/magicui/hyper-text';
import { IconCloud } from '@/components/magicui/icon-cloud';
import { AnimatedSpan, Terminal } from '@/components/magicui/terminal';
import imdb from './db.png'
import { TextAnimate } from '@/components/magicui/text-animate';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { WordRotate } from '@/components/magicui/word-rotate';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import neuro from './neuro.png'
import game from './game.png'
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
import { BorderBeam } from '@/components/magicui/border-beam';

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
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, activeSection, darkMode, toggleDarkMode }) => {
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
          SeedArt
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
interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> =({ darkMode }) => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <Meteors number={30} />
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className={`text-sm font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Hello, I'm
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <WordRotate words={["Siddhartha", "Aka SeedArt"]} />
          </h1>

          <TypingAnimation className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
           Backend Systems Engineer
          </TypingAnimation>

          <TextAnimate animation="blurIn" as="h1" className={`text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          While others see buttons and pages, I engineer the logic beneath — making sure every click tells the server exactly what to do.
          </TextAnimate>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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
              <div>

              View Projects
        
              </div>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className={`relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <Lens>
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src={mypic}
                    alt="Lens Demo"
                    
                    height={400}
                    width={400}
                    className="object-cover"
                  />
                </div>
              </Lens>
            </div>

            {/* <div className={`block -bottom-4 right-0 sm:right-4 px-6 py-2 rounded-full font-medium text-sm sm:text-base shadow-lg ${
              darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
              }`}>
              5+ Years Experience
              </div> */}
          
           
          </div>
        </div>

      </div>
    </section>
  );
};
interface YoutubeSectionProps {
  darkMode: boolean;
}
const YoutubeSection: React.FC<YoutubeSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="youtube"
      className={`py-16 md:py-24 px-4 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Reached{" "}
          <span className="inline-block text-blue-600 dark:text-blue-400">
            <NumberTicker
              value={10000}
              className="text-blue-600 whitespace-pre-wrap text-4xl sm:text-5xl font-bold tracking-tight"
            />{" "}
            Views
          </span>{" "}
          Teaching Java OOPs!
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          I simplify complex concepts. My Java OOPs series empowered 10,000+ learners to
          understand Object-Oriented Programming from the ground up.
        </p>

        {/* Responsive video container */}
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            {/* Light mode video */}
            <HeroVideoDialog
              className="block dark:hidden w-full h-full"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/vN4m3cz-q5w?si=JIobver04wyWwhDB"
              thumbnailSrc="https://img.youtube.com/vi/vN4m3cz-q5w/maxresdefault.jpg"
              thumbnailAlt="Hero Video"
            />
            {/* Dark mode video */}
            <HeroVideoDialog
              className="hidden dark:block w-full h-full"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/vN4m3cz-q5w?si=JIobver04wyWwhDB"
              thumbnailSrc="https://img.youtube.com/vi/vN4m3cz-q5w/maxresdefault.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>

        {/* Subscribe Button */}
       <div className="mt-10 text-black">
  <InteractiveHoverButton onClick={() => window.open('http://www.youtube.com/@SeedArt007', '_blank')}>
    Subscribe
  </InteractiveHoverButton>
</div>

      </div>
    </section>
  );
};
interface AboutSection{
  darkMode:boolean
}
const AboutSection: React.FC<YoutubeSectionProps> = ({ darkMode }) => {
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
           Backend Specialist Currently focused on backend development, building scalable APIs, and optimizing database performance 💻.
            </p>
            <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate about crafting seamless user experiences, I’ve built full-stack applications where the frontend truly shines — blending responsive design, intuitive UI, and dynamic interactivity. With hands-on experience in React, Next.js, and modern design systems, I turn ideas into polished, user-friendly interfaces that leave a lasting impression.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`flex items-center p-4 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <MdWorkOutline className="text-2xl mr-3 text-blue-500" />
                <div>
                  <div className="font-semibold">Experience</div>
                  <div>2+ Years</div>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <MdDesignServices className="text-2xl mr-3 text-blue-500" />
                <div>
                  <div className="font-semibold">Specialize</div>
                  <div>Backend Dev</div>
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
                  <h4 className="font-bold text-lg">B.Tech Computer Science</h4>
                  <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>KIIT University | 2023-2027</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Focused on backend dev with specialized approach
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
                  <h4 className="font-bold text-lg">CTO | Founder</h4>
                  <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pukaar | 2025-Present</p>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Empowering women through code – Pukaar is not just an app, it's a digital shield.
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
                <h4 className="font-bold text-lg">Web Developer</h4>
<p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Konnexions, KIIT Web Dev Society | 1st Year</p>
<p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
  Selected as member in my first year; collaborated on real-world web projects and enhanced my frontend development skills through team-based initiatives.
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
interface SkillsSection{
  darkMode:boolean
}

const SkillsSection : React.FC<YoutubeSectionProps> = ({ darkMode }) => {
  const slugs = [
    "typescript", "javascript", "java", "react", "android",
    "html5", "css3", "express",
     "firebase", "nginx", "vercel",
     "docker", "git", "github", "gitlab", "visualstudiocode",
    "androidstudio", "figma","postman","jwt","nextjs","nodejs","mongodb","redis","vite","c","tailwindcss"
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
    <TypingAnimation className='text-black'>&gt; Initializing backend server...</TypingAnimation>

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

interface ProjectsSection{
  darkMode:boolean
}
const ProjectsSection : React.FC<YoutubeSectionProps> =({ darkMode }) => {
  const projects = [
  {
    title: 'Dupamin',
    description: 'This interactive tool lets you explore emojis in a fun way.',
    technologies: ['React', 'Javascript'],
    category: 'npm package',
    image: dupamine,
    liveUrl: 'https://dupamin-website.vercel.app/',
    codeUrl: 'https://github.com/SEEDART007/dupamin'
  },
  {
    title: 'NeuroBeats',
    description: 'an AI-powered emotion-based music recommender. Just type how you feel, and NeuroBeats will analyze your emotion and generate a custom playlist that matches your mood.',
    technologies: ['AI', 'Nextjs', 'Tailwind Css'],
    category: 'Web',
    image: neuro,
    liveUrl: 'https://neuro-beats.vercel.app/',
    codeUrl: 'https://github.com/SEEDART007/NeuroBeats'
  },
   {
    title: 'Exam Mania',
    description: 'A game using kaplay lib to dodge the exams, chase your dreams! Navigate through obstacles and keep your goals alive!',
    technologies: ['Javascript', 'Kaplayjs'],
    category: 'Web',
    image: game,
    liveUrl: 'https://seedart007.itch.io/exam-mania-india',
    codeUrl: 'https://github.com/SEEDART007/kaplay-game-js'
  },
   {
    title: 'IMDB',
    description: 'A IMDB clone which will find real time movies for you.',
    technologies: ['Nextjs', 'Tailwind CSS'],
    category: 'Web',
    image: imdb,
    liveUrl: 'https://im-db-clone-kexsiidr7-seedarts-projects.vercel.app/',
    codeUrl: 'https://github.com/SEEDART007/IMDb-Clone'
  },
];


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className={`w-20 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-6 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            These are some of my featured works that reflect my dedication to crafting impactful digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Project Image */}
      <Image
  src={project.image}
  alt={project.title}
  width={600}
  height={300}
  className="w-full h-52 object-cover rounded-t-2xl"
/>

              <div className="p-6">
                {/* Title & Category */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                    project.category === 'mobile'
                      ? darkMode
                        ? 'bg-purple-900 text-purple-200'
                        : 'bg-purple-100 text-purple-800'
                      : project.category === 'npm package'
                      ? darkMode
                        ? 'bg-green-900 text-green-200'
                        : 'bg-green-100 text-green-800'
                      : darkMode
                        ? 'bg-blue-900 text-blue-200'
                        : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Technologies */}
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

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg font-medium border transition-colors ${
                        darkMode
                          ? 'border-gray-700 hover:bg-gray-700 text-white'
                          : 'border-gray-300 hover:bg-gray-100 text-gray-800'
                      }`}
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
interface ContactSection{
  darkMode:boolean
}

const ContactSection : React.FC<ContactSection> =({ darkMode }) => {
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
                      href="https://linkedin.com/in/siddhartha-chakraborty-680a58281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      LinkedIn
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
                      href="https://github.com/SEEDART007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        darkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      GitHub
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
                  Bhubaneshwar, India
                  <br />
                  Available for cool projects & futuristic ideas
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

const Footer : React.FC<YoutubeSectionProps> = ({ darkMode }) => {
  return (
    <footer className={`py-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          SeedArt's World
        </div>

        <div className="flex justify-center space-x-5 mb-4">
          <a href="https://github.com/SEEDART007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/siddhartha-chakraborty-680a58281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin className="w-5 h-5" />
          </a>
         
          <a href="mailto:dashranger60@gmail.com" className="text-gray-400 hover:text-white">
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
export default App;