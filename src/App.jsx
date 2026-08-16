import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from './data/portfolio';
import profilePhoto from './assets/Professionalphoto_HD.webp';

const glowStates = [
  { className: 'glow-violet', label: 'violet blue' },
  { className: 'glow-cyan', label: 'electric cyan' },
  { className: 'glow-green', label: 'mint green' },
  { className: 'glow-rainbow', label: 'spectrum' },
];

const bio = 'Computer Science undergraduate and full-stack developer building production-oriented web applications and AI-assisted systems.';
const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } } };

function ProgressiveBio() {
  const words = bio.split(' ');
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setVisibleWords((current) => Math.min(current + 1, words.length)), 115);
    return () => window.clearInterval(timer);
  }, [words.length]);

  return <p className="hero-lede progressive-bio" aria-label={bio}>{words.map((word, index) => <span key={`${word}-${index}`} className={index < visibleWords ? 'word-visible' : ''}>{word}{index < words.length - 1 ? ' ' : ''}</span>)}</p>;
}

function ProfileCard() {
  const [activeGlow, setActiveGlow] = useState(0);
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false });
  const state = glowStates[activeGlow];

  return (
    <motion.button
      type="button"
      className={`profile-wrap ${state.className} ${pointer.active ? 'profile-hovering' : ''}`}
      style={{ '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%` }}
      onClick={() => setActiveGlow((current) => (current + 1) % glowStates.length)}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100, active: true });
      }}
      onPointerLeave={() => setPointer({ x: 50, y: 50, active: false })}
      animate={{ rotateX: pointer.active ? (50 - pointer.y) * 0.12 : 0, rotateY: pointer.active ? (pointer.x - 50) * 0.16 : 0, scale: pointer.active ? 1.1 : 1, y: pointer.active ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 19, mass: 0.55 }}
      aria-label={`Profile card. Hover to illuminate. Click to change ${state.label} glow.`}
    >
      <span className="profile-card">
        <span className="card-topline"><span>HG / 001</span><span>●</span></span>
        <span className="photo-frame"><img src={profilePhoto} alt="Harshit Garg" /><span className="photo-glow" aria-hidden="true" /><span className="photo-sheen" aria-hidden="true" /></span>
        <span className="card-rule" />
        <span className="card-name">Harshit<br />Garg</span>
        <span className="card-role">FULL-STACK<br />DEVELOPER</span>
        <span className="card-bottom"><span>AVAILABLE</span><span className="card-dot" /></span>
      </span>
    </motion.button>
  );
}

function App() {
  return (
    <main className="site-shell hero-only">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="outer-intro">
        <span className="outer-index">PORTFOLIO / 2026</span>
        <h1><span>Harshit Garg</span><span>Full-Stack Developer</span></h1>
      </div>
      <div className="portfolio-window">
        <header className="nav-bar">
          <a href="#home" className="wordmark">Portfolio<span>.</span></a>
          <nav aria-label="Primary navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Project</a><a href="#contact">Contact</a></nav>
        </header>
        <section className="hero section-pad" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <span className="eyebrow"><Sparkles size={13} /> SOFTWARE ENGINEER / BUILDER</span>
            <h2>Hi, I&apos;m <em>Harshit Garg</em><br /><strong>Full-Stack Developer.</strong></h2>
            <ProgressiveBio />
            <div className="hero-actions"><a className="button button-primary" href="#contact">Explore my work <ArrowUpRight size={16} /></a><a className="button button-quiet" href={`mailto:${personalInfo.email}`}>Let&apos;s connect <ArrowUpRight size={16} /></a></div>
            <div className="hero-meta"><span>BASED IN<br /><strong>GREATER NOIDA, IN</strong></span><span>FOCUS<br /><strong>FULL-STACK / AI</strong></span></div>
          </motion.div>
          <motion.div className="hero-card-stage" initial={{ opacity: 0, x: 30, scale: .9 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .8, delay: .35, ease: [0.23, 1, 0.32, 1] }}><ProfileCard /></motion.div>
        </section>
      </div>
    </main>
  );
}

export default App;
