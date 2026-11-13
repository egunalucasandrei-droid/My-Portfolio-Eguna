import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './components/ProjectCard';
import TechCategory from './components/TechCategory';
import VideoPortfolio from './components/VideoPortfolio';
import ImageModal from './components/ImageModal';
import ProfessionalSections from './components/ProfessionalSections';
import { thumbnailFor } from './media';
import videoThumbnails from './videoThumbnails';
import cert1 from './images/Introduction to Network Defense certificate.png';
import cert2 from './images/Introduction to Networks Certificate.png';
import cert3 from './images/HTML certificate.png';
import cert4 from './images/Introduction to Data Science Certificate_Eguna.png';
import cert5 from './images/AI fundamentals IBM skillsbuild certificate_Eguna.png';
import ccstNetworking from './images/cisco-ccst-networking.webp';
import figma1 from './images/Figma1.png';
import figma2 from './images/figma2.png';
import figma3 from './images/figma3.png';
import figma4 from './images/figma4.png';
import aiChat from './images/AI Chat.png';
import Vitality from './images/Vitality.png';
import apex5000 from './images/apex5000.png';
import noltaImage from './images/nolta.png';
import me1 from './images/me1.png';
import me2 from './images/me2.png';
import me3 from './images/me3.png';
import me4 from './images/me4.png';
import me5 from './images/me5.png'; 

import profileImg from './images/profile no background.png';
import profileSigma from './images/profile sigma transparent.png';
import resumeDoc from './images/My Resume.jpg';
import rizzSoundFile from './sound/rizz sound effect.mp3';

const certifications = [
  {
    title: "Cisco Certified Support Technician (CCST) Networking",
    issuer: "Cisco",
    image: ccstNetworking,
  },
  { title: "Introduction to Network Defense", issuer: "Cisco", image: cert1 },
  { title: "Introduction to Networks", issuer: "Cisco", image: cert2 },
  { title: "AI Fundamentals IBM Skill Build", issuer: "Cisco", image: cert5 },
  { title: "HTML Developer", issuer: "W3schools", image: cert3 },
  { title: "Introduction to Data Science", issuer: "Cisco", image: cert4 },
];

