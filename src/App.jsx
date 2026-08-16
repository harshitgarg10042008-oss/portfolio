import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import { personalInfo, projects, technologies } from './data/portfolio';
import profilePhoto from './assets/Professionalphoto_HD.webp';

const glowStates = [
  { name: 'violet', className: 'glow-violet', label: 'violet / blue' },
  { name: 'cyan', className: 'glow-cyan', label: 'electric cyan' },
  { name: 'green', className: 'glow-green', label: 'mint green' },
  { name: 'rainbow', className: 'glow-rainbow', label: 'spectrum' },
];

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } } };

function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function ProfileCard() {
  const [activeGlow, setActiveGlow] = useState(0);
  const state = glowStates[activeGlow];

  return (
    <motion.button
      type="button"
      className={`profile-wrap ${state.className}`}
      onClick={() => setActiveGlow((current) => (current + 1) % glowStates.length)}
      whileHover={{ y: -8, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Change profile card glow. Current treatment: ${state.label}`}
    >
      <span className="hanger" aria-hidden="true"><i /><b /></span>
      <span className="profile-card">
        <span className="card-topline"><span>HG / 001</span><span>●</span></span>
        <img src={profilePhoto} alt="Harshit Garg" />
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
    <main className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="outer-intro">
        <span className="outer-index">PORTFOLIO / 2026</span>
        <h1>{personalInfo.name.split(' ').map((part) => <span key={part}>{part}</span>)}</h1>
        <p>{personalInfo.title} <span>—</span> AI systems &amp; web experiences</p>
      </div>

      <div className="portfolio-window">
        <header className="nav-bar">
          <a href="#home" className="wordmark">Portfolio<span>.</span></a>
          <nav aria-label="Primary navigation">
            <a href="#home">Home</a><a href="#about">About</a><a href="#projects">Project</a><a href="#contact">Contact</a>
          </nav>
          <span className="nav-status"><i /> OPEN TO WORK</span>
        </header>

        <section className="hero section-pad" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <span className="eyebrow"><Sparkles size={13} /> SOFTWARE ENGINEER / BUILDER</span>
            <h2>Hi, I&apos;m <em>Harshit</em><br /><strong>Garg.</strong></h2>
            <p className="hero-lede">I build production-oriented web applications and AI-assisted systems with a sharp eye for dependable engineering and clear user experiences.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={16} /></a><a className="button button-quiet" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a></div>
            <div className="hero-meta"><span>BASED IN<br /><strong>GREATER NOIDA, IN</strong></span><span>FOCUS<br /><strong>FULL-STACK / AI</strong></span></div>
          </motion.div>
          <motion.div className="hero-card-stage" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.18 }}><ProfileCard /></motion.div>
        </section>

        <section className="about section-pad" id="about">
          <SectionHeading kicker="01 / THE PERSON" title="Building with intent." copy="A computer science undergraduate turning complex systems into useful, thoughtful products." />
          <div className="about-grid"><div className="about-copy"><p>{personalInfo.longDescription}</p><a className="text-link" href={`mailto:${personalInfo.email}`}>Start a conversation <ArrowUpRight size={15} /></a></div><div className="stats-grid">{personalInfo.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></div>
        </section>

        <section className="tools section-pad" id="skills"><SectionHeading kicker="02 / TOOLKIT" title="Tools that move ideas forward." /><div className="tool-grid">{technologies.flatMap((group) => group.items.slice(0, 5).map((item) => <div className="tool-chip" key={`${group.category}-${item}`}><span className="tool-mark">{item.slice(0, 1)}</span><span>{item}</span></div>))}</div></section>

        <section className="projects section-pad" id="projects"><div className="projects-head"><SectionHeading kicker="03 / SELECTED WORK" title="Proof, not promises." /><span className="project-count">05 / 05</span></div><div className="project-grid">{projects.map((project, index) => <motion.a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.id} whileHover={{ y: -7 }}><div className={`project-art art-${index + 1}`}><span>{String(index + 1).padStart(2, '0')}</span><ArrowUpRight size={19} /></div><div className="project-info"><div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div><p>{project.description}</p><div className="tag-row">{project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div></div></motion.a>)}</div></section>

        <section className="contact section-pad" id="contact"><div className="contact-panel"><SectionHeading kicker="04 / CONTACT" title="Have a good problem?" copy="I am seeking software engineering internships and entry-level opportunities. Tell me what you are building." /><div className="contact-links"><a href={`mailto:${personalInfo.email}`}><Mail size={16} /> {personalInfo.email}</a><a href={`tel:${personalInfo.phone}`}><Phone size={16} /> {personalInfo.phone}</a><span><MapPin size={16} /> {personalInfo.location}</span></div><a className="button button-primary contact-button" href={`mailto:${personalInfo.email}?subject=Hello Harshit`}>Send a message <Send size={15} /></a></div><div className="code-window"><div className="code-head"><span><i /><i /><i /></span><span>harshit.contact.ts</span><span>⌘ K</span></div><pre><code><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}{`\n  name: `}<span className="code-green">&quot;Harshit Garg&quot;</span>,{`\n  role: `}<span className="code-green">&quot;Full-Stack Developer&quot;</span>,{`\n  email: `}<span className="code-green">&quot;{personalInfo.email}&quot;</span>,{`\n  status: `}<span className="code-green">&quot;open_to_work&quot;</span>{`\n`}{'}'};</code></pre></div></section>

        <footer className="footer"><span>© {new Date().getFullYear()} Harshit Garg</span><span>Designed &amp; built with intent</span><div className="socials"><a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a></div></footer>
      </div>
    </main>
  );
}

export default App;
