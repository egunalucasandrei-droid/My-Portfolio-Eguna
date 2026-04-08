import React, { useState, useEffect, useRef } from 'react';
import cert1 from './images/Introduction to Network Defense certificate.png';
import cert2 from './images/Introduction to Networks Certificate.png';
import cert3 from './images/HTML certificate.png';
import figma1 from './images/Figma1.png';
import figma2 from './images/figma2.png';
import figma3 from './images/figma3.png';
import figma4 from './images/figma4.png';
import nike1 from './images/NIKE1.png';
import aiChat from './images/AI Chat.png';
import Vitality from './images/Vitality.png';
import rog from './images/ROG.png';
import film1 from './images/film1.png';
import film7 from './images/film7.jpg';
import film6 from './images/film6.png';
import film3 from './images/film3.png';
import film2 from './images/film2.png';
import film4 from './images/film4.png';
import film5 from './images/Film5.png';
import profileImg from './images/profile-removebg-preview.png';
import resumeDoc from './images/My Resume - Eguna.png';

const certifications = [
  { title: "Introduction to Network Defense", issuer: "Cisco", image: cert1 },
  { title: "Introduction to Networks", issuer: "Cisco", image: cert2 },
  { title: "HTML Developer", issuer: "W3schools", image: cert3 },
];