const techStack = [
  { category: "Programming Languages", tools: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP', 'Python (Basic)', 'SQL'] },
  { category: "Front-End Development", tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive Web Design', 'Component-Based Architecture'] },
  { category: "Back-End Development", tools: ['Node.js', 'Express.js', 'NestJS', 'Laravel', 'CodeIgniter', 'REST API Integration', 'JWT Authentication', 'Server-Side Validation', 'WebSockets'] },
  { category: "Databases & Authentication", tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Supabase Auth', 'Database Design', 'Prisma ORM'] },
  { category: "API & Security", tools: ['RESTful API Design', 'API Testing', 'Webhooks'] },
  {
    category: "Cybersecurity & Application Security",
    tools: ['OWASP Top 10', 'Web Application Security', 'Authentication & Authorization', 'Role-Based Access Control (RBAC)', 'Password Hashing', 'SQL Injection Prevention', 'Cross-Site Scripting (XSS) Prevention', 'HTTPS & TLS', 'API Security', 'Network Security Fundamentals'],
  },
  { category: "Development & Deployment", tools: ['Git', 'GitHub', 'Visual Studio Code', 'Vercel', 'Hostinger', 'Resend', 'Render', 'Cloudflare', 'CI/CD', 'GitHub Actions', 'VPS Hosting', 'VPS Management', 'XAMPP'] },
  { category: "Testing & Developer Tools", tools: ['Postman', 'Chrome DevTools', 'ESLint'] },
  { category: "Design & Video Editing", tools: ['Figma', 'Canva', 'Adobe Photoshop', 'CapCut', 'Short-Form Video Editing', 'AI-Assisted Video Editing'] },
  {
    category: "AI Integration",
    tools: ['Google AI Studio', 'Gemini API', 'OpenAI API', 'AI Agent Development', 'AI Chatbot Development', 'LLM Integration', 'AI API Integration', 'Prompt Engineering'],
  },
];

const featuredTechSelection = [
  { category: 'Programming Languages', tools: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'Python (Basic)'] },
  { category: 'Front-End Development', tools: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { category: 'Back-End Development', tools: ['Node.js', 'NestJS', 'Laravel', 'CodeIgniter'] },
  { category: 'Databases & Authentication', label: 'Databases', tools: ['PostgreSQL', 'MySQL', 'Supabase'] },
  {
    category: 'Cybersecurity & Application Security',
    label: 'Cybersecurity',
    tools: ['OWASP Top 10', 'Web Application Security', 'Role-Based Access Control (RBAC)', 'API Security'],
    toolLabels: { 'Role-Based Access Control (RBAC)': 'RBAC' },
  },
  { category: 'Development & Deployment', tools: ['Git', 'GitHub', 'Vercel', 'Cloudflare', 'VPS Hosting'] },
  { category: 'AI Integration', tools: ['Gemini API', 'OpenAI API', 'AI Agent Development'] },
  { category: 'Design & Video Editing', tools: ['Figma', 'CapCut', 'AI-Assisted Video Editing'] },
];

const featuredTechStack = featuredTechSelection.map(selection => {
  const section = techStack.find(item => item.category === selection.category);
  return {
    ...section,
    label: selection.label,
    toolLabels: selection.toolLabels,
    tools: selection.tools.map(tool => section.tools.find(item => item === tool)).filter(Boolean),
  };
});

const projects = [
  {
    category: "web",
    title: "NOLTA Court Booking Website",
    shortName: "NOLTA",
    type: "Full-Stack Web Application",
    role: "Full-Stack Developer",
    status: "Live",
    location: "Batasan, Quezon City, Philippines",
    period: "2026",
    desc: "NOLTA is a full-stack court booking and reservation platform designed to simplify sports facility scheduling, court availability, and online reservations through a responsive and user-friendly web application.",
    img: noltaImage,
    imageAlt: "NOLTA Court Booking Website homepage preview",
    imageFit: "contain",
    tech: ['React', 'NestJS', 'Prisma ORM', 'Supabase'],
    link: "https://nolta-web.onrender.com/",
    actionLabel: "Live Website",
  },
  {
    category: "web",
    title: "Vitality Tracker",
    desc: "A responsive health tracking interface I developed to help users monitor everyday activity and health data.",
    role: "Front-End Developer",
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: Vitality,
    link: "https://vitalitytracker.app",
    linkText: "Visit Site"
  },
  {
    category: "web",
    title: "AI Chat",
    desc: "An AI chat application I built with a responsive React interface and a separate Express backend for Gemini API requests.",
    role: "Full-Stack Developer",
    tech: ['React', 'Tailwind CSS', 'Express.js', 'Gemini API'],
    github: "https://github.com/egunalucasandrei-droid/AI-Chat",
    img: aiChat,
    link: "https://ai-chat-snowy-mu.vercel.app",
    linkText: "Visit Site"
  },
  {
    category: "uiux",
    title: "Fit Tracker",
    role: "UI/UX Designer",
    tech: ['Figma'],
    desc: "Modern Figma UI design focusing on clean user experience for fitness tracking.",
    img: figma1,
    link: "https://www.figma.com/proto/d97Fr5Pdx8UFmAHHVpwVXv/FINAL-PROJECT?node-id=52-105&starting-point-node-id=52%3A105&t=QsXVjRp6wbDnW84U-1",
    linkText: "View Design"
  },
  {
    category: "video",
    title: "Short-Form Video Edits Folder",
    shortName: "Short-Form Edits",
    type: "Video Collection",
    videoCategories: ['Short-Form Videos', 'Social Media Content'],
    desc: "A collection of short-form video edits I created for Facebook, Instagram, and TikTok, focusing on high audience retention and creative storytelling.",
    img: "/images/short-form-video-editing.png",
    imageAlt: "Video editing workspace with a laptop editing timeline, camera, and headphones",
    imageFit: "contain",
    link: "https://f.io/XudH6olA",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "uiux",
    title: "Rise Fit",
    tech: ['Figma'],
    desc: "Intuitive mobile interface designed in Figma for health enthusiasts.",
    img: figma2,
    link: "https://www.figma.com/proto/GfaYaASRaaXXHHvDMdbAqc/final-project?node-id=1-2",
    linkText: "View Design"
  },
  {
    category: "uiux",
    title: "Shape Your Body",
    tech: ['Figma'],
    desc: "A structured and visually appealing fitness application prototype.",
    img: figma3,
    link: "https://www.figma.com/proto/UbQv3hR8SUTIilNiI2o8XW/Final-Project?node-id=21-32",
    linkText: "View Design"
  },
  {
    category: "uiux",
    title: "Health Tracker",
    tech: ['Figma'],
    desc: "Comprehensive health monitoring dashboard UI crafted with minimalism.",
    img: figma4,
    link: "https://www.figma.com/proto/PkBZ1D9v60sZGZbBe9jpoA/HEALTH-TRACKER?node-id=60-48",
    linkText: "View Design"
  },
  {
    category: "web",
    title: "apex5000",
    desc: "A PHP school project I built to simulate vehicle purchasing, upgrade selection, financing calculations, and delivery manifest generation.",
    tech: ['PHP', 'CSS3'],
    github: "https://github.com/egunalucasandrei-droid/Apex5000",
    img: apex5000,
    link: "https://apex5000.vercel.app",
    linkText: "Visit Site"
  },
  {
    category: "video",
    title: "She's Dating The Gangster (Trailer)",
    videoCategories: ['Film & Vlogs'],
    desc: "Creative storytelling and high-impact editing for a cinematic trailer.",
    img: videoThumbnails["She's Dating The Gangster (Trailer)"],
    link: "https://youtu.be/CrDVxN9pC1A?si=R42Hjhf-Se8hM5Xc",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Intramurals and Scimath 2023",
    videoCategories: ['Social Media Content'],
    desc: "A short video edit highlighting the Intramurals and Scimath Activity.",
    img: "/images/intramurals-scimath-2023.png",
    imageAlt: "Intramurals basketball scene on the left and SciMath 2023 design on the right",
    imageFit: "contain",
    link: "https://youtu.be/Z6AojJ9b_Ho?si=L_8GBJHMmzp-v4Y3",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "She's Dating The Gangster (Short Film)",
    videoCategories: ['Film & Vlogs'],
    desc: "A short-film recreation shared as part of my film editing portfolio.",
    img: videoThumbnails["She's Dating The Gangster (Short Film)"],
    link: "https://youtu.be/60wxaOO0sbg?si=AIzBobI2oPGjK-dw",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Mini Vlog #1",
    videoCategories: ['Film & Vlogs'],
    desc: "A personal mini vlog, edited as part of my video portfolio.",
    img: videoThumbnails["Mini Vlog #1"],
    link: "https://youtu.be/PmK_wF6q-e4?si=JiPI7Fxna7r8OAw5",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Motivational Short Video",
    shortName: "Motivational Short Video",
    type: "Short-Form Video",
    videoCategories: ['Short-Form Videos', 'Social Media Content'],
    desc: "Short-form vertical editing focused on high audience retention.",
    img: "/images/motivational-short-video.webp",
    imageAlt: "Motivational Short Video artwork showing a person overlooking mountains and a golden sky",
    imageFit: "contain",
    link: "https://www.tiktok.com/@thryvnova.daily/video/7619230287410531591?is_from_webapp=1&sender_device=pc&web_id=7593043247263843847",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Hotel & Resort Promotions",
    type: "Short-Form Promotional Video Collection",
    videoCategories: ['Hotel & Resort Promotions'],
    desc: "A collection of short-form promotional videos featuring hotels, resorts, and travel destinations, focusing on engaging visual storytelling, attention-grabbing hooks, and destination highlights.",
    img: "/images/hotel-resort-promotions.webp",
    imageAlt: "AI-generated illustrative cover of a tropical luxury resort with a swimming pool and palm trees in warm sunset light",
    imageFit: "contain",
    link: "https://drive.google.com/drive/folders/11FVASI4GkwfMv_X0yGX_Y_7MU80mYRWn?usp=sharing",
    linkText: "View Collection",
    isVideo: true
  },
  {
    category: "video",
    title: "AI-Assisted Video Editing",
    type: "AI-Enhanced Video Collection",
    videoCategories: ['AI-Assisted Video Editing'],
    desc: "A collection of video editing projects incorporating AI-assisted tools, creative visual enhancements, and modern editing techniques to produce engaging digital content.",
    img: "/images/ai-assisted-video-editing.webp",
    imageAlt: "AI-generated illustrative cover of a professional editing workspace with a cinematic preview, multitrack timeline, and subtle AI-inspired node controls",
    imageFit: "contain",
    link: "https://drive.google.com/drive/folders/1o67deJaL_0uCSCEWG6QFs38plfIkSrUR?usp=sharing",
    linkText: "View Collection",
    isVideo: true
  },
  {
    category: "video",
    title: "The Gregorio Del Pilar",
    videoCategories: ['Social Media Content'],
    desc: "A compelling promotional video piece featuring smooth, modern transitions.",
    img: videoThumbnails["The Gregorio Del Pilar"],
    link: "https://youtu.be/ObcIEb3hynQ?si=c6ynr6bSnlOTqamN",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "New Yorker In Tondo",
    videoCategories: ['Film & Vlogs'],
    desc: "Narrative-driven film editing applying professional pacing techniques.",
    img: videoThumbnails["New Yorker In Tondo"],
    link: "https://youtu.be/YmoOnQ50ItM?si=NTKSCkPSEhaoNgtk",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Indian Royal Spice Restaurant",
    videoCategories: ['Social Media Content'],
    desc: "High-energy commercial edit designed to captivate and promote.",
    img: videoThumbnails["Indian Royal Spice Restaurant"],
    link: "https://youtu.be/9BkI-9_kDJw?si=59RznqLHBsBpB0Eh",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "Wealth Habits",
    videoCategories: ['Short-Form Videos', 'Social Media Content'],
    desc: "Informative and engaging motivational edit tailored for social platforms.",
    img: videoThumbnails["Wealth Habits"],
    link: "https://youtu.be/WAbr7hQvYUU?si=t3Z-6RbWFNilH9BD",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "UniShelf Infomercial.mov",
    shortName: "UniShelf Infomercial",
    type: "Google Drive · MOV",
    desc: "Infomercial video in MOV format. Opens in Google Drive.",
    img: "/images/unishelf-infomercial.webp",
    imageAlt: "Frame from UniShelf Infomercial showing a tablet and payment card",
    imageFit: "contain",
    videoPreview: true,
    link: "https://drive.google.com/file/d/1NFcjpOvzVdpB8VYIEXFssB9ju759q4Dz/view?usp=sharing",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "GED0031_DC21_GroupTechCulture_Finals.mp4",
    shortName: "GED0031 DC21",
    type: "Google Drive · MP4",
    desc: "MP4 video file. Opens in Google Drive.",
    img: "/images/ged0031-group-tech-culture.webp",
    imageAlt: "Frame from Group Tech Culture showing a presenter and a digital communication backdrop",
    imageFit: "contain",
    videoPreview: true,
    link: "https://drive.google.com/file/d/1nrU1ejdO03WkkebPqxI-G4iUvZ-awwmI/view?usp=sharing",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "The Robot Who Waited",
    type: "Animated Short",
    videoCategories: ['Short-Form Videos', 'Social Media Content'],
    desc: "A caption-led animated short following a robot’s long wait and an unexpected reunion, with a shift from rainy city scenes to warm light.",
    img: "/images/the-robot-who-waited.webp",
    imageAlt: "Generated illustrative cover of the robot and a child in a teal coat reunited in a rain-soaked courtyard at sunrise",
    imageFit: "contain",
    videoPreview: true,
    link: "https://drive.google.com/file/d/1vS1MbVbn_YLQLx6FRGeSS-Oamgct8Kd-/view?usp=drive_link",
    linkText: "Watch Video",
    isVideo: true
  },
  {
    category: "video",
    title: "eBay-to-Amazon Business Story",
    type: "Short-Form Business Interview",
    videoCategories: ['Short-Form Videos', 'Social Media Content'],
    desc: "A short-form business interview edit combining a speaker-led story with bold captions, calendar graphics, and animated delivery visuals.",
    img: "/images/ebay-to-amazon-business-story.webp",
    imageAlt: "Generated illustrative cover of the business story’s speaker at a podcast microphone beside parcel and delivery graphics",
    imageFit: "contain",
    videoPreview: true,
    link: "https://drive.google.com/file/d/1EXO6zAq2Tf6I6o43Fln-Rjp_EtMSP29L/view?usp=drive_link",
    linkText: "Watch Video",
    isVideo: true
  }
];

const noltaProject = projects.find(project => project.title === 'NOLTA Court Booking Website');

const galleryImages = [
  { alt: "Gallery Image 1", src: me1 },
  { alt: "Gallery Image 2", src: me2 },
  { alt: "Gallery Image 3", src: me3 },
  { alt: "Gallery Image 4", src: me4 },
  { alt: "Gallery Image 5", src: me5 },
];

const experience = [
  {
    "title": "Full-Stack Developer",
    "company": "NOLTA Court Booking Website",
    "location": "Batasan, Quezon City, Philippines",
    "period": noltaProject.period,
    "current": true
  },
  {
    "title": "Short-Form Video Editor",
    "company": "New Beginnings Creator Network",
    "location": "Glendale, California, USA",
    "period": "2026"
  },
  {
    "title": "UI/UX Designer",
    "company": "Fit Tracker, Rise Fit, Shape Your Body, Health Tracker",
    "period": "2025"
  },
  {
    "title": "Front-End Developer",
    "company": "Vitality Health Tracker",
    "location": "Auckland, New Zealand",
    "period": "2024 – 2025"
  },
  {
    "title": "Social Media Assistant & Video Editor",
    "company": "The Royal Indian Spice Restaurant",
    "location": "Quezon City, Philippines",
    "period": "2024"
  },
  {
    "title": "Video Editor",
    "company": "Freelance",
    "period": "2023"
  },
  {
    "title": "Lyrical Video Editor",
    "company": "Freelance",
    "period": "2021 – 2022"
  }
];

const GlobalStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
        }

        .fade-up {
            opacity: 0;
            transform: translateY(15px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
        }

        .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

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

const CertificationContent = ({ cert, theme, onPreview, compact = false }) => {
  const Summary = cert.image ? 'button' : 'div';
  const Title = compact ? 'h3' : 'h2';

  return (
    <>
      <Summary
        type={cert.image ? 'button' : undefined}
        onClick={cert.image ? event => onPreview(cert.image, cert.title, event.currentTarget) : undefined}
        aria-label={cert.image ? `View ${cert.title}` : undefined}
        className={`w-full text-left ${compact ? 'py-2 px-3' : 'flex h-full min-w-0 flex-col items-start p-5'} ${cert.image ? 'cursor-pointer' : ''}`}
      >
        {!compact && <img src={thumbnailFor(cert.image)} alt="" width="640" height="452" loading="lazy" decoding="async" className="mb-4 h-28 w-full rounded-sm bg-zinc-100 object-contain" />}
        <Title className={`${compact ? 'text-[0.75rem] tracking-tight mb-0.5' : 'text-sm mb-2 tracking-tight break-words'} font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {cert.title}
        </Title>
        <p className={`${compact ? 'text-[0.65rem]' : 'text-sm mt-auto'} font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {cert.issuer}
        </p>
      </Summary>
    </>
  );
};

export default function App() {
  const getInitialTheme = () => {
    try {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('Image preview');
  const modalTriggerRef = useRef(null);
  
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);

  const [activeView, setActiveView] = useState('home');
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch { /* Theme switching still works when storage is unavailable. */ }
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
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

  const openModal = (imgSrc, description = 'Image preview', trigger = document.activeElement) => {
    modalTriggerRef.current = trigger;
    setModalImg(imgSrc);
    setModalAlt(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  const navigateTo = (view) => {
    setActiveView(view);
    requestAnimationFrame(() => document.querySelector('main h1')?.focus({ preventScroll: true }));
  };

  const renderViewHeading = (title) => (
    <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
      <button type="button" onClick={() => navigateTo('home')} className="inline-flex min-h-9 items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75">
        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m7-7-7 7 7 7" /></svg>
        Back to Home
      </button>
      <h1 tabIndex={-1} className="text-xl font-bold tracking-tight md:text-2xl">{title}</h1>
    </div>
  );

  const renderAllProjects = () => (
    <main id="main-content" tabIndex={-1} className="fade-up mx-auto w-full max-w-5xl px-5 py-8">
      {renderViewHeading('All Projects')}
      <div aria-label="Project categories" className={`mb-6 flex flex-wrap gap-x-6 gap-y-3 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
        {['all', 'web', 'uiux', 'video'].map(filter => (
          <button key={filter} type="button" aria-pressed={activeProjectFilter === filter} onClick={() => setActiveProjectFilter(filter)} className={`relative min-h-10 pb-3 text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-75 ${activeProjectFilter === filter ? 'border-b-2 border-current' : ''}`}>
            {{ all: 'ALL', web: 'WEBSITES', uiux: 'UI/UX', video: 'VIDEOS' }[filter]}
          </button>
        ))}
      </div>
      {activeProjectFilter === 'video' ? (
        <div className="space-y-8">
          {['Film & Vlogs', 'Short-form Edits'].map(group => (
            <section key={group} aria-label={group}>
              <h2 className="mb-4 text-base font-semibold tracking-tight">{group === 'Film & Vlogs' ? 'Film/Vlog' : group}</h2>
              <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2">
                {projects.filter(project => project.category === 'video' && (group === 'Film & Vlogs') === project.videoCategories?.includes('Film & Vlogs')).map(project => <ProjectCard key={project.title} project={project} theme={theme} />)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter(project => activeProjectFilter === 'all' || project.category === activeProjectFilter).map(project => <ProjectCard key={project.title} project={project} theme={theme} headingLevel="h2" />)}
        </div>
      )}
    </main>
  );

  const renderAllVideos = () => (
    <main id="main-content" tabIndex={-1} className="fade-up mx-auto w-full max-w-5xl px-5 py-8">
      {renderViewHeading('Video Editing Portfolio')}
      <p className="mb-6 max-w-2xl text-sm leading-relaxed">Short-form edits, storytelling, and promotional content. Browse my existing work by category.</p>
      <VideoPortfolio projects={projects} theme={theme} />
    </main>
  );

  const renderAllTech = () => (
    <main id="main-content" tabIndex={-1} className="fade-up mx-auto w-full max-w-4xl px-5 py-8">
      {renderViewHeading('Tech Stack')}
      <div className="flex flex-col gap-8">
        {techStack.map(section => <TechCategory key={section.category} section={section} theme={theme} />)}
      </div>
    </main>
  );

  const renderAllCerts = () => (
    <main id="main-content" tabIndex={-1} className="fade-up mx-auto w-full max-w-5xl px-5 py-8">
      {renderViewHeading('All Certifications')}
      <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`flex min-h-32 min-w-0 flex-col border rounded-lg transition-all ${
              theme === 'dark' ? 'border-zinc-800 bg-zinc-950 hover:bg-zinc-900' : 'border-zinc-200 bg-white hover:bg-zinc-50'
            }`}
          >
            <CertificationContent cert={cert} theme={theme} onPreview={openModal} />
          </div>
        ))}
      </div>
    </main>
  );

  const renderAllGallery = () => (
    <main id="main-content" tabIndex={-1} className="fade-up mx-auto w-full max-w-5xl px-5 py-8">
      {renderViewHeading('All Photos')}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, idx) => (
          <button
            type="button"
            aria-label={`View ${image.alt}`}
            key={idx}
            className={`flex aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border ${
              theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
            }`}
            onClick={event => openModal(image.src, image.alt, event.currentTarget)}
          >
            <img src={thumbnailFor(image.src)} alt={image.alt} loading="lazy" decoding="async" width="320" height="320" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </main>
  );

  return (
    <div className={`min-h-screen flex flex-col w-full transition-colors duration-500 ease-in-out font-sans ${
      theme === 'dark' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-white text-black selection:bg-black selection:text-white'
    }`}>
      <GlobalStyles />
      <a href="#main-content" className="skip-link">Skip to content</a>

      <ImageModal open={isModalOpen} source={modalImg} alt={modalAlt} theme={theme} onClose={closeModal} triggerRef={modalTriggerRef} />

      {/* HEADER / NAVBAR */}
      <header className="w-full z-40 bg-transparent pt-6 pb-2">
        <div className="w-full max-w-5xl mx-auto px-5 flex justify-between items-center">
          <span className={`font-semibold text-base tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}></span>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme" aria-pressed={theme === 'light'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`border rounded-full p-2 transition-colors ${
              theme === 'dark' ? 'bg-zinc-950 border-zinc-800 text-white hover:opacity-80' : 'bg-white border-zinc-200 text-black hover:opacity-80'
            }`}
          >
            {theme === 'dark' ? (
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
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
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
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
      {activeView === 'tech' && renderAllTech()}
      {activeView === 'videos' && renderAllVideos()}

      {/* DASHBOARD HOME VIEW */}
      {activeView === 'home' && (
        <main id="main-content" tabIndex={-1} className="w-full max-w-5xl mx-auto px-5 fade-up">
          
          {/* PROFILE HEADER */}
          <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-6 border-b pb-6 ${
            theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
          }`}>
            <div className="flex min-w-0 items-center gap-4 md:gap-5">
              <div 
                className={`w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden border shrink-0 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}
                onMouseEnter={() => {
                  setIsHoveringProfile(true);
                  new Audio(rizzSoundFile).play().catch(() => {});
                }}
                onMouseLeave={() => setIsHoveringProfile(false)}
              >
                <img
                  src={thumbnailFor(isHoveringProfile ? profileSigma : profileImg)}
                  alt="LUCAS ANDREI EGUNA"
                  width="112" height="112" fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = profileImg;
                  }}
                />
              </div>
              <div>
                <h1 tabIndex={-1} className={`text-xl md:text-2xl font-bold tracking-tight leading-tight mb-1.5 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  LUCAS ANDREI EGUNA
                </h1>
                <div className={`flex items-center gap-1.5 text-xs mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Metro Manila, Philippines
                </div>
                <p className={`text-[0.8rem] md:text-[0.85rem] font-semibold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                   Full-Stack Developer | Video Editor
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 w-full lg:w-auto mt-2 lg:mt-0">
              <a
                href={resumeDoc}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-md font-semibold text-[0.75rem] flex items-center justify-center gap-1.5 transition-opacity flex-1 lg:flex-none border border-transparent ${
                  theme === 'dark' ? 'bg-white text-black hover:opacity-90' : 'bg-black text-white hover:opacity-90'
                }`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Resume
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=egunalucasandrei@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-transparent border px-4 py-2 rounded-md font-semibold text-[0.75rem] flex items-center justify-center gap-1.5 transition-colors flex-1 lg:flex-none ${
                  theme === 'dark' ? 'border-zinc-800 text-white hover:bg-zinc-900' : 'border-zinc-200 text-black hover:bg-zinc-100'
                }`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            <div className="lg:col-span-7 flex flex-col gap-5 w-full">
              
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <h2 className={`text-[0.9rem] font-bold mb-3 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  About
                </h2>
                <div className={`space-y-3 text-[0.75rem] leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  <p>I'm an Information Technology student specializing in Cybersecurity, with over 5 years of experience in video editing and 2 years in web development. I build responsive, functional web applications and create engaging digital content for local and international clients.</p>
                  <p>My expertise includes full-stack development, database management, API integration, UI/UX design, and AI-assisted video production. I'm passionate about developing practical, secure, and user-focused digital solutions while continuously expanding my technical and creative skills.</p>
                </div>
              </div>

              <div className={`border rounded-xl p-4 md:p-5 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-[0.9rem] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Tech Stack & Tools
                  </h2>
                  <button 
                    onClick={() => navigateTo('tech')} 
                    className={`bg-transparent border-none text-[0.65rem] font-semibold cursor-pointer inline-flex items-center gap-1 transition-colors group ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}
                  >
                    View All
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mt-px transition-transform duration-300 group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  {featuredTechStack.map(section => (
                    <TechCategory key={section.category} section={section} theme={theme} compact />
                  ))}
                </div>
              </div>

              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-[0.9rem] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Recent Projects
                  </h2>
                  <button onClick={() => navigateTo('projects')} className={`bg-transparent border-none text-[0.65rem] font-semibold cursor-pointer inline-flex items-center gap-1 transition-colors group ${
                    theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'
                  }`}>
                    View All
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mt-px transition-transform duration-300 group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>

                <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 gap-3">
                  {projects.filter(project => ['NOLTA Court Booking Website', 'Vitality Tracker', 'AI Chat', 'Fit Tracker'].includes(project.title)).map(project => (
                    <ProjectCard key={project.title} project={project} theme={theme} compact />
                  ))}
                </div>
              </div>

              <section aria-labelledby="video-portfolio-heading" className={`rounded-xl border p-5 md:p-6 ${theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 id="video-portfolio-heading" className="text-[0.9rem] font-bold tracking-tight">Video Editing Portfolio</h2>
                  <button type="button" onClick={() => navigateTo('videos')} className="inline-flex min-h-9 shrink-0 items-center gap-1 text-[0.65rem] font-semibold transition-opacity hover:opacity-75" aria-label="View all video projects">View All <span aria-hidden="true">→</span></button>
                </div>
                <VideoPortfolio projects={projects} theme={theme} compact />
              </section>

            </div>

            <div className="lg:col-span-5 flex flex-col gap-5 w-full">
              
              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <h2 className={`text-base font-bold tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Experience
                </h2>
                
                <div className="relative ml-2">
                  <div className={`absolute left-0.75 top-2 bottom-2 w-px ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`}></div>

                  <ol className="flex flex-col gap-6">
                    {experience.map(entry => (
                      <li key={entry.title} className="group relative min-w-0 pl-5">
                        <span aria-hidden="true" className={`absolute left-0 top-1.25 h-1.75 w-1.75 transition-transform motion-safe:group-hover:scale-150 ${entry.current ? theme === 'dark' ? 'bg-white' : 'bg-black' : theme === 'dark' ? 'border border-zinc-600 bg-zinc-950 group-hover:border-white' : 'border border-zinc-300 bg-white group-hover:border-black'}`} />
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <h3 className="text-[0.8rem] font-semibold leading-snug tracking-tight">{entry.title}</h3>
                          <span className="shrink-0 text-[0.6rem] font-mono font-medium">{entry.period}</span>
                        </div>
                        <p className="mt-1 text-[0.7rem] leading-snug">{entry.company}{entry.location && <><br />{entry.location}</>}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <h2 className={`text-[1rem] font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Education
                </h2>
                <div className="flex flex-col gap-3">
                  <div className={`pb-3 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <h3 className={`text-[0.8rem] font-semibold leading-snug tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Bachelor of Science in Information Technology</h3>
                    <p className={`text-[0.7rem] mt-1 leading-snug ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Specialization in Cybersecurity</p>
                    <p className={`text-[0.7rem] mt-1 leading-snug ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Far Eastern University Diliman</p>
                    <span className={`opacity-70 text-[0.65rem] font-mono mt-1 block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>2024 – 2028 (Expected)</span>
                  </div>
                  <div className={`pb-3 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <h3 className={`text-[0.8rem] font-semibold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>General Academic Strand</h3>
                    <p className={`text-[0.7rem] mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>King's Montessori School</p>
                    <span className={`opacity-70 text-[0.65rem] font-mono mt-1 block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>2020 - 2024 (With Honors)</span>
                  </div>
                  <div>
                    <h3 className={`text-[0.8rem] font-semibold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>High School</h3>
                    <p className={`text-[0.7rem] mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>San Bartolome High School</p>
                    <span className={`opacity-70 text-[0.65rem] font-mono mt-1 block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>2016 - 2020 (With Honors)</span>
                  </div>
                </div>
              </div>

              <ProfessionalSections theme={theme} experience={experience} noltaProject={noltaProject} />

              <div id="gallery" className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-base font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Gallery
                  </h2>
                  <button onClick={() => navigateTo('gallery')} className={`bg-transparent border-none text-[0.7rem] font-semibold cursor-pointer inline-flex items-center gap-1 transition-colors group ${
                    theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'
                  }`}>
                    View All
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mt-px transition-transform duration-300 group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {galleryImages.slice(0, 6).map((image, idx) => (
                    <button
                      type="button"
                      aria-label={`View ${image.alt}`}
                      key={idx}
                      className={`flex aspect-square rounded-md overflow-hidden hover:opacity-80 transition-opacity cursor-pointer border ${
                        theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
                      }`}
                      onClick={event => openModal(image.src, image.alt, event.currentTarget)}
                    >
                      <img src={thumbnailFor(image.src)} alt={image.alt} loading="lazy" decoding="async" width="240" height="240" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className={`border rounded-xl p-5 md:p-6 ${theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-[0.9rem] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    Recent Certifications
                  </h2>
                  <button onClick={() => navigateTo('certs')} className={`bg-transparent border-none text-[0.65rem] font-semibold cursor-pointer inline-flex items-center gap-1 transition-colors group ${
                    theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'
                  }`}>
                    View All
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform group-hover:translate-x-1">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
                
                <div className={`flex flex-col border rounded-md overflow-hidden ${theme === 'dark' ? 'border-zinc-800 bg-black' : 'border-zinc-200 bg-zinc-50'}`}>
                  {certifications.slice(0, 3).map((cert, index) => (
                    <div
                      key={index}
                      className={`flex flex-col border-b last:border-0 transition-colors ${
                        theme === 'dark' ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-200 hover:bg-zinc-100'
                      }`}
                    >
                      <CertificationContent cert={cert} theme={theme} onPreview={openModal} compact />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className={`mt-5 border rounded-xl p-5 flex flex-col sm:flex-row gap-5 justify-between items-start sm:items-center ${
            theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
          }`}>
            <div>
              <h3 className={`text-[0.75rem] font-semibold mb-2.5 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Let's Connect
              </h3>
              <div className="flex gap-3">
                <a aria-label="GitHub (opens in a new tab)" href="https://github.com/egunalucasandrei-droid" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}>
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a aria-label="LinkedIn (opens in a new tab)" href="https://www.linkedin.com/in/lucas-andrei-eguna-521b7530a/" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}>
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a aria-label="YouTube (opens in a new tab)" href="https://www.youtube.com/@LucasAndrei-Creatives" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}>
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a aria-label="Instagram (opens in a new tab)" href="https://www.instagram.com/c4znu" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}>
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a aria-label="Facebook (opens in a new tab)" href="https://www.facebook.com/c4znu/" target="_blank" rel="noreferrer" className={`transition-colors ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}>
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
              <a href="tel:+639465685471" className={`text-[0.75rem] font-medium flex items-center gap-1.5 transition-colors w-fit ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}>
                <svg aria-hidden="true" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                +63 9465685471
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=egunalucasandrei@gmail.com" target="_blank" rel="noopener noreferrer" className={`text-[0.75rem] font-medium flex items-center gap-1.5 transition-colors w-fit ${theme === 'dark' ? 'text-white hover:opacity-80' : 'text-black hover:opacity-80'}`}>
                <svg aria-hidden="true" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                egunalucasandrei@gmail.com
              </a>
            </div>
          </div>

        </main>
      )}

      <footer className={`w-full max-w-5xl mx-auto px-5 text-center pt-6 pb-6 text-[0.7rem] font-medium transition-colors ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}>
        Copyright 2026 Lucas Eguna. All rights reserved.
      </footer>

    </div>
  );
}
