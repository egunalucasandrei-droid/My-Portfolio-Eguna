import React, { useState, useEffect } from 'react';
import cert1 from './images/Introduction to Network Defense certificate.png';
import cert2 from './images/Introduction to Networks Certificate.png';
import cert3 from './images/HTML certificate.png';
import cert4 from './images/Introduction to Data Science Certificate_Eguna.png';
import cert5 from './images/AI fundamentals IBM skillsbuild certificate_Eguna.png';
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
import me1 from './images/me1.png';
import me2 from './images/me2.png';
import me3 from './images/me3.png';
import me4 from './images/me4.png';

//profile
import profileImg from './images/profile no background.png';
import resumeDoc from './images/My Resume - Eguna.png';

//certificates
const certifications = [
  { title: "Introduction to Network Defense", issuer: "Cisco", image: cert1 },
  { title: "Introduction to Networks", issuer: "Cisco", image: cert2 },
  { title: "AI Fundamentals IBM Skill Build", issuer: "Cisco", image: cert5 },
  { title: "HTML Developer", issuer: "W3schools", image: cert3 },
  { title: "Introduction to Data Science", issuer: "Cisco", image: cert4 },
];

//projects
const projects = [
  {
    category: "web",
    title: "Vitality Tracker",
    desc: "A vitality tracking application I built to monitor and manage health data, focusing on performance, structure, and a smooth user experience across platforms.",
    img: Vitality,
    fallback: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=800",
    link: "https://egunalucasandrei-droid.github.io/Vitality-Health-Tracker/",
    linkText: "Visit Site"
  },
  {
    category: "web",
    title: "AI Chat",
    desc: "An AI-powered chat application I built to deliver fast and seamless conversations. It uses a separate backend for API security and a clean, responsive frontend for a smooth user experience.",
    img: aiChat,
    fallback: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    link: "https://ai-chat-snowy-mu.vercel.app",
    linkText: "Visit Site"
  },
  {
    category: "uiux",
    title: "Fit Tracker",
    desc: "Modern Figma UI design focusing on clean user experience for fitness tracking.",
    img: figma1,
    fallback: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?auto=format&fit=crop&q=80&w=800",
    link: "https://www.figma.com/proto/d97Fr5Pdx8UFmAHHVpwVXv/FINAL-PROJECT?node-id=52-105&starting-point-node-id=52%3A105&t=QsXVjRp6wbDnW84U-1",
    linkText: "View Design"
  },
  {
    category: "uiux",
    title: "Rise Fit",
    desc: "Intuitive mobile interface designed in Figma for health enthusiasts.",
    img: figma2,
    fallback: "https://images.unsplash.com/photo-1526506114642-54bc55e2d56a?auto=format&fit=crop&q=80&w=800",
    link: "https://www.figma.com/proto/GfaYaASRaaXXHHvDMdbAqc/final-project?node-id=1-2",
    linkText: "View Design"
  },
  {
    category: "uiux",
    title: "Shape Your Body",
    desc: "A structured and visually appealing fitness application prototype.",
    img: figma3,
    fallback: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    link: "https://www.figma.com/proto/UbQv3hR8SUTIilNiI2o8XW/Final-Project?node-id=21-32",
    linkText: "View Design"
  },
  {
    category: "uiux",
    title: "Health Tracker",
    desc: "Comprehensive health monitoring dashboard UI crafted with minimalism.",
    img: figma4,
    fallback: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    link: "https://www.figma.com/proto/PkBZ1D9v60sZGZbBe9jpoA/HEALTH-TRACKER?node-id=60-48",
    linkText: "View Design"
  },
  {
    category: "web",
    title: "NIKE Mockup",
    desc: "A Nike-inspired front-end project I built to explore modern UI design and responsive layouts. Focused on creating a clean, visually engaging interface while practicing component-based development using React and Tailwind CSS.",
    img: nike1,
    fallback: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    link: "https://egunalucasandrei-droid.github.io/NIKE-WEBSITE/",
    linkText: "Visit Site"
  },
  {
    category: "web",
    title: "ROGSTRIX mockup",
    desc: "A ROG Strix–inspired design project focused on creating a bold and futuristic interface. Built to explore modern UI styling, layout composition, and visually striking design elements.",
    img: rog,
    fallback: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=800",
    link: "https://egunalucasandrei-droid.github.io/ROG-WEBSITE/",
    linkText: "Visit Site"
  },
  {
    category: "video",
    title: "She's Dating The Gangster (Trailer)",
    desc: "Creative storytelling and high-impact editing for a cinematic trailer.",
    img: film1,
    fallback: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    link: "https://youtu.be/CrDVxN9pC1A?si=R42Hjhf-Se8hM5Xc",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Intramurals and Scimath 2023",
    desc: "A short video edit highlighting the Intramurals and Scimath Activity.",
    img: film1,
    fallback: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    link: "https://youtu.be/Z6AojJ9b_Ho?si=L_8GBJHMmzp-v4Y3",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "She's Dating The Gangster (Short Film)",
    desc: "Detailed recreation showcasing cinematography and editing skills.",
    img: film7,
    fallback: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800",
    link: "https://youtu.be/60wxaOO0sbg?si=AIzBobI2oPGjK-dw",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Motivational Short Video",
    desc: "Short-form vertical editing focused on high audience retention.",
    img: film6,
    fallback: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800",
    link: "https://www.tiktok.com/@thryvnova.daily/video/7619230287410531591?is_from_webapp=1&sender_device=pc&web_id=7593043247263843847",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "The Gregorio Del Pilar",
    desc: "A compelling promotional video piece featuring smooth, modern transitions.",
    img: film3,
    fallback: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
    link: "https://youtu.be/ObcIEb3hynQ?si=c6ynr6bSnlOTqamN",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "New Yorker In Tondo",
    desc: "Narrative-driven film editing applying professional pacing techniques.",
    img: film2,
    fallback: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    link: "https://youtu.be/YmoOnQ50ItM?si=NTKSCkPSEhaoNgtk",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Indian Royal Spice Restaurant",
    desc: "High-energy commercial edit designed to captivate and promote.",
    img: film4,
    fallback: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
    link: "https://youtu.be/9BkI-9_kDJw?si=59RznqLHBsBpB0Eh",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Wealth Habits",
    desc: "Informative and engaging motivational edit tailored for social platforms.",
    img: film5,
    fallback: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800",
    link: "https://youtu.be/WAbr7hQvYUU?si=t3Z-6RbWFNilH9BD",
    linkText: "Watch Video",
    isVideo: true
  },
];