const projects = [
  { category: "uiux", title: "Fit Tracker", desc: "Modern Figma UI design focusing on clean user experience for fitness tracking.", img: figma1, fallback: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?auto=format&fit=crop&q=80&w=800", link: "https://www.figma.com/proto/d97Fr5Pdx8UFmAHHVpwVXv/FINAL-PROJECT?node-id=52-105&starting-point-node-id=52%3A105&t=QsXVjRp6wbDnW84U-1", linkText: "View Design" },
  { category: "uiux", title: "Rise Fit", desc: "Intuitive mobile interface designed in Figma for health enthusiasts.", img: figma2, fallback: "https://images.unsplash.com/photo-1526506114642-54bc55e2d56a?auto=format&fit=crop&q=80&w=800", link: "https://www.figma.com/proto/GfaYaASRaaXXHHvDMdbAqc/final-project?node-id=1-2", linkText: "View Design" },
  { category: "uiux", title: "Shape Your Body", desc: "A structured and visually appealing fitness application prototype.", img: figma3, fallback: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800", link: "https://www.figma.com/proto/UbQv3hR8SUTIilNiI2o8XW/Final-Project?node-id=21-32", linkText: "View Design" },
  { category: "uiux", title: "Health Tracker", desc: "Comprehensive health monitoring dashboard UI crafted with minimalism.", img: figma4, fallback: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800", link: "https://www.figma.com/proto/PkBZ1D9v60sZGZbBe9jpoA/HEALTH-TRACKER?node-id=60-48", linkText: "View Design" },
  { category: "web", title: "NIKE Mockup", desc: "A Nike-inspired front-end project I built to explore modern UI design and responsive layouts. Focused on creating a clean, visually engaging interface while practicing component-based development using React and Tailwind CSS.", img: nike1, fallback: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800", link: "https://egunalucasandrei-droid.github.io/NIKE-WEBSITE/", linkText: "Visit Site" },
  { category: "web", title: "AI Chat", desc: "An AI-powered chat application I built to deliver fast and seamless conversations. It uses a separate backend for API security and a clean, responsive frontend for a smooth user experience.", img: aiChat, fallback: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800", link: "https://ai-chat-snowy-mu.vercel.app", linkText: "Visit Site" },
  { category: "web", title: "Vitality Tracker", desc: "A vitality tracking application I built to monitor and manage health data, focusing on performance, structure, and a smooth user experience across platforms.", img: Vitality, fallback: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=800", link: "https://egunalucasandrei-droid.github.io/Vitality-Health-Tracker/", linkText: "Visit Site" },
  { category: "web", title: "ROGSTRIX mockup", desc: "A ROG Strix–inspired design project focused on creating a bold and futuristic interface. Built to explore modern UI styling, layout composition, and visually striking design elements.", img: rog, fallback: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=800", link: "https://egunalucasandrei-droid.github.io/ROG-WEBSITE/", linkText: "Visit Site" },
  { category: "video", title: "She's Dating The Gangster (Trailer)", desc: "Creative storytelling and high-impact editing for a cinematic trailer.", img: film1, fallback: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", link: "https://youtu.be/CrDVxN9pC1A?si=R42Hjhf-Se8hM5Xc", linkText: "Watch Video", isVideo: true },
  { category: "video", title: "She's Dating The Gangster (Short Film)", desc: "Detailed recreation showcasing cinematography and editing skills.", img: film7, fallback: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800", link: "https://youtu.be/60wxaOO0sbg?si=AIzBobI2oPGjK-dw", linkText: "Watch Video", isVideo: true },
  { category: "video", title: "Motivational Short Video", desc: "Short-form vertical editing focused on high audience retention.", img: film6, fallback: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800", link: "https://www.tiktok.com/@thryvnova.daily/video/7619230287410531591?is_from_webapp=1&sender_device=pc&web_id=7593043247263843847", linkText: "Watch Video", isVideo: true },
  { category: "video", title: "The Gregorio Del Pilar", desc: "A compelling promotional video piece featuring smooth, modern transitions.", img: film3, fallback: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800", link: "https://youtu.be/ObcIEb3hynQ?si=c6ynr6bSnlOTqamN", linkText: "Watch Video", isVideo: true },
  { category: "video", title: "New Yorker In Tondo", desc: "Narrative-driven film editing applying professional pacing techniques.", img: film2, fallback: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", link: "https://youtu.be/YmoOnQ50ItM?si=NTKSCkPSEhaoNgtk", linkText: "Watch Video", isVideo: true },
  { category: "video", title: "Indian Royal Spice Restaurant", desc: "High-energy commercial edit designed to captivate and promote.", img: film4, fallback: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800", link: "https://youtu.be/9BkI-9_kDJw?si=59RznqLHBsBpB0Eh", linkText: "Watch Video", isVideo: true },
  { category: "video", title: "Wealth Habits", desc: "Informative and engaging motivational edit tailored for social platforms.", img: film5, fallback: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800", link: "https://youtu.be/WAbr7hQvYUU?si=t3Z-6RbWFNilH9BD", linkText: "Watch Video", isVideo: true },
];

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :root, [data-theme="dark"] {
        --bg-color: #000000;
        --card-bg: #0a0a0a;
        --text-main: #f4f4f5;
        --text-muted: #a1a1aa;
        --border: #27272a;
        --accent: #ffffff;
        --accent-text: #000000;
        --hover-bg: #18181b;
        --nav-bg: rgba(0, 0, 0, 0.8);
        --img-glow: rgba(255, 255, 255, 0.05);
        --shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        --transition: 0.3s ease;
        --profile-bg: #18181b;
    }

    [data-theme="light"] {
        --bg-color: #fafafa;
        --card-bg: #ffffff;
        --text-main: #111827;
        --text-muted: #6b7280;
        --border: #e5e7eb;
        --accent: #000000;
        --accent-text: #ffffff;
        --hover-bg: #f3f4f6;
        --nav-bg: rgba(250, 250, 250, 0.8);
        --img-glow: rgba(0, 0, 0, 0.05);
        --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        --profile-bg: #e5e7eb;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background-color: var(--bg-color);
        color: var(--text-main);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color var(--transition), color var(--transition);
        margin: 0;
    }

    /* Subtle Fade Animation */
    .fade-up {
        opacity: 0;
        transform: translateY(15px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .fade-up.visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Complex Hover Effects */
    .tech-badge {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
    }
    .tech-badge:hover {
        transform: translateY(-3px);
        background-color: var(--card-bg) !important;
        border-color: var(--text-muted) !important;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }
    .tech-badge:hover img, .tech-badge:hover svg {
        transform: scale(1.15);
    }
    [data-theme="dark"] .tech-badge:hover {
        box-shadow: 0 6px 16px rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.25) !important;
    }
    [data-theme="dark"] .theme-invert {
        filter: invert(1) brightness(2);
    }

    /* Outline Button override */
    .outline-btn:hover {
        opacity: 1 !important;
        background: var(--hover-bg);
        border-color: var(--text-muted);
        transform: translateY(-2px);
    }

    /* Cert Card flat border handling */
    .cert-card { border: 1px solid transparent; }
    [data-theme="light"] .cert-card { border: 1px solid var(--border); }
    .cert-card:hover { border-color: var(--border) !important; background: var(--hover-bg) !important; }
  `}} />
);

export default function App() {
  const getInitialTheme = () => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [certVisible, setCertVisible] = useState(false);
  
  // Controls the Projects view toggle (Recent vs All)
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch (e) {
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => setModalImg(''), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Certifications View All
  const handleViewAllCerts = () => {
    setShowAllCerts(true);
    setTimeout(() => setCertVisible(true), 10);
  };

  const handleBackToHome = () => {
    setCertVisible(false);
    setShowAllCerts(false);
    document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div data-theme={theme} className="min-h-screen w-full bg-(--bg-color) text-(--text-main) transition-colors duration-300">
      <GlobalStyles />

      {/* STICKY NAVBAR */}
      <header className="fixed top-0 w-full z-1000 bg-(--nav-bg) backdrop-blur-md border-b border-(--border) transition-colors duration-300">
        <div className="w-full max-w-212.5 mx-auto px-6 flex justify-between items-center h-17.5">
          <a href="#" className="font-bold text-[1.1rem] tracking-[-0.03em] text-(--text-main) transition-colors duration-300">Lucas Eguna</a>
          <div className="flex items-center gap-10">
            <ul className="hidden md:flex gap-10 list-none m-0 p-0">
              <li><a href="#about" className="text-[0.875rem] font-medium text-(--text-muted) hover:text-(--text-main) transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-[0.875rem] font-medium text-(--text-muted) hover:text-(--text-main) transition-colors duration-300">Skills</a></li>
              <li><a href="#experience" className="text-[0.875rem] font-medium text-(--text-muted) hover:text-(--text-main) transition-colors duration-300">Experience</a></li>
              <li><a href="#education" className="text-[0.875rem] font-medium text-(--text-muted) hover:text-(--text-main) transition-colors duration-300">Education</a></li>
              <li><a href="#certifications" className="text-[0.875rem] font-medium text-(--text-muted) hover:text-(--text-main) transition-colors duration-300">Certifications</a></li>
              <li><a href="#projects" className="text-[0.875rem] font-medium text-(--text-muted) hover:text-(--text-main) transition-colors duration-300">Work</a></li>
              <li><a href="#contact" className="text-[0.875rem] font-medium text-(--text-muted) hover:text-(--text-main) transition-colors duration-300">Contact</a></li>
            </ul>
            
            <button onClick={toggleTheme} aria-label="Toggle Theme" className="bg-transparent border-none cursor-pointer text-(--text-muted) hover:text-(--text-main) flex items-center justify-center transition-colors duration-300 p-1">
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 block">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 block">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="pt-40 pb-24 min-h-auto border-b-0">
        <div className="w-full max-w-212.5 mx-auto px-6 fade-up">
          <div className="bg-(--card-bg) border border-(--border) rounded-2xl p-8 md:p-12 shadow-(--shadow) transition-all duration-300">
            <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] gap-8 md:gap-14 items-start">
              
              <div className="w-full max-w-50 md:max-w-full mx-auto aspect-square rounded-xl overflow-hidden border border-(--border) shadow-[0_0_30px_var(--img-glow)] bg-(--profile-bg) transition-all duration-300">
                <img src={profileImg} alt="Lucas Eguna" className="w-full h-full object-cover bg-transparent" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400'; }} />
              </div>

              <div>
                <div className="mb-8 pb-6 md:pb-8 border-b border-(--border) transition-colors duration-300 text-center md:text-left">
                  <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-extrabold tracking-[-0.04em] leading-[1.1] mb-2 text-(--text-main) flex items-center justify-center md:justify-start gap-2">
                    Lucas Eguna 
                    <svg className="w-6.5 h-6.5 shrink-0 mt-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Verified">
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#1d9bf0"/>
                        <path d="M10 15.172l-3.536-3.536 1.414-1.414L10 12.344l5.656-5.656 1.414 1.414L10 15.172z" fill="#ffffff"/>
                    </svg>
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[0.95rem] text-(--text-main) mb-6 font-medium">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-(--text-muted)"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Metro Manila, Philippines
                  </div>
                  <p className="text-[1.05rem] text-(--text-main) font-semibold tracking-[-0.01em] mb-6">UI/UX Designer \ Full Stack Developer \ Video Editor</p>
                  
                  <div className="flex gap-6 flex-wrap items-center justify-center md:justify-start">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=egunalucasandrei@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-(--text-main) text-[0.95rem] font-semibold transition-opacity duration-300 hover:opacity-70">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Send Email
                    </a>
                    <a href={resumeDoc} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-(--text-main) text-[0.95rem] font-semibold transition-opacity duration-300 outline-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      View Resume
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-(--text-main) mb-5 tracking-[-0.02em]">About</h2>
                  <div className="space-y-5 text-[1rem] text-(--text-muted) leading-[1.7]">
                    <p>I’m a full-stack developer, UI/UX designer, and video editor currently studying BSIT specializing in Cybersecurity.</p>
                    <p>I build modern, responsive web applications using React, Node.js, and Firebase, while also creating engaging visual content through video editing.</p>
                    <p>I have experience in frontend development, freelance work, and social media content creation, including building projects like a Vitality Health Tracker.</p>
                    <p>Currently focused on improving backend systems and building scalable applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="skills" className="py-32 border-b border-(--border) transition-colors duration-300">
        <div className="w-full max-w-212.5 mx-auto px-6 fade-up">
          <h2 className="text-[1.75rem] font-bold tracking-[-0.04em] mb-12 text-(--text-main)">Expertise</h2>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-16 gap-x-8">
            <div>
              <h3 className="text-[0.85rem] uppercase tracking-[0.08em] text-(--text-muted) mb-6 font-semibold">Design & Creative</h3>
              <ul className="flex flex-col gap-5 m-0 p-0">
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">UI/UX Design</li>
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">Video Editing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[0.85rem] uppercase tracking-[0.08em] text-(--text-muted) mb-6 font-semibold">Technical</h3>
              <ul className="flex flex-col gap-5 m-0 p-0">
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">Frontend Development</li>
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">Basic Backend Development</li>
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">Database Management</li>
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">API Integration</li>
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">Version Control</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[0.85rem] uppercase tracking-[0.08em] text-(--text-muted) mb-6 font-semibold">Content & Strategy</h3>
              <ul className="flex flex-col gap-5 m-0 p-0">
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">Social Media Management</li>
                <li className="text-(--text-main) text-[1.05rem] font-medium tracking-[-0.01em]">Video Editing (CapCut)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack" className="py-32 border-b border-(--border) transition-colors duration-300">
        <div className="w-full max-w-212.5 mx-auto px-6 fade-up">
          <div className="bg-(--card-bg) border border-(--border) rounded-2xl p-8 md:p-12 shadow-(--shadow) transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-(--text-main) mb-8 tracking-[-0.02em]">Tech Stack</h2>
            
            <div className="mb-8 last:mb-0">
              <h3 className="text-[1.05rem] font-bold text-(--text-main) mb-4 tracking-[-0.01em]">Frontend</h3>
              <ul className="flex flex-wrap gap-3 m-0 p-0 mt-2 list-none">
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="w-5 h-5 object-contain" />
                  <span>HTML</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="w-5 h-5 object-contain" />
                  <span>CSS</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 object-contain" />
                  <span>JavaScript</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-5 h-5 object-contain" />
                  <span>React</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-5 h-5 object-contain" />
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div className="mb-8 last:mb-0">
              <h3 className="text-[1.05rem] font-bold text-(--text-main) mb-4 tracking-[-0.01em]">Backend</h3>
              <ul className="flex flex-wrap gap-3 m-0 p-0 mt-2 list-none">
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5 object-contain" />
                  <span>Node.js</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express.js" className="theme-invert w-5 h-5 object-contain" />
                  <span>Express.js</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" className="w-5 h-5 object-contain" />
                  <span>Firebase</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8 last:mb-0">
              <h3 className="text-[1.05rem] font-bold text-(--text-main) mb-4 tracking-[-0.01em]">Database</h3>
              <ul className="flex flex-wrap gap-3 m-0 p-0 mt-2 list-none">
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5 object-contain" />
                  <span>MongoDB</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" className="w-5 h-5 object-contain" />
                  <span>Firebase</span>
                </li>
              </ul>
            </div>

            <div className="mb-8 last:mb-0">
              <h3 className="text-[1.05rem] font-bold text-(--text-main) mb-4 tracking-[-0.01em]">Tools</h3>
              <ul className="flex flex-wrap gap-3 m-0 p-0 mt-2 list-none">
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="theme-invert w-5 h-5 object-contain" />
                  <span>GitHub</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5 object-contain" />
                  <span>VS Code</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt="Netlify" className="w-5 h-5 object-contain" />
                  <span>Netlify</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" className="theme-invert w-5 h-5 object-contain" />
                  <span>Vercel</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-5 h-5 object-contain" />
                  <span>Vite</span>
                </li>
              </ul>
            </div>

            <div className="mb-0">
              <h3 className="text-[1.05rem] font-bold text-(--text-main) mb-4 tracking-[-0.01em]">Design</h3>
              <ul className="flex flex-wrap gap-3 m-0 p-0 mt-2 list-none">
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <svg className="w-5 h-5 object-contain transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5S3 16 3 9a9 9 0 0 1 18 0c0 7-9 11.5-9 11.5z"></path></svg>
                  <span>UI/UX Design</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-5 h-5 object-contain" />
                  <span>Figma</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="w-5 h-5 object-contain" />
                  <span>Canva</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Adobe Photoshop" className="w-5 h-5 object-contain" />
                  <span>Adobe Photoshop</span>
                </li>
                <li className="tech-badge inline-flex items-center gap-2.5 px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main) cursor-default">
                  <svg className="w-5 h-5 object-contain transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                  <span>CapCut</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="py-32 border-b border-(--border) transition-colors duration-300">
        <div className="w-full max-w-212.5 mx-auto px-6 fade-up">
          <div className="bg-(--card-bg) border border-(--border) rounded-2xl p-8 md:p-12 shadow-(--shadow) transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-(--text-main) mb-8 tracking-[-0.02em]">Work Experience</h2>

            <div className="mb-10 pb-10 border-b border-(--border)">
              <h3 className="text-[1.15rem] mb-2 font-bold text-(--text-main) tracking-[-0.01em]">Freelance Frontend Developer & Video Editor</h3>
              <div>
                <p className="text-(--text-muted) font-medium text-[0.95rem] mb-5">2024 – Present</p>
                <p className="mb-6 text-(--text-muted) text-[0.95rem] leading-normal">
                  - Develop responsive and modern websites using HTML, CSS, JavaScript, and React<br/>
                  - Built and deployed projects such as a Vitality Health Tracker web application<br/>
                  - Focused on clean UI/UX, performance, and user-centered design<br/>
                  - Create short-form and promotional video content using CapCut and editing tools<br/>
                  - Work with clients to deliver engaging digital content and websites
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 m-0 p-0 list-none">
                <li className="tech-badge inline-flex items-center px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main)"><span>HTML</span></li>
                <li className="tech-badge inline-flex items-center px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main)"><span>CSS</span></li>
                <li className="tech-badge inline-flex items-center px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main)"><span>JavaScript</span></li>
                <li className="tech-badge inline-flex items-center px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main)"><span>React</span></li>
                <li className="tech-badge inline-flex items-center px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main)"><span>Video Editing</span></li>
                <li className="tech-badge inline-flex items-center px-4 py-2 bg-(--hover-bg) border border-(--border) rounded-full text-[0.95rem] font-medium text-(--text-main)"><span>UI/UX</span></li>
              </ul>
            </div>

            <div className="mb-0">
              <h3 className="text-[1.15rem] mb-2 font-bold text-(--text-main) tracking-[-0.01em]">The Royal Indian Spice Restaurant</h3>
              <div>
                <p className="text-(--text-muted) font-medium text-[0.95rem] mb-5">
                  Part-time | Quezon City, Philippines | August 2024 – November 2024
                </p>
                <p className="mb-0 text-(--text-muted) text-[0.95rem] leading-normal">
                  - Created promotional video content for marketing campaigns<br/>
                  - Managed social media platforms (Facebook, Instagram, TikTok)<br/>
                  - Handled content creation and scheduling<br/>
                  - Ran Facebook Ads and TikTok campaigns<br/>
                  - Engaged with audience (comments and messages)<br/>
                  - Edited short-form videos using CapCut<br/>
                  - Designed graphics using Canva and Photoshop
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-32 border-b border-(--border) transition-colors duration-300">
        <div className="w-full max-w-212.5 mx-auto px-6 fade-up">
          <div className="bg-(--card-bg) border border-(--border) rounded-2xl p-8 md:p-12 shadow-(--shadow) transition-all duration-300">
            <h2 className="text-2xl font-extrabold text-(--text-main) mb-8 tracking-[-0.02em]">Education</h2>

            <div className="mb-10 pb-10 border-b border-(--border)">
              <h3 className="text-[1.15rem] mb-2 font-bold text-(--text-main) tracking-[-0.01em]">Bachelor of Science in Information Technology (Specialization in Cybersecurity)</h3>
              <div>
                <p className="text-(--text-muted) font-medium text-[0.95rem] mb-0">
                  Far Eastern University Diliman | Quezon City, Philippines | 2024 – Present (3rd Year College)
                </p>
              </div>
            </div>

            <div className="mb-10 pb-10 border-b border-(--border)">
              <h3 className="text-[1.15rem] mb-2 font-bold text-(--text-main) tracking-[-0.01em]">General Academic Strand (With Honors)</h3>
              <div>
                <p className="text-(--text-muted) font-medium text-[0.95rem] mb-0">
                  Kings’ Montessori School | 2020 – 2024
                </p>
              </div>
            </div>

            <div className="mb-0">
              <h3 className="text-[1.15rem] mb-2 font-bold text-(--text-main) tracking-[-0.01em]">High School (With Honors)</h3>
              <div>
                <p className="text-(--text-muted) font-medium text-[0.95rem] mb-0">
                  San Bartolome High School | 2016 – 2020
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="py-32 border-b border-(--border) transition-colors duration-300">
        <div className="w-full max-w-212.5 mx-auto px-6 fade-up">
          <div className="bg-(--card-bg) border border-(--border) rounded-2xl p-8 md:p-12 shadow-(--shadow) transition-all duration-300">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleBackToHome}
                  className={`bg-transparent border-none text-(--text-main) text-[1rem] font-medium cursor-pointer flex items-center gap-2 transition-colors duration-300 hover:text-(--text-muted) ${showAllCerts ? 'flex' : 'hidden'}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back to Home
                </button>
                <h2 className="text-2xl font-extrabold text-(--text-main) mb-0 tracking-[-0.02em]">{showAllCerts ? "All Certifications" : "Recent Certifications"}</h2>
              </div>
              {!showAllCerts && (
                <button 
                  onClick={handleViewAllCerts}
                  className="bg-transparent border-none text-(--text-main) text-[0.95rem] font-semibold cursor-pointer inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-(--text-muted) group"
                >
                  View All
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}
            </div>
            
            <div className={`grid gap-4 ${showAllCerts ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {certifications.map((cert, index) => {
                const isHidden = !showAllCerts && index >= 4;
                return (
                  <div 
                    key={index} 
                    className="cert-card flex flex-col cursor-pointer bg-(--card-bg) p-6 rounded transition-colors duration-300"
                    style={{
                      display: isHidden ? 'none' : 'flex',
                      opacity: certVisible || !showAllCerts ? 1 : 0,
                      transition: 'opacity 0.3s ease, background 0.3s ease, border-color 0.3s ease'
                    }}
                    onClick={() => openModal(cert.image)}
                    onKeyDown={(e) => e.key === 'Enter' && openModal(cert.image)}
                    tabIndex="0"
                    role="button"
                  >
                    <div>
                      <h3 className="text-[1.15rem] font-bold text-(--text-main) mb-1 tracking-[-0.01em] leading-[1.3]">{cert.title}</h3>
                      <p className="text-[0.95rem] text-(--text-main) font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION MODAL */}
      <div 
        className={`fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.85)] backdrop-blur-sm z-2000 flex justify-center items-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className={`relative max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-(--card-bg) border border-(--border) transition-transform duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'}`}>
          <button 
            onClick={closeModal} 
            className="absolute top-3.75 right-3.75 bg-[rgba(0,0,0,0.6)] text-white border border-[rgba(255,255,255,0.1)] w-9 h-9 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-300 hover:bg-[rgba(0,0,0,0.9)] z-10" 
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img src={modalImg} alt="Certificate Full View" className="max-w-full max-h-[85vh] object-contain block" />
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 border-b border-(--border) transition-colors duration-300">
        <div className="w-full max-w-212.5 mx-auto px-6">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-8 fade-up">
            <div className="flex items-center gap-3">
              {showAllProjects && (
                <button 
                  onClick={() => {
                    setShowAllProjects(false);
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent border-none text-[#a1a1aa] text-[0.85rem] font-medium cursor-pointer flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back to Home
                </button>
              )}
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-bold tracking-[-0.02em] text-white">
                {showAllProjects ? "All Projects" : "Recent Projects"}
              </h2>
            </div>
            
            {!showAllProjects && (
              <button 
                onClick={() => setShowAllProjects(true)}
                className="bg-transparent border-none text-[0.85rem] font-bold cursor-pointer inline-flex items-center gap-1 text-white hover:text-[#a1a1aa] transition-colors group"
              >
                View All
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-px transition-transform duration-300 group-hover:translate-x-1">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-up">
            {(showAllProjects ? projects : projects.slice(0, 4)).map((proj, idx) => {
              let domainText = proj.linkText;
              try {
                if (proj.link && proj.link.startsWith('http')) {
                  domainText = new URL(proj.link).hostname.replace('www.', '');
                }
              } catch (e) {}

              return (
                <a 
                  key={idx} 
                  href={proj.link}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex flex-col p-6 rounded-md bg-[#0a0a0a] hover:bg-[#111111] transition-all duration-300 no-underline"
                >
                  <h3 className="text-[1.1rem] font-bold text-white mb-1.5 tracking-tight">{proj.title}</h3>
                  <p className="text-[#a1a1aa] text-[0.85rem] leading-normal mb-5">{proj.desc}</p>
                  
                  <div className="mt-auto flex items-start">
                    <span className="inline-block px-2.5 py-1 bg-[#000000] text-[#e4e4e7] font-mono text-[0.75rem] font-medium leading-none rounded-[3px]">
                      {domainText}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* CONTACT SECTION & FOOTER */}
      <section id="contact" className="pt-32 pb-12 border-t border-(--border) transition-colors duration-300">
        <div className="w-full max-w-250 mx-auto px-6 fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:max-w-200 gap-12 sm:gap-y-16 sm:gap-x-8 mb-16">
            
            {/* Column 1: Social Links */}
            <div className="flex flex-col">
              <h4 className="text-[1.05rem] font-bold text-(--text-main) mb-6 tracking-[-0.01em]">Social Links</h4>
              <div className="flex flex-col gap-5">
                <a href="https://www.linkedin.com/in/lucas-andrei-eguna-521b7530a/" target="_blank" rel="noreferrer" className="text-(--text-main) text-[0.95rem] font-medium flex items-center gap-3 leading-[1.4] transition-opacity duration-300 hover:opacity-70">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/c4znu" target="_blank" rel="noreferrer" className="text-(--text-main) text-[0.95rem] font-medium flex items-center gap-3 leading-[1.4] transition-opacity duration-300 hover:opacity-70">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/c4znu/" target="_blank" rel="noreferrer" className="text-(--text-main) text-[0.95rem] font-medium flex items-center gap-3 leading-[1.4] transition-opacity duration-300 hover:opacity-70">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </a>
                <a href="https://www.youtube.com/@LucasAndrei-Creatives" target="_blank" rel="noreferrer" className="text-(--text-main) text-[0.95rem] font-medium flex items-center gap-3 leading-[1.4] transition-opacity duration-300 hover:opacity-70">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  YouTube
                </a>
                <a href="https://github.com/egunalucasandrei-droid" target="_blank" rel="noreferrer" className="text-(--text-main) text-[0.95rem] font-medium flex items-center gap-3 leading-[1.4] transition-opacity duration-300 hover:opacity-70">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col gap-6">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=egunalucasandrei@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-[0.4rem] text-(--text-main) border-b border-(--border) pb-6 transition-opacity duration-300 hover:opacity-70 group">
                <div className="flex items-center gap-2 text-[0.95rem] font-bold">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>Email</span>
                </div>
                <div className="text-[0.95rem] font-medium">
                  egunalucasandrei@gmail.com
                </div>
              </a>
              
              <a href="tel:+6309465685471" className="flex flex-col gap-[0.4rem] text-(--text-main) transition-opacity duration-300 hover:opacity-70 group">
                <div className="flex items-center gap-2 text-[0.95rem] font-bold">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>Let's Talk</span>
                </div>
                <div className="flex items-center justify-between w-full text-[0.95rem] font-medium">
                  +63 09465685471
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-(--border) flex justify-center text-center mt-8">
            <p className="text-(--text-muted) text-[0.85rem]">&copy; 2026 Lucas Eguna. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}