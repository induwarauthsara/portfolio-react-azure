import React from 'react';
import './App.css';

type Highlight = {
  emoji: string;
  title: string;
  description: string;
};

type Experience = {
  title: string;
  period: string;
  description: string;
};

type ResourceLink = {
  label: string;
  href: string;
};

const highlights: Highlight[] = [
  {
    emoji: '🧠',
    title: 'Full-Stack Web Developer',
    description:
      'Crafting human-centered products with the MERN stack, PHP, and clean design systems.',
  },
  {
    emoji: '🚀',
    title: 'Beta Microsoft Learn Ambassador',
    description:
      'Empowering student communities through hands-on workshops on Git, GitHub, Copilot, and AI.',
  },
  {
    emoji: '💼',
    title: 'Founder · Cyex Tech Solutions',
    description:
      'Building scalable solutions for startups—from ERP platforms to AI-assisted web applications.',
  },
];

const experiences: Experience[] = [
  {
    title: 'Founder · Cyex Tech Solutions',
    period: '2022 — Present',
    description:
      'Leading a freelance collective delivering ERP, ticketing, healthcare, and education systems with automation-first principles.',
  },
  {
    title: 'Microsoft Learn Student Ambassador (Beta)',
    period: '2023 — Present',
    description:
      'Organize hackathons, lightning talks, and tooling deep-dives that help students ship real-world projects faster.',
  },
  {
    title: 'Information Systems Undergraduate · UCSC',
    period: '2021 — Present',
    description:
      'Blending business strategy with applied software engineering to create meaningful digital experiences.',
  },
];

const passionAreas: string[] = [
  'AI-powered product experiences and intelligent automation',
  'Developer tooling, DX, and Git-native collaboration',
  'UI/UX systems that merge clarity, accessibility, and delight',
];

const techStack: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'TailwindCSS', 'GSAP'],
  Backend: ['Node.js', 'Express.js', 'PHP'],
  Database: ['MongoDB', 'MySQL'],
  Cloud: ['Azure', 'Google Cloud', 'GitHub Actions'],
  AI: ['LangChain basics', 'OpenAI GPT', 'Google Gemini'],
};

const resourceLinks: ResourceLink[] = [
  { label: 'induwara.dev', href: 'https://induwara.dev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/induwarauthsara' },
  { label: 'blog.induwara.dev', href: 'https://blog.induwara.dev' },
  { label: 'GitHub', href: 'https://github.com/induwarauthsara' },
];

const App: React.FC = () => {
  return (
    <div className="app-shell">
      <header className="hero" id="top">
        <nav className="nav-bar">
          <span className="nav-id">IU</span>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#community">Community</a>
            <a href="#tech">Tech Stack</a>
            <a href="#connect">Connect</a>
          </div>
          <a className="ghost-link" href="mailto:induwarauthsara@gmail.com">
            Let’s Collaborate
          </a>
        </nav>
        <div className="hero-grid">
          <section className="hero-copy">
            <span className="eyebrow">Full-Stack Web Developer · Colombo, Sri Lanka</span>
            <h1>
              Induwara Uthsara<br />
              <span className="text-gradient">Building future-ready digital experiences</span>
            </h1>
            <p>
              I transform ambitious ideas into resilient products—from research and design to deployment on the cloud. My mission is to bridge creativity and code for startups, communities, and mission-driven teams.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#work">
                View Highlights
              </a>
              <a className="secondary-btn" href="mailto:induwarauthsara@gmail.com">
                Start a conversation
              </a>
            </div>
            <div className="hero-meta">
              <span>Currently leveling up student innovators at UCSC</span>
              <span>Open to freelance & collaborative opportunities</span>
            </div>
          </section>
          <div className="hero-portrait">
            <div className="halo" />
            <img src="/induwara.jpg" alt="Portrait of Induwara Uthsara" />
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="work">
          <div className="section-header">
            <span className="eyebrow">Impact Portfolio</span>
            <h2>Designing systems that scale with ambition</h2>
            <p>
              From ERP suites and ticketing platforms to healthcare, education, and AI-driven applications, I create experiences that are intuitive, performant, and cloud-ready.
            </p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <span className="highlight-emoji" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="community">
          <div className="section-header">
            <span className="eyebrow">Journey</span>
            <h2>Leading with community, mentoring, and innovation</h2>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <div className="timeline-item" key={exp.title}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span>{exp.period}</span>
                  </div>
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="passion-panel">
            <h3>What keeps me curious</h3>
            <ul>
              {passionAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="tech">
          <div className="section-header">
            <span className="eyebrow">Operating Stack</span>
            <h2>Tools shaping every launch</h2>
          </div>
          <div className="tech-grid">
            {Object.entries(techStack).map(([category, items]) => (
              <div className="tech-card" key={category}>
                <h3>{category}</h3>
                <p>{items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="connect">
          <div className="section-header">
            <span className="eyebrow">Let’s Connect</span>
            <h2>Collaborate, mentor, or co-create</h2>
            <p>
              I love collaborating with founders, community builders, and creators who are shaping the future of work, learning, and human-centered tech.
            </p>
          </div>
          <div className="connect-grid">
            <div className="connect-card">
              <h3>Say hello</h3>
              <a className="primary-btn" href="mailto:induwarauthsara@gmail.com">
                induwarauthsara@gmail.com
              </a>
              <p>
                Share your ideas, partnership requests, or let’s plan the next workshop together.
              </p>
            </div>
            <div className="connect-card">
              <h3>Digital homes</h3>
              <ul>
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Induwara Uthsara. Crafted with curiosity and purpose.</p>
        <a className="back-top" href="#top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
};

export default App;