//gallery
const galleryImages = [
  { alt: "Gallery Image 1", src: me1 },
  { alt: "Gallery Image 2", src: me2 },
  { alt: "Gallery Image 3", src: me3 },
  { alt: "Gallery Image 4", src: me4 },
];

const GlobalStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .fade-up {
            opacity: 0;
            transform: translateY(15px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #71717a; }
        html.light ::-webkit-scrollbar-thumb { background: #d4d4d8; }
        html.light ::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
      `
    }}
  />
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

  // 'home' | 'projects' | 'certs' | 'gallery'
  const [activeView, setActiveView] = useState('home');
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.05 };
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

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => observer.disconnect();
  }, [activeView]);

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

  const navigateTo = (view) => {
    setActiveView(view);
  };

  const getDomainText = (linkText, link) => {
    try {
      if (link && link.startsWith('http')) {
        return new URL(link).hostname.replace('www.', '');
      }
    } catch (e) {}
    return linkText;
  };

  const renderAllProjects = () => (
    <div className="w-full max-w-5xl mx-auto px-5 py-12 fade-up">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigateTo('home')}
          className={`flex items-center gap-2 font-medium text-sm transition-colors ${
            theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </button>
        <h1 className={`text-xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
          All Projects
        </h1>
      </div>

      <div className={`flex gap-4 mb-6 border-b pb-2 flex-wrap ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
        {['all', 'uiux', 'web', 'video'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveProjectFilter(filter)}
            className={`text-xs font-bold uppercase tracking-wide pb-2 border-b-2 transition-colors ${
              activeProjectFilter === filter
                ? theme === 'dark'
                  ? 'text-white border-white'
                  : 'text-zinc-900 border-zinc-900'
                : theme === 'dark'
                ? 'text-zinc-400 border-transparent hover:text-white'
                : 'text-zinc-500 border-transparent hover:text-zinc-900'
            }`}
          >
            {filter === 'all' ? 'All' : filter === 'uiux' ? 'UI/UX' : filter === 'web' ? 'Websites' : 'Videos'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects
          .filter(p => activeProjectFilter === 'all' || p.category === activeProjectFilter)
          .map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className={`flex flex-col p-5 rounded-lg border transition-all no-underline group ${
                theme === 'dark' ? 'border-zinc-800 bg-zinc-950 hover:bg-zinc-900' : 'border-zinc-200 bg-white hover:bg-zinc-50'
              }`}
            >
              <h3 className={`text-base font-bold mb-1.5 tracking-tight transition-colors group-hover:opacity-80 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                {proj.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {proj.desc}
              </p>
              <div className="mt-auto">
                <span className={`inline-block px-2 py-0.5 font-mono text-xs font-medium rounded border ${
                  theme === 'dark' ? 'bg-black text-white border-zinc-800' : 'bg-zinc-50 text-zinc-900 border-zinc-200'
                }`}>
                  {getDomainText(proj.linkText, proj.link)}
                </span>
              </div>
            </a>
          ))}
      </div>
    </div>
  );

  const renderAllCerts = () => (
    <div className="w-full max-w-5xl mx-auto px-5 py-12 fade-up">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigateTo('home')}
          className={`flex items-center gap-2 font-medium text-sm transition-colors ${
            theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </button>
        <h1 className={`text-xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
          All Certifications
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 border rounded-lg cursor-pointer transition-all ${
              theme === 'dark' ? 'border-zinc-800 bg-zinc-950 hover:bg-zinc-900' : 'border-zinc-200 bg-white hover:bg-zinc-50'
            }`}
            onClick={() => openModal(cert.image)}
          >
            <h3 className={`text-base font-bold mb-1 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
              {cert.title}
            </h3>
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAllGallery = () => (
    <div className="w-full max-w-5xl mx-auto px-5 py-12 fade-up">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigateTo('home')}
          className={`flex items-center gap-2 font-medium text-sm transition-colors ${
            theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </button>
        <h1 className={`text-xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
          All Photos
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, idx) => (
          <div
            key={idx}
            className={`flex aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border ${
              theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
            }`}
            onClick={() => openModal(image.src)}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 font-sans pb-16 ${
      theme === 'dark' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white'
    }`}>
      <GlobalStyles />

      {/* MODAL */}
      <div
        className={`fixed inset-0 w-full h-full backdrop-blur-md z-50 flex justify-center items-center transition-all duration-300 ${
          isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${theme === 'dark' ? 'bg-black/90' : 'bg-black/70'}`}
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className={`relative w-11/12 max-w-5xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 ${
          isModalOpen ? 'scale-100' : 'scale-95'
        }`}>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-black/60 text-white border border-white/10 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-300 hover:bg-black z-10"
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img src={modalImg} alt="Full View" className="w-full max-h-[85vh] object-contain block" />
        </div>
      </div>

      {/* HEADER / NAVBAR */}
      <header className="w-full z-40 bg-transparent pt-6 pb-2">
        <div className="w-full max-w-5xl mx-auto px-5 flex justify-between items-center">
          <span className={`font-bold text-base tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}></span>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`border rounded-full p-2 transition-colors ${
              theme === 'dark' ? 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white' : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-900'
            }`}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* FULL SCREEN VIEWS ROUTING */}
      {activeView === 'projects' && renderAllProjects()}
      {activeView === 'certs' && renderAllCerts()}
      {activeView === 'gallery' && renderAllGallery()}

      {/* DASHBOARD HOME VIEW */}
      {activeView === 'home' && (
        <main className="w-full max-w-5xl mx-auto px-5 fade-up">
          
          {/* PROFILE HEADER */}
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-6 border-b pb-6 ${
            theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
          }`}>
            <div className="flex items-center gap-5">
              <img
                src={profileImg}
                alt="Lucas Eguna"
                className={`w-20 h-20 md:w-28 md:h-28 rounded-xl object-cover border ${
                  theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
                }`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400';
                }}
              />
              <div>
                <h1 className={`text-xl md:text-2xl font-extrabold tracking-tight leading-none mb-1.5 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>
                  Lucas Eguna
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="#1d9bf0"/>
                    <path d="M10 15.172l-3.536-3.536 1.414-1.414L10 12.344l5.656-5.656 1.414 1.414L10 15.172z" fill="#ffffff"/>
                  </svg>
                </h1>
                <div className={`flex items-center gap-1.5 text-xs mb-2 font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Metro Manila, Philippines
                </div>
                <p className={`text-[0.8rem] md:text-[0.85rem] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                  UI/UX Designer \ Full Stack Developer \ Video Editor
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto mt-2 md:mt-0">
              <a
                href={resumeDoc}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md font-bold text-[0.75rem] flex items-center justify-center gap-1.5 transition-opacity flex-1 md:flex-none border border-transparent ${
                  theme === 'dark' ? 'bg-white text-zinc-900 hover:opacity-90' : 'bg-zinc-900 text-white hover:opacity-90'
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Resume
              </a>
              <a
                href="mailto:egunalucasandrei@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-transparent border px-4 py-2 rounded-md font-bold text-[0.75rem] flex items-center justify-center gap-1.5 transition-colors flex-1 md:flex-none ${
                  theme === 'dark' ? 'border-zinc-800 text-white hover:bg-zinc-900' : 'border-zinc-200 text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* 2-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            
            {/* LEFT COLUMN */}
            <div className="md:col-span-7 flex flex-col gap-5 w-full">
              
              {/* ABOUT */}
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <h2 className={`text-[0.9rem] font-extrabold mb-3 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                  About
                </h2>
                <div className={`space-y-3 text-[0.75rem] leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  <p>I'm a full-stack developer, UI/UX designer, and video editor currently in my third year studying BSIT with a specialization in Cybersecurity.</p>
                  <p>I specialize in building modern, responsive, and scalable web applications, with a strong focus on the MERN stack (MongoDB, Express.js, React, and Node.js). Beyond coding, I have a strong eye for design, creating intuitive user interfaces and engaging visual content as a short-form and film editor.</p>
                  <p>My experience spans freelance development, social media content creation, and building complete web applications like the Vitality Health Tracker. Right now, I'm highly focused on expanding my backend expertise by studying PHP, Python, and other server-side technologies, while simultaneously upgrading my visual content workflow by mastering new video editing tools.</p>
                </div>
              </div>

              {/* TECH STACK & EXPERTISE */}
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <h2 className={`text-[0.9rem] font-extrabold mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                  Tech Stack & Tools
                </h2>
                
                <div className="flex flex-col gap-5">

                  {/* FRONTEND */}
                  <div>
                    <h3 className={`text-[0.65rem] font-bold mb-2 uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['HTML5', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Next.js', 'Styled Components', 'Framer Motion', 'Vue.js'].map(tech => (
                        <span key={tech} className={`text-[0.65rem] font-medium px-2 py-0.5 rounded border ${
                          theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                        }`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* BACKEND */}
                  <div>
                    <h3 className={`text-[0.65rem] font-bold mb-2 uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Nest.js', 'Firebase'].map(tech => (
                        <span key={tech} className={`text-[0.65rem] font-medium px-2 py-0.5 rounded border ${
                          theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                        }`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* DEVELOPER TOOLS */}
                  <div>
                    <h3 className={`text-[0.65rem] font-bold mb-2 uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      Developer Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git & GitHub', 'VS Code', 'Postman', 'npm', 'Chrome DevTools', 'ESLint & Prettier', 'Vercel', 'Netlify', 'Firebase Console', 'MongoDB Compass'].map(tech => (
                        <span key={tech} className={`text-[0.65rem] font-medium px-2 py-0.5 rounded border ${
                          theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                        }`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* VIDEO EDITING TOOLS */}
                  <div>
                    <h3 className={`text-[0.65rem] font-bold mb-2 uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      Video Editing Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['CapCut', 'Filmora', 'DaVinci Resolve', 'VEED', 'Alight Motion', 'Clipchamp'].map(tech => (
                        <span key={tech} className={`text-[0.65rem] font-medium px-2 py-0.5 rounded border ${
                          theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                        }`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* DESIGN TOOLS */}
                  <div>
                    <h3 className={`text-[0.65rem] font-bold mb-2 uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      Design Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Figma', 'Canva'].map(tech => (
                        <span key={tech} className={`text-[0.65rem] font-medium px-2 py-0.5 rounded border ${
                          theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                        }`}>{tech}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* RECENT PROJECTS */}
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-[0.9rem] font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    Recent Projects
                  </h2>
                  <button onClick={() => navigateTo('projects')} className={`bg-transparent border-none text-[0.65rem] font-bold cursor-pointer inline-flex items-center gap-1 transition-colors group ${
                    theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
                  }`}>
                    View All
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mt-px transition-transform duration-300 group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projects.slice(0, 4).map((proj, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col p-4 rounded-md border transition-all group cursor-pointer ${
                        theme === 'dark' ? 'border-transparent hover:border-zinc-800 hover:bg-zinc-900' : 'border-transparent hover:border-zinc-200 hover:bg-zinc-50'
                      }`}
                      onClick={() => window.open(proj.link, '_blank')}
                    >
                      <h3 className={`text-[0.8rem] font-bold mb-1 tracking-tight transition-colors line-clamp-1 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                        {proj.title}
                      </h3>
                      <p className={`text-[0.7rem] leading-relaxed mb-3 line-clamp-2 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {proj.desc}
                      </p>
                      <div className="mt-auto">
                        <span className={`inline-block px-2 py-0.5 font-mono text-[0.6rem] font-medium rounded border ${
                          theme === 'dark' ? 'bg-black text-white border-zinc-800' : 'bg-zinc-50 text-zinc-900 border-zinc-200'
                        }`}>
                          {getDomainText(proj.linkText, proj.link)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RECENT CERTIFICATIONS */}
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-[0.9rem] font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    Recent Certifications
                  </h2>
                  <button onClick={() => navigateTo('certs')} className={`bg-transparent border-none text-[0.65rem] font-bold cursor-pointer inline-flex items-center gap-1 transition-colors group ${
                    theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
                  }`}>
                    View All
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
                
                <div className={`flex flex-col border rounded-md overflow-hidden ${theme === 'dark' ? 'border-zinc-800 bg-black' : 'border-zinc-200 bg-zinc-50'}`}>
                  {certifications.slice(0, 3).map((cert, index) => (
                    <div
                      key={index}
                      className={`flex flex-col py-2 px-3 border-b last:border-0 cursor-pointer transition-colors ${
                        theme === 'dark' ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-200 hover:bg-zinc-100'
                      }`}
                      onClick={() => openModal(cert.image)}
                    >
                      <h3 className={`text-[0.75rem] font-bold tracking-tight mb-0.5 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                        {cert.title}
                      </h3>
                      <p className={`text-[0.65rem] font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LET'S CONNECT */}
              <div className={`border rounded-xl p-5 flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center ${
                theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
              }`}>
                <div>
                  <h3 className={`text-[0.75rem] font-bold mb-2.5 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    Let's Connect
                  </h3>
                  <div className="flex gap-3">
                    <a href="https://github.com/egunalucasandrei-droid" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-andrei-eguna-521b7530a/" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://www.youtube.com/@LucasAndrei-Creatives" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                    <a href="https://www.instagram.com/c4znu" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.facebook.com/c4znu/" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <a href="tel:+6309465685471" className={`text-[0.75rem] font-medium flex items-center gap-1.5 transition-colors w-fit ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    +63 09465685471
                  </a>
                  <a href="mailto:egunalucasandrei@gmail.com" className={`text-[0.75rem] font-medium flex items-center gap-1.5 transition-colors w-fit ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    egunalucasandrei@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-5 flex flex-col gap-5 w-full">
              
              {/* EXPERIENCE TIMELINE */}
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <h2 className={`text-base font-extrabold tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                  Experience
                </h2>
                
                <div className="relative ml-2">
                  {/* Vertical Line */}
                  <div className={`absolute left-0.75 top-2 bottom-2 w-px ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`}></div>

                  <div className="flex flex-col gap-6">
                    
                    {/* Item 1 (Active) */}
                    <div className="relative pl-5 flex justify-between items-start group">
                      <div className={`absolute left-0 top-1.25 w-1.75 h-1.75 z-10 transition-transform group-hover:scale-150 ${theme === 'dark' ? 'bg-white' : 'bg-zinc-900'}`}></div>
                      <div className="pr-2">
                        <h3 className={`text-[0.8rem] font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Frontend / Full stack developer</h3>
                        <p className={`text-[0.7rem] mt-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Freelancer</p>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-medium pt-0.5 shrink-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Present</span>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-5 flex justify-between items-start group">
                      <div className={`absolute left-0 top-1.25 w-1.75 h-1.75 border z-10 transition-transform group-hover:scale-150 ${
                        theme === 'dark' ? 'border-zinc-600 bg-zinc-950 group-hover:border-white' : 'border-zinc-300 bg-white group-hover:border-zinc-900'
                      }`}></div>
                      <div className="pr-2">
                        <h3 className={`text-[0.8rem] font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>UI / UX designer</h3>
                        <p className={`text-[0.7rem] mt-1 leading-snug ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Fit tracker, Rise Fit, Shape your body, Health Tracker</p>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-medium pt-0.5 shrink-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2025</span>
                    </div>

                    {/* Item 3 */}
                    <div className="relative pl-5 flex justify-between items-start group">
                      <div className={`absolute left-0 top-1.25 w-1.75 h-1.75 border z-10 transition-transform group-hover:scale-150 ${
                        theme === 'dark' ? 'border-zinc-600 bg-zinc-950 group-hover:border-white' : 'border-zinc-300 bg-white group-hover:border-zinc-900'
                      }`}></div>
                      <div className="pr-2">
                        <h3 className={`text-[0.8rem] font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Frontend developer</h3>
                        <p className={`text-[0.7rem] mt-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Vitality Health Tracker</p>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-medium pt-0.5 shrink-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2025</span>
                    </div>

                    {/* Item 4 */}
                    <div className="relative pl-5 flex justify-between items-start group">
                      <div className={`absolute left-0 top-1.25 w-1.75 h-1.75 border z-10 transition-transform group-hover:scale-150 ${
                        theme === 'dark' ? 'border-zinc-600 bg-zinc-950 group-hover:border-white' : 'border-zinc-300 bg-white group-hover:border-zinc-900'
                      }`}></div>
                      <div className="pr-2">
                        <h3 className={`text-[0.8rem] font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>BS in Info Tech (Cybersecurity)</h3>
                        <p className={`text-[0.7rem] mt-1 leading-snug ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>FEU Diliman graduating in 2028</p>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-medium pt-0.5 shrink-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2024</span>
                    </div>

                    {/* Item 5 */}
                    <div className="relative pl-5 flex justify-between items-start group">
                      <div className={`absolute left-0 top-1.25 w-1.75 h-1.75 border z-10 transition-transform group-hover:scale-150 ${
                        theme === 'dark' ? 'border-zinc-600 bg-zinc-950 group-hover:border-white' : 'border-zinc-300 bg-white group-hover:border-zinc-900'
                      }`}></div>
                      <div className="pr-2">
                        <h3 className={`text-[0.8rem] font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Social media assistant & Video Editor</h3>
                        <p className={`text-[0.7rem] mt-1 leading-snug ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>The Royal Indian Spice Restaurant</p>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-medium pt-0.5 shrink-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2024</span>
                    </div>

                    {/* Item 6 */}
                    <div className="relative pl-5 flex justify-between items-start group">
                      <div className={`absolute left-0 top-1.25 w-1.75 h-1.75 border z-10 transition-transform group-hover:scale-150 ${
                        theme === 'dark' ? 'border-zinc-600 bg-zinc-950 group-hover:border-white' : 'border-zinc-300 bg-white group-hover:border-zinc-900'
                      }`}></div>
                      <div className="pr-2">
                        <h3 className={`text-[0.8rem] font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Video editor</h3>
                        <p className={`text-[0.7rem] mt-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>(Freelance)</p>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-medium pt-0.5 shrink-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2023</span>
                    </div>

                    {/* Item 7 */}
                    <div className="relative pl-5 flex justify-between items-start group">
                      <div className={`absolute left-0 top-1.25 w-1.75 h-1.75 border z-10 transition-transform group-hover:scale-150 ${
                        theme === 'dark' ? 'border-zinc-600 bg-zinc-950 group-hover:border-white' : 'border-zinc-300 bg-white group-hover:border-zinc-900'
                      }`}></div>
                      <div className="pr-2">
                        <h3 className={`text-[0.8rem] font-bold tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Lyrical video editor</h3>
                        <p className={`text-[0.7rem] mt-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>(Facebook)</p>
                      </div>
                      <span className={`text-[0.65rem] font-mono font-medium pt-0.5 shrink-0 whitespace-nowrap ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2021-22</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* EDUCATION */}
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <h2 className={`text-[1rem] font-extrabold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                  Education
                </h2>
                <div className="flex flex-col gap-3">
                  <div className={`pb-3 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <h3 className={`text-[0.8rem] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>BS Information Technology</h3>
                    <p className={`text-[0.7rem] mt-0.5 leading-snug ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Far Eastern University Diliman (Cybersecurity)</p>
                    <span className={`opacity-70 text-[0.65rem] font-mono mt-1 block ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2024 – 2028 (Expected)</span>
                  </div>
                  <div className={`pb-3 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <h3 className={`text-[0.8rem] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>General Academic Strand</h3>
                    <p className={`text-[0.7rem] mt-0.5 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Kings’ Montessori School</p>
                    <span className={`opacity-70 text-[0.65rem] font-mono mt-1 block ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2020 – 2024 (With Honors)</span>
                  </div>
                  <div>
                    <h3 className={`text-[0.8rem] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>High School</h3>
                    <p className={`text-[0.7rem] mt-0.5 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>San Bartolome High School</p>
                    <span className={`opacity-70 text-[0.65rem] font-mono mt-1 block ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>2016 – 2020 (With Honors)</span>
                  </div>
                </div>
              </div>

              {/* GALLERY (RIGHT COLUMN) */}
              <div id="gallery" className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-base font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    Gallery
                  </h2>
                  <button onClick={() => navigateTo('gallery')} className={`bg-transparent border-none text-[0.7rem] font-bold cursor-pointer inline-flex items-center gap-1 transition-colors group ${
                    theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
                  }`}>
                    View All
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mt-px transition-transform duration-300 group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {galleryImages.slice(0, 6).map((image, idx) => (
                    <div
                      key={idx}
                      className={`flex aspect-square rounded-md overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border ${
                        theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
                      }`}
                      onClick={() => openModal(image.src)}
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </main>
      )}

    </div>
  );
}